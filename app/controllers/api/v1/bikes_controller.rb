class Api::V1::BikesController < Api::V1::BaseController
  before_action :authenticate_user!, only: %i[create update destroy]

  def index
    @bikes = policy_scope(Bike)
    render json: {
      status: { code: 200, message: 'Bikes successfully retrieved.' },
      data: BikeSerializer.new(@bikes, is_collection: true).serializable_hash[:data].map { |obj| obj[:attributes] }
    }
  end

  def show
    @bike = Bike.find(params[:id])
    render json: {
      status: { code: 200, message: 'Bike successfully retrieved.' },
      data: BikeSerializer.new(@bike, is_collection: false).serializable_hash[:data][:attributes]
    }

    authorize @bike
  end

  def create
    @bike = Bike.new(bike_params)
    if @bike.save
      render json: {
        status: { code: 200, message: 'Bike successfully created.' },
        data: BikeSerializer.new(@bike, is_collection: false).serializable_hash[:data][:attributes]
      }
    else
      render json: @bike.errors, status: :unprocessable_entity
    end

    authorize @bike
  end

  def update
    @bike = Bike.find(params[:id])
    if @bike.update(bike_params)
      render json: {
        status: { code: 200, message: 'Bike successfully updated.' },
        data: BikeSerializer.new(@bike, is_collection: false).serializable_hash[:data][:attributes]
      }
    else
      render json: @bike.errors, status: :unprocessable_entity
    end

    authorize @bike
  end

  def destroy
    @bike = Bike.find(params[:id])
    @bike.destroy
    render json: {
      status: { code: 200, message: 'Bike successfully destroyed.' },
      data: BikeSerializer.new(@bike, is_collection: false).serializable_hash[:data][:attributes]
    }

    authorize @bike
  end

  def bike_params
    params.require(:bike).permit(:brand, :category, :city, :color, :description, :gender, :groupset, :is_electric,
                                 :min_days, :model, :name, :postal_code, :price_per_day_cents, :release_year, :size,
                                 :status, :street, :weight, :battery_life, :owner_id)
  end
end
