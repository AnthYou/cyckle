# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  city                   :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  gender                 :string
#  height                 :integer
#  jti                    :string           not null
#  last_name              :string
#  phone                  :string
#  postal_code            :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  street                 :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_jti                   (jti) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
FactoryBot.define do
  sequence(:email) { |n| "user#{n}@example.com" }

  factory :user do
    email       { generate(:email) }
    password    { '123456' }
    first_name  { Faker::Name.first_name }
    last_name   { Faker::Name.last_name }
    gender      { User::GENDER.sample }
    height      { (100..250).to_a.sample }
    phone       { Faker::Number.leading_zero_number(digits: 10) }
    street      { Faker::Address.street_address }
    postal_code { Faker::Address.zip_code }
    city        { Faker::Address.city }
  end
end
