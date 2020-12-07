class UserLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :city, presence: true 
  validates :state, presence: true
end
