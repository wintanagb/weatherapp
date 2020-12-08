class User < ApplicationRecord
    has_secure_password #Encrypts the user's password automatically

    has_many :user_locations, dependent: :destroy
    has_many :locations, through: :user_locations

    validates :username, presence: true
end
