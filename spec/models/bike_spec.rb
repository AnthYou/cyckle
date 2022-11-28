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
    it { should belong_to(:owner) }
    it { should have_many(:bookings) } 
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:brand) }
    it { should validate_presence_of(:category) }
    it { should validate_presence_of(:gender) }
    it { should validate_presence_of(:size) }
    it { should validate_presence_of(:min_days) }
    it { should validate_presence_of(:price_per_day_cents) }
    it { should validate_presence_of(:street) }
    it { should validate_presence_of(:postal_code) }
    it { should validate_presence_of(:city) }

    it { should validate_length_of(:street).is_at_least(5) }
    it { should validate_length_of(:postal_code).is_at_least(3) }
    it { should validate_length_of(:city).is_at_least(2) }

    it do
      should validate_inclusion_of(:category)
        .in_array(%w[road city mountain gravel touring])
    end
    it do
      should validate_inclusion_of(:gender)
        .in_array(%w[male female unisex])
    end
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
