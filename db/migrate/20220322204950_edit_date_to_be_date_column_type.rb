class EditDateToBeDateColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :date
    add_column :events, :date, :date, null:false
  end
end
