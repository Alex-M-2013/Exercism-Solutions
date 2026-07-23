const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const isPangram = (sentence) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (!(sentence.toUpperCase()).includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
