class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null:false
      t.string :details, null:false
      t.string :date, null:false 
      t.integer :creator_id, null:false
      t.timestamps
    end

    add_index :events, :creator_id, unique:true
  end
end
