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
class Booking < ApplicationRecord
  monetize :total_price_cents

  enum status: %i[pending accepted refused canceled].index_with(&:to_s)

  belongs_to :user
  belongs_to :bike

  has_many :reviews
  has_many :notifications

  validates :start_date,        presence: true
  validates :end_date,          presence: true
  validates :total_price_cents, presence: true
end
