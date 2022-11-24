class CreateBikes < ActiveRecord::Migration[7.0]
  def change
    create_table :bikes do |t|
      t.string :name
      t.string :gender
      t.string :status, default: 'available'
      t.integer :min_days
      t.string :category
      t.text :description
      t.string :size
      t.string :brand
      t.string :model
      t.integer :release_year
      t.string :color
      t.boolean :is_electric
      t.integer :battery_life
      t.string :groupset
      t.float :weight
      t.string :street
      t.string :postal_code
      t.string :city
      t.float :latitude
      t.float :longitude
      t.references :owner, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
