class ProductsController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => "save_photo_ajax"

  # GET /products
  # GET /products.xml
  def index
    @products = Product.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @products }
    end
  end

  # GET /products/1
  # GET /products/1.xml
  def show
    @product = Product.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @product }
    end
  end

  # GET /products/new
  # GET /products/new.xml
  def new
    @product = Product.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @product }
    end
  end

  # GET /products/1/edit
  def edit
    @product = Product.find(params[:id])
  end

  # POST /products
  # POST /products.xml
  def create
    @product = Product.new(params[:product])

    respond_to do |format|
      if @product.save
        # format.html { redirect_to(@product, :notice => 'Product was successfully created.') }
        # format.xml  { render :xml => @product, :status => :created, :location => @product }
        format.json  { render :json => @product, :status => :created, :location => @product }
      else
        format.html { render :action => "new" }
        format.json  { render :json => @product.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /products/1
  def update
    @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.json  { render :json => [] }
      else
        format.json  { render :json => @product.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.xml
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to("/admin") }
      format.xml  { head :ok }
    end
  end

  # POST /products/image
  def save_photo_ajax
    if params[:Filedata]
      process_and_save_images(params[:Filedata], params[:Filename])
    end
    respond_to do |format|
      format.json { render :json => [] }
    end
  end    
  
  private 
  def process_and_save_images(image, name)
    directory = 'public/images/products'
    FileUtils.mkdir_p directory
    path = File.join(directory, name)
    File.open(path, "wb") { |f| f.write(image.read) }
    # puts `convert -quality 30 -strip -size 50x50 #{path} -resize 50x50 +profile '*' #{path_thumb}`
    # puts `convert #{path} -quality 20 #{path}`
    
    # HomePagePhoto.create(:partner_id=>partner_id, :title=>title, :path=>path, :path_thumb=>path_thumb)
  end
end
