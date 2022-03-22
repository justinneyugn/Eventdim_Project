class AddLocationAndTicketPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :location, :string, null:false
    add_column :events, :ticket_price, :float, null:false
  end
end
