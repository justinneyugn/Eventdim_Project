json.extract! event, :id, :title, :details, :creator_id, :location, :ticket_price, :date
json.photoUrl url_for(event.photo)

