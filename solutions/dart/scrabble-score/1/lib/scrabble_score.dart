// Put your code here


int score(word) {
  List one_point = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  List two_points = ["D", "G"];
  List three_points = ["B", "C", "M", "P"];
  List four_points = ["F", "H", "V", "W", "Y"];
  List five_points = ["K"];
  List eight_points = ["J", "X"];
  List ten_points = ["Q", "Z"];

  int score = 0;
  
  for (int i = 0; i < (word.split('')).length; i++) {
    if (one_point.contains(word[i].toUpperCase())) {
      score++;
    }
    else if (two_points.contains(word[i].toUpperCase())) {
      score += 2;
    }
    else if (three_points.contains(word[i].toUpperCase())) {
      score += 3;
    }
    else if (four_points.contains(word[i].toUpperCase())) {
      score += 4;
    }
    else if (five_points.contains(word[i].toUpperCase())) {
      score += 5;
    }
    else if (eight_points.contains(word[i].toUpperCase())) {
      score += 8;
    }
    else if (ten_points.contains(word[i].toUpperCase())) {
      score += 10;
    }
  }

  return score;
}