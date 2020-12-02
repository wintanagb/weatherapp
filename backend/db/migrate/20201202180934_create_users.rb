class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      string: username
      string: password

      t.timestamps
    end
  end
end
