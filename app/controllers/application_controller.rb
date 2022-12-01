class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    user_sign_up_attributes = %i[first_name last_name gender height street postal_code city phone]
    devise_parameter_sanitizer.permit(:sign_up, keys: user_sign_up_attributes)
    devise_parameter_sanitizer.permit(:account_update, keys: user_sign_up_attributes)
  end
end
