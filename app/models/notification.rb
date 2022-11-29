# == Schema Information
#
# Table name: notifications
#
#  id                :bigint           not null, primary key
#  content           :string
#  notification_type :string
#  read              :boolean          default(FALSE)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  booking_id        :bigint           not null
#  receiver_id       :bigint           not null
#
# Indexes
#
#  index_notifications_on_booking_id   (booking_id)
#  index_notifications_on_receiver_id  (receiver_id)
#
# Foreign Keys
#
#  fk_rails_...  (booking_id => bookings.id)
#  fk_rails_...  (receiver_id => users.id)
#
class Notification < ApplicationRecord
  belongs_to :booking
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id', required: true

  validates :notification_type, presence: true
  validates :content,           presence: true
  validates :read,              presence: true
end
