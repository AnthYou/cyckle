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
class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :id, :comment, :rating

  attribute :user do |review|
    UserSerializer.new(review.user).serializable_hash[:data][:attributes]
  end
end
