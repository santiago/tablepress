class HomeController < ApplicationController
  def index
    @at= 'inicio'
  end

  def productos
    @at= "productos"
    if params[:id]=="chapillas"
      @products= Product.find(:all)
      render "productos"
    elsif params[:id]=="cantos"
      render "cantos"
    elsif params[:id]=="tableros"
      render "tableros"
    else
      @products= Product.find(:all)
    end
  end

  def servicios
    @at= "servicios"
  end

  def contacto
    @at= "contacto"
  end

  def post_contacto
    email_ventas= ContactoMailer.create_a_ventas(params[:contacto])
    email_cliente= ContactoMailer.create_a_cliente(params[:contacto])
    email_ventas.set_content_type("text/html")
    email_cliente.set_content_type("text/html")

    ContactoMailer.deliver(email_ventas)
    ContactoMailer.deliver(email_cliente)

    respond_to do |format|
      format.json {render :json => []}
    end
  end

  def empresa
    @at= "empresa"
  end

  def beneficios
    @at= "beneficios"
  end

end
