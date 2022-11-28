FactoryBot.define do
  factory :booking do
    status { "MyString" }
    price { 1 }
    start_date { "2022-11-28" }
    end_date { "2022-11-28" }
    user { nil }
    bike { nil }
  end
end
