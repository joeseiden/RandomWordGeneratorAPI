class Vowel < ApplicationRecord
  validates :openness, :frontness, :char, presence: true
  validates :char, uniqueness: true
  validates :rounded, inclusion: { in: [true, false] }
  validates :openness, inclusion: { in: %w(Close Near-Close Close-Mid Mid Open-Mid Near-Open Open) }
  validates :frontness, inclusion: { in: %w(Front Near-Front Central Near-Back Back) }

  def name
    @name ||= "#{openness} #{frontness} #{rounded ? 'Rounded' : 'Unrounded'} Vowel"
  end

  def self.find_by_features(features)
    Vowel.find_by(openness: features[:openness],
                  frontness: features[:frontness],
                  rounded: features[:rounded])
  end

  def to_s
    char
  end
end
