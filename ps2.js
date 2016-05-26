//1. firstReverse


function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}


//test log 1
console.log(reverse('animals'));


//2.swapCase

function swapCase(letters) {
  var newLetters = "";
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      newLetters += letters[i].toUpperCase();
    }else {
      newLetters += letters[i].toLowerCase();
    }
  }
  console.log(newLetters);
  return newLetters;
}
var text = 'Have a GREAT day!';

//test log 2
console.log(swapCase(text));


//3. BONUS//letterCount

function letterCount(str){
  str = str.toLowerCase();
  var wordArray = str.split(" ");

  var results = [];
  var count = 0;
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var bestLetter = 0;
    for (var j = 0; j < word.length; j++) {
      var countLetter = 0;
      var letter = word[j];
      for (var k = j + 1; k < word.length; k++) {
        var nextLetter = word[k];
        if (letter === nextLetter) {
          countLetter += 1;
        }
      }
      if (countLetter > bestLetter) {
          bestLetter = countLetter;
      }
      if (bestLetter > count) {
        results = []
      }
      if (bestLetter >= count) {
        count = bestLetter;
        results.push(wordArray[i]);
      }
    }
    return results;
  }
}


//test log 3 BONUS

console.log(letterCount("Weeeeeeeeeeeeeeeeeeeeee"));