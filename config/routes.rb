Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # Users
      resources :users, only: [:create]
      get 'login', to: 'users#login'
    end
  end

  root to: 'pages#home'
  get '/*path' => 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
