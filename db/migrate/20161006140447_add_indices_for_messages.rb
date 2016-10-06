class AddIndicesForMessages < ActiveRecord::Migration
  def change
    drop_table :messages

    create_table :messages do |t|
      t.references :messageable, polymorphic: true, index: true
      t.integer :conversation_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.timestamps null: false
    end
    add_index :messages, :conversation_id
    add_index :messages, :author_id
  end
end
