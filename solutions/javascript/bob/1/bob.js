export const hey = (message) => {
  message = message.trim();

  const containsLetters = message.toLowerCase() !== message.toUpperCase();
  const isQuestion = message.endsWith("?");
  const isYell = containsLetters && message.toUpperCase() === message;
  
  if (message === "") {
    return "Fine. Be that way!";
  }

  if (isQuestion && isYell) {
    return "Calm down, I know what I'm doing!";
  }
  else if (isQuestion) {
    return "Sure.";
  }  
  else if (isYell) {
    return "Whoa, chill out!";
  }
  else {
    return "Whatever.";
  }
}
