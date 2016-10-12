class AddColumnToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :direct_message, :boolean, default: false
  end
end
