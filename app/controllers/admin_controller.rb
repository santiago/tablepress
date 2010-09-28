class AdminController < ApplicationController
  def index    
    @products= Product.find(:all)
  end

  def chapilla
    @product= params[:id] ? Product.find(params[:id]) : Product.new
  end
end
