function capitalizeFirstLetter(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  word = firstLetterCap + remainingLetters;
  return word;
}

export default capitalizeFirstLetter;
