class UpdateCreatorId < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :creator_id
    add_column :events, :creator_id, :integer, null:false
    add_index :events, :creator_id
  end
end
