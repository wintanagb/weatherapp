class AddNameToUserLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :user_locations, :name, :string
  end
end
