Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :words, only: [:index]
  resources :consonants, only: [:show, :index]

  root "static_pages#root"
end
