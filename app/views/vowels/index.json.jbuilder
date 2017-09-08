@vowels.each do |vowel|
  json.set! vowel.id do
    json.partial! "vowels/vowel", vowel: vowel
  end
end
