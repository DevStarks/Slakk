Rails.application.routes.draw do
  root to: 'static_pages#root'


  # checks for available username

  namespace :api, defaults: { format: :json } do
    get '/users/check/', to: 'users#check'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy]
    get '/channels/count/', to: 'channels#count'
    get '/channels/search/', to: 'channels#search'
    post '/channels/connect/', to: 'channels#connect'
    resources :messages, only: [:create, :update, :destroy, :index, :show]
  end
end
