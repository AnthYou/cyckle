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
FactoryBot.define do
  factory :notification do
    notification_type { 'Booking' }
    content           { 'Vous avez une nouvelle réservation.' }
    read              { false }
    booking           { association :booking }
    receiver          { association :user }
  end
end
