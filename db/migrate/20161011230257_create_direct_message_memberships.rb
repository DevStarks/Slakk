class CreateDirectMessageMemberships < ActiveRecord::Migration
  def change
    create_table :direct_message_memberships do |t|
      t.integer :user_id, null: false
      t.integer :direct_message_id, null: false

      t.timestamps null: false
    end
    add_index :direct_message_memberships, :user_id
    add_index :direct_message_memberships, :direct_message_id
  end
end
