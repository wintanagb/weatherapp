class CreateUserlocations < ActiveRecord::Migration[6.0]
  def change
    create_table :userlocations do |t|
      t.references:location
      t.references:user

    end
  end
end

