ActionController::Routing::Routes.draw do |map|
  map.resources :products

  map.connect("admin/products/new", :controller => "admin", :action => "chapilla")
  map.connect("admin/products/:id", :controller => "admin", :action => "chapilla")
  map.connect("products/image", :controller => "products", :action => "save_photo_ajax")

  map.connect("productos/:id", :controller => "home", :action => "productos")


  map.connect("contacto", :controller => "home", :action => "post_contacto", :conditions => { :method => :post })

  map.root :controller => "home"

  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
