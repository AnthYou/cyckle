class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.string :notification_type
      t.string :content
      t.boolean :read, default: false
      t.references :booking, null: false, foreign_key: true
      t.references :receiver, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
