# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170830185138) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "consonants", force: :cascade do |t|
    t.string "point", null: false
    t.string "method", null: false
    t.boolean "voiced", null: false
    t.string "char", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["point", "method", "voiced", "char"], name: "index_consonants_on_point_and_method_and_voiced_and_char", unique: true
  end

  create_table "vowels", force: :cascade do |t|
    t.string "openness", null: false
    t.string "frontness", null: false
    t.boolean "rounded", null: false
    t.string "char", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["frontness", "openness", "rounded", "char"], name: "index_vowels_on_frontness_and_openness_and_rounded_and_char", unique: true
  end

end
