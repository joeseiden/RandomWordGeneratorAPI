class SyllableGenerator

  def initialize(consonants, vowels, structure)
    @structure = structure
    @consonants = consonants
    @vowels = vowels

    @onset_count = calculate_onset_count
    @nucleus_count = calculate_nucleus_count
    @coda_count = calculate_coda_count
  end

  def generate_syllable
    onset = generate_consonant_cluster(@onset_count)
    nucleus = generate_vowel_cluster(@nucleus_count)
    coda = generate_consonant_cluster(@coda_count)
    return onset + nucleus + coda
  end

  def generate_consonant_cluster(count)
    cluster = ""
    rand(count + 1).times do |i|
      cluster += @consonants.sample.to_s
    end
    cluster
  end

  def generate_vowel_cluster(count)
    cluster = ""
    (rand(count) + 1).times do |i|
      cluster += @vowels.sample.to_s
    end
    cluster
  end

  private

  def calculate_onset_count
    count = 0
    @structure.each_char do |chr|
      break if chr == "V"
      count += 1
    end
    count
  end

  def calculate_coda_count
    count = 0
    @structure.reverse.each_char do |chr|
      break if chr == "V"
      count += 1
    end
    count
  end

  def calculate_nucleus_count
    @structure.count("V")
  end
end
