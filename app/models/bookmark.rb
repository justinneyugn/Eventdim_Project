# == Schema Information
#
# Table name: bookmarks
#
#  id            :bigint           not null, primary key
#  bookmarker_id :integer          not null
#  event_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Bookmark < ApplicationRecord
    validates :bookmarker_id, :event_id, presence:true

    belongs_to :bookmarker, 
        primary_key: :id,
        foreign_key: :bookmarker_id,
        class_name: :User

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
