class Api::V1::CurrentUserController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    render json: current_user, status: :ok

    skip_policy_scope
  end
end
