# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :bigint           not null
#  booking_id :bigint           not null
#
# Indexes
#
#  index_messages_on_author_id   (author_id)
#  index_messages_on_booking_id  (booking_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => users.id)
#  fk_rails_...  (booking_id => bookings.id)
#
FactoryBot.define do
  factory :message do
    content { "MyText" }
    author { nil }
    booking { nil }
  end
end
