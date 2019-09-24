Rails.application.routes.draw do



  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => {
   :registrations => 'users/registrations',
   :sessions => 'users/sessions'
  }
 resources :articles do
   resources :comments
 end
  #root "articles#index"
  get "/categories/about" => "categories#about", as: :category_about


  #get "/articles/:id/archive" => "articles#archive", as: :article_archive
  get "/categories/category_id" => "categories#category", as: :category


  get "/" => "home#top"

  post "/upload_video" => "upload#upload_video", :as => :upload_video
  get "/download_file/:name" => "upload#access_file", :as => :upload_access_file, :name => /.*/

  post "/upload_image" => "upload#upload_image", :as => :upload_image

  post "/upload_file" => "upload#upload_file", :as => :upload_file

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
