class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :amount, null:false
      t.integer :purchaser_id, null:false
      t.integer :event_id, null:false
      t.timestamps
    end

    add_index :tickets, :purchaser_id
    add_index :tickets, :event_id
  end
end
