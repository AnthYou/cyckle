require 'rails_helper'

RSpec.describe UserPolicy, type: :policy do
  subject { described_class.new(user, other_user) }

  let(:other_user) { build(:user) }

  context 'being a visitor' do
    let(:user) { nil }

    it { is_expected.to permit_action(:register) }
    it { is_expected.to permit_action(:login) }
  end

  context 'being a signed in user' do
    let(:user) { build(:user) }

    it { is_expected.to permit_action(:register) }
    it { is_expected.to permit_action(:login) }
  end
end
