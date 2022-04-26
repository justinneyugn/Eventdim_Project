Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users do 
      resources :events, only: [:index]
      resources :tickets, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events do 
      resources :tickets, only: [:create, :update, :destroy]
    end
    resources :tickets
    resources :bookmarks
  end

  
end
