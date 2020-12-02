class User < ApplicationRecord
    has_many :userlocations
    has_many :locations, through: :userlocations
end
