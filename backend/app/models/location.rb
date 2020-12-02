class Location < ApplicationRecord
    has_many :userlocations
    has_many :users, through: :userlocations
  
end
