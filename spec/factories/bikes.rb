# == Schema Information
#
# Table name: bikes
#
#  id                  :bigint           not null, primary key
#  battery_life        :integer
#  brand               :string
#  category            :string
#  city                :string
#  color               :string
#  description         :text
#  gender              :string
#  groupset            :string
#  is_electric         :boolean
#  latitude            :float
#  longitude           :float
#  min_days            :integer
#  model               :string
#  name                :string
#  postal_code         :string
#  price_per_day_cents :integer          default(0), not null
#  release_year        :integer
#  size                :string
#  status              :string
#  street              :string
#  weight              :float
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  owner_id            :bigint           not null
#
# Indexes
#
#  index_bikes_on_owner_id  (owner_id)
#
# Foreign Keys
#
#  fk_rails_...  (owner_id => users.id)
#
FactoryBot.define do
  factory :bike do
    name         { Faker::Company.name }
    gender       { Bike::GENDER.sample }
    status       { 'available' }
    min_days     { [1, 2, 4, 5].sample }
    category     { Bike::CATEGORIES.sample }
    description  { Faker::Company.catch_phrase }
    size         { 'S' }
    brand        { Faker::Company.name }
    model        { Faker::Company.name }
    release_year { 1999 }
    color        { Faker::Color.color_name }
    is_electric  { [true, false].sample }
    battery_life { 10 }
    groupset     { '2x9' }
    weight       { 10.5 }
    street       { Faker::Address.street_address }
    postal_code  { Faker::Address.zip_code }
    city         { Faker::Address.city }
    latitude     { Faker::Address.latitude }
    longitude    { Faker::Address.longitude }
    owner        { association :user }
  end
end
