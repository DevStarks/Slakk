class Remove < ActiveRecord::Migration
  def change
    drop_table :direct_messages
    drop_table :direct_message_memberships

  end
end
