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
FactoryBot.define do
  factory :booking do
    status            { 'pending' }
    total_price_cents { 10_000 }
    start_date        { Date.today + 10.days }
    end_date          { Date.today + 15.days }
    user              { association :user }
    bike              { association :bike }

    trait :with_review do
      transient do
        rating { 5 }
      end

      after(:create) do |booking, evaluator|
        create(:review, booking:, rating: evaluator.rating)
      end
    end
  end
end
