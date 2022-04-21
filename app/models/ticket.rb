# == Schema Information
#
# Table name: tickets
#
#  id           :bigint           not null, primary key
#  amount       :integer          not null
#  purchaser_id :integer          not null
#  event_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Ticket < ApplicationRecord
    validates :amount, :purchaser_id, :event_id, presence:true

    belongs_to :purchaser,
        primary_key: :id,
        foreign_key: :purchaser_id,
        class_name: :User

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
