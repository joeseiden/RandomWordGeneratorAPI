export const fetchConsonant = id => (
  $.ajax({
    url: `/consonants/${id}`
  })
);

export const fetchConsonantInventory = inventory => (
  $.ajax({
    url: `/consonants`,
    inventory
  })
);

export const fetchAllConsonants = () => (
  $.ajax({
    url:'/consonants'
  })
);

export const fetchChartableConsonants = () => (
  $.ajax({
    url: `/consonants?chartable=${true}`
  })
);
