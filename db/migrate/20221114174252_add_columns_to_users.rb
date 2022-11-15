class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string
    add_column :users, :height, :integer
    add_column :users, :street, :string
    add_column :users, :postal_code, :string
    add_column :users, :city, :string
    add_column :users, :phone, :string
  end
end
