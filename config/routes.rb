Rails.application.routes.draw do
  root to: 'static_pages#root'


  # checks for available username

  namespace :api, default: { format: :json } do
    get '/users/check/:username', to: 'users#check'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
