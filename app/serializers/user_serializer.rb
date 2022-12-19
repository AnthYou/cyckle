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
class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :id, :email, :first_name, :last_name, :gender, :height, :phone, :address, :city, :created_at

  attribute :created_date do |user|
    user&.created_at&.strftime('%d/%m/%Y')
  end

  attribute :photo_url do |user|
    user.avatar.attached? ? user.avatar.url : nil
  end
end
