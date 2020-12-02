class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      string: city
      string: long, lat

      t.timestamps
    end
  end
end
