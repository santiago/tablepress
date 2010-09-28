# -*- coding: utf-8 -*-
class ContactoMailer < ActionMailer::Base
  def a_ventas(contacto)
    subject    "Email de contacto"
    recipients "santiago@ontoworks.com"
    # recipients "ventas@table-press.com"
    from       contacto[:email]
    
    body       :contacto => contacto
  end

  def a_cliente(contacto)
    subject    "Su información de contacto fue recibida por nosotros"
    recipients contacto[:email]
    from       "ventas@table-press.com"
    
    body       :contacto => contacto
  end
end
