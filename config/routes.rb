Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get '/users/check/', to: 'users#check'
    get '/users/count/', to: 'users#count'
    get '/users/search/', to: 'users#search'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy]
    get '/channels/count/', to: 'channels#count'
    get '/channels/search/', to: 'channels#search'
    post '/channels/connect/', to: 'channels#connect'
    post '/channels/disconnect/', to: 'channels#disconnect'
    resources :messages, only: [:create, :update, :destroy, :index, :show]
  end
end
