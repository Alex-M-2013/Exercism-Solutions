String twoFer([String? name]) {
  String dialogue = "";
  if (name == null) {
    dialogue = "One for you, one for me.";
  }
  else if (name != null) {
    dialogue = "One for $name, one for me.";
  }
  return dialogue;
}
