class ChangeColumnInChannels < ActiveRecord::Migration
  def change
    remove_column :channels, :name

    add_column :channels, :name, :string
  end
end
