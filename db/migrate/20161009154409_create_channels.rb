class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :purpose

      t.timestamps null: false
    end

    create_table :channel_memberships do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
    end
    add_index :channel_memberships, :user_id
    add_index :channel_memberships, :channel_id
  end
end
