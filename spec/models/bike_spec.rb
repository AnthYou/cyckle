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
require 'rails_helper'

RSpec.describe Bike, type: :model do
  describe 'associations' do
  end

  describe 'validations' do
  end

  describe 'instance methods' do
    let(:bike) { build(:bike) }

    describe '#address' do
      before do
        bike.street      = '1 rue du chemin vert'
        bike.postal_code = '75011'
        bike.city        = 'Paris'
      end

      it 'should return a valid address' do
        expect(bike.address).to eq('1 rue du chemin vert, 75011, Paris')
      end
    end
  end
end
