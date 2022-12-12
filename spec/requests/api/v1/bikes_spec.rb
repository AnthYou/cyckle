require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe 'Api::V1::Bikes', type: :request do
  describe 'GET /bikes' do
    before do
      create_list(:bike, 10)
    end

    it 'returns http success' do
      get '/api/v1/bikes'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /bikes/:id' do
    let(:bike) { create(:bike) }

    it 'returns http success' do
      get "/api/v1/bikes/#{bike.id}"
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /bikes' do
    let(:user) { create(:user) }

    it 'returns http success' do
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }
      auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, user)
      post '/api/v1/bikes', params: { 'bike': {
        'name': 'Tarmac',
        'brand': 'Specialized',
        'category': 'road',
        'gender': 'male',
        'size': 'M',
        'min_days': 3,
        'price_per_day_cents': 1000,
        'street': '1 Rue de Rivoli',
        'postal_code': '75001',
        'city': 'Paris',
        'color': 'Black',
        'model': 'Tarmac',
        'release_year': 2019,
        'weight': 7.5,
        'owner_id': user.id
      } }.to_json,
                            headers: auth_headers
      expect(response).to have_http_status(:success)
    end
  end

  describe 'PATCH /bikes/:id' do
    let(:user) { create(:user) }
    let(:bike) { create(:bike, owner: user) }

    it 'returns http success' do
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }
      auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, user)
      patch "/api/v1/bikes/#{bike.id}", params: { 'bike': { 'color': 'Red' } }.to_json, headers: auth_headers
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE /bikes/:id' do
    let(:user) { create(:user) }
    let(:bike) { create(:bike, owner: user) }

    it 'returns http success' do
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }
      auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, user)
      delete "/api/v1/bikes/#{bike.id}", headers: auth_headers
      expect(response).to have_http_status(:success)
    end
  end
end
