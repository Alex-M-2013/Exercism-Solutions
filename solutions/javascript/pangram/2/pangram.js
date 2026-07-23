const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const isPangram = (sentence) => {
  sentence = sentence.toUpperCase().trim();
  
  for (let i = 0; i < alphabet.length; i++) {
    if (!(sentence.includes(alphabet[i]))) {
      return false;
    }
  }
  return true;
}
