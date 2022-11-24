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
    name { "MyString" }
    gender { "MyString" }
    status { "MyString" }
    min_days { 1 }
    category { "MyString" }
    description { "MyText" }
    size { "MyString" }
    brand { "MyString" }
    model { "MyString" }
    release_year { 1 }
    color { "MyString" }
    is_electric { false }
    battery_life { 1 }
    groupset { "MyString" }
    weight { 1.5 }
    street { "MyString" }
    postal_code { "MyString" }
    city { "MyString" }
    latitude { 1.5 }
    longitude { 1.5 }
    owner { association :user }
  end
end
