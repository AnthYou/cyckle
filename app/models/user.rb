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
class User < ApplicationRecord
  GENDER = %w[male female non-binary].freeze
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name,  presence: true, length:       { minimum: 3 }
  validates :last_name,   presence: true, length:       { minimum: 2 }
  validates :gender,      presence: true, inclusion:    { in: GENDER }
  validates :height,      presence: true, numericality: { only_integer: true, greater_than: 99, less_than: 251 }
  validates :street,      presence: true
  validates :postal_code, presence: true
  validates :city,        presence: true
  validates :phone,       presence: true, numericality: true, length: { minimum: 10, maximum: 15 }
end
