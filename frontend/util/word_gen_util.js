export const generateWords = (consonants, vowels, syllable_structure, length, count) => (
  $.ajax({
    url: `words`,
    word_gen: {
      consonants,
      vowels,
      syllable_structure,
      length
    },
    count
  })
);
