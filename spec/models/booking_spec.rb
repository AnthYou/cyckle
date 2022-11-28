# == Schema Information
#
# Table name: bookings
#
#  id                :bigint           not null, primary key
#  end_date          :date
#  start_date        :date
#  status            :string           default("pending")
#  total_price_cents :integer          default(0), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  bike_id           :bigint           not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_bookings_on_bike_id  (bike_id)
#  index_bookings_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (bike_id => bikes.id)
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:bike) }
    it { should have_many(:reviews) }
  end

  describe 'validations' do
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:end_date) }
    it { should validate_presence_of(:total_price_cents) }
  end
end
