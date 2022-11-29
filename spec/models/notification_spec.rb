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
require 'rails_helper'

RSpec.describe Notification, type: :model do
  describe 'associations' do
    it { should belong_to(:booking) }
    it { should belong_to(:receiver) }
  end

  describe 'validations' do
    it { should validate_presence_of(:notification_type) }
    it { should validate_presence_of(:content) }
    it { should validate_presence_of(:read) }
  end
end
