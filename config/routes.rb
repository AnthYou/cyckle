Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
                     path: 'api/v1/',
                     path_names: {
                       sign_in: 'login',
                       sign_out: 'logout',
                       registration: 'signup'
                     },
                     controllers: {
                       sessions: 'api/v1/users/sessions',
                       registrations: 'api/v1/users/registrations'
                     }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # API Routes TO DO
      get '/current_user', to: 'current_user#index'
    end
  end

  root to: 'pages#home'
  get '/*path' => 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
