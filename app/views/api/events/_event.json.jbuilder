json.extract! event, :id, :title, :details, :creator_id, :location, :ticket_price
json.photoUrl url_for(event.photo)

