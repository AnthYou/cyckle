class Api::V1::CurrentUserController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    render json: {
      status: { code: 200, message: 'Connexion réussie.' },
      data: UserSerializer.new(current_user).serializable_hash[:data][:attributes]
    }, status: :ok

    skip_policy_scope
  end
end
