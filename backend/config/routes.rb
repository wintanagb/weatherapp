Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :create, :destroy, :update, :index]
  resources :locations, only: [:index, :show]
  resources :user_locations, only: [:create, :destroy]
  resources :sessions, only: [:create]

  post '/logout', to: 'session#logout'
end
