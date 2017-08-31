class WordGenerator

  def initialize(consonants, vowels, syllable_structure, length)
    validate_initial_variables(consonants, vowels, syllable_structure, length)
    @consonants = consonants
    @vowels = vowels
    @syllable_structure = syllable_structure
    @length = length.to_i
    @syllable_generator = SyllableGenerator.new(@consonants, @vowels, @syllable_structure)
  end

  def generate_many_words(count)
    words = Array.new(count.to_i)
    count.to_i.times do |i|
      words[i] = generate_word
    end
    words
  end

  def generate_word
    length = 1 + rand(@length)
    word = ""
    length.times do
      word += @syllable_generator.generate_syllable
    end
    word
  end

  private

  def validate_initial_variables(consonants, vowels, syllable_structure, length)
    validate_consonants_and_vowels(consonants, vowels)
    validate_syllable_structure(syllable_structure)
    raise "Length must be a non-zero integer" unless length.is_a?(Integer) && length > 0
  end

  def validate_consonants_and_vowels(consonants, vowels)
    raise "Consonants must be an array of single character strings" unless array_of_single_char_strings?(consonants)
    raise "Vowels must be an array of single character strings" unless array_of_single_char_strings?(vowels)
  end

  def array_of_single_char_strings?(array)
    array.is_a?(Array) && array.all? { |e| e.is_a?(String) && e.length == 1 }
  end

  def validate_syllable_structure(structure)
    raise "Structure is either not a string or is not in the correct format" unless structure.is_a?(String) && structure =~ /^[C]*[V]+[C]*$/
  end
end
