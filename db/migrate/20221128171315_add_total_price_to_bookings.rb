class AddTotalPriceToBookings < ActiveRecord::Migration[7.0]
  def change
    add_monetize :bookings, :total_price, currency: { present: false }
  end
end
