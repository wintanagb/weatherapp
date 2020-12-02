Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :create, :destroy, :update]
  resources :locations, only: [:index, :show]
  # resources :user_locations
end
