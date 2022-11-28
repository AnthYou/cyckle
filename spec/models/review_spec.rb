# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  comment    :text
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  booking_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_reviews_on_booking_id  (booking_id)
#  index_reviews_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (booking_id => bookings.id)
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:booking) }
  end

  describe 'validations' do
    it { should validate_presence_of(:rating) }
    it { should validate_presence_of(:comment) }
    it { should validate_length_of(:comment).is_at_least(10) }
    it do
      should validate_numericality_of(:rating)
        .only_integer
        .is_greater_than_or_equal_to(0)
        .is_less_than_or_equal_to(5)
    end
  end
end
