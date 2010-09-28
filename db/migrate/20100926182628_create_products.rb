class CreateProducts < ActiveRecord::Migration
  def self.up
    create_table :products do |t|
      t.string :name
      t.string :code
      t.string :product_type
      t.text :specs
      t.string :thumb_image
      t.string :zoom_image
      t.boolean :active
      t.timestamps
    end
  end

  def self.down
    drop_table :products
  end
end
