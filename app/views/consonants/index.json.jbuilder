@consonants.each do |consonant|
  json.set! consonant.id do
    json.partial! "/consonants/consonant", consonant: consonant
  end
end
