class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :picture_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps null: false
    end
    add_index :users, :username, unique: true
  end
end
