# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_02_195510) do

  create_table "locations", force: :cascade do |t|
    t.string "city"
    t.string "coordinates"
  end

  create_table "user_locations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "location_id", null: false
    t.index ["location_id"], name: "index_user_locations_on_location_id"
    t.index ["user_id"], name: "index_user_locations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
  end

  add_foreign_key "user_locations", "locations"
  add_foreign_key "user_locations", "users"
end
