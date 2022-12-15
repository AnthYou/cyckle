# == Schema Information
#
# Table name: bikes
#
#  id                  :bigint           not null, primary key
#  battery_life        :integer
#  brand               :string
#  category            :string
#  city                :string
#  color               :string
#  description         :text
#  gender              :string
#  groupset            :string
#  is_electric         :boolean
#  latitude            :float
#  longitude           :float
#  min_days            :integer
#  model               :string
#  name                :string
#  postal_code         :string
#  price_per_day_cents :integer          default(0), not null
#  release_year        :integer
#  size                :string
#  status              :string
#  street              :string
#  weight              :float
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  owner_id            :bigint           not null
#
# Indexes
#
#  index_bikes_on_owner_id  (owner_id)
#
# Foreign Keys
#
#  fk_rails_...  (owner_id => users.id)
#
class BikeSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :id, :name, :brand, :model, :release_year, :category, :status, :size, :gender, :description, :groupset,
             :color, :is_electric, :min_days, :price_per_day_cents, :battery_life, :weight, :address,
             :city, :latitude, :longitude, :created_at, :updated_at

  attribute :photo_urls do |bike|
    bike.photos.attached? ? bike.photos.map(&:url) : nil
  end

  attribute :owner do |bike|
    UserSerializer.new(bike.owner).serializable_hash[:data][:attributes]
  end
end
