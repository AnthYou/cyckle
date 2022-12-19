# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create users & bikes
puts '🔥 creating users & bikes...'
user_count = 0
bike_count = 0

10.times do |n|
  user_file = URI.open('https://source.unsplash.com/900x900/?portrait')
  bike_file = URI.open('https://source.unsplash.com/1600x900/?bicycle')
  user = User.new(
    email: "user#{n + 1}@cyckle.com",
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: User::GENDER.sample,
    height: (100..250).to_a.sample,
    phone: Faker::Number.leading_zero_number(digits: 10),
    street: "#{n + 1} rue des Pyrénées",
    postal_code: '75020',
    city: 'Paris'
  )
  bike = Bike.new(
    status: 'available',
    name: Faker::Company.name,
    brand: Faker::Company.name,
    model: Faker::Company.name,
    category: Bike::CATEGORIES.sample,
    color: Faker::Color.color_name,
    description: Faker::Company.catch_phrase,
    size: %w[S M L].sample,
    is_electric: [true, false].sample,
    battery_life: [10, 5, nil].sample,
    groupset: '2x10',
    weight: 10.5,
    release_year: 2019,
    gender: Bike::GENDER.include?(user.gender) ? user.gender : 'unisex',
    street: user.street,
    postal_code: user.postal_code,
    city: user.city,
    min_days: [1, 2, 4, 5].sample,
    price_per_day_cents: (1000..3000).to_a.sample,
    owner: user
  )
  user.avatar.attach(io: user_file, filename: 'user.jpg', content_type: 'image/jpg')
  bike.photos.attach(io: bike_file, filename: 'bike.jpg', content_type: 'image/jpg')

  user_count += 1 if user.save
  bike_count += 1 if bike.save
end

puts '✅ done!'
puts "🙋‍♂️ #{user_count} users created."
puts "🙋🚲 #{bike_count} bikes created."

puts '🔥 creating bookings...'
# Create bookings & reviews
booking_count = 0
review_count = 0
bike_count.times do |n|
  bike = Bike.find(n + 1)
  user = User.find(user_count - n)
  booking = Booking.new(
    start_date: Date.today + 1,
    end_date: Date.today + 3,
    total_price_cents: bike.price_per_day_cents * 3,
    bike:,
    user:
  )
  review = Review.new(
    comment: Faker::Lorem.paragraph(sentence_count: 2),
    rating: (1..5).to_a.sample,
    booking:,
    user:
  )
  booking_count += 1 if booking.save
  review_count += 1 if review.save
end

puts '✅ done!'
puts "📅 #{booking_count} bookings created."
