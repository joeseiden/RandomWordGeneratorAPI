export const fetchVowel = id => (
  $.ajax({
    url: `/vowels/${id}`
  })
);

export const fetchVowelInventory = inventory => (
  $.ajax({
    url: `/vowels`,
    inventory
  })
);

export const fetchAllVowels = () => (
  $.ajax({
    url: `/vowels`
  })
);

export const fetchChartableVowels = () => (
  $.ajax({
    url: `/vowels?chartable=${true}`
  })
);
