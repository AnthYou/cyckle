class AddPricePerDayToBikes < ActiveRecord::Migration[7.0]
  def change
    add_monetize :bikes, :price_per_day, currency: { present: false }
  end
end
