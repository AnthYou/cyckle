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
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:first_name) }
    it { should validate_length_of(:first_name).is_at_least(3) }
    it { should validate_length_of(:last_name).is_at_least(2) }
    it { should validate_presence_of(:gender) }
    it { should validate_inclusion_of(:gender).in_array(%w[male female non-binary]) }
    it { should validate_presence_of(:height) }
    it { should validate_numericality_of(:height).is_greater_than(99).is_less_than(251) }
    it { should validate_presence_of(:street) }
    it { should validate_presence_of(:postal_code) }
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:phone) }
    it { should validate_numericality_of(:phone) }
    it { should validate_length_of(:phone).is_at_least(10).is_at_most(15) }
  end
end
