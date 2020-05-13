var regex = /hai/;
console.log(regex.test("hai Javascript"));

var regexGlobal = /hai/gim;
console.log(
  "regex Global matches:------ " + "hai again hai Hai".match(regexGlobal).length
);

var wildCardRegex = /h*i/gim;
console.log(
  "wild card Regex matches:------ " + "hoi hmi".match(wildCardRegex).length
);
/// * ---> wild card character   new line will not match regex, tab character will match regex

var controlChracterSpace = /h\si/g;
console.log(
  "Control Character Space:----- " +
    "h i h i".match(controlChracterSpace).length
);
/// Character set Regex for

var wordregex = /[a-z][A-X][1-3]/g;
console.log("character set Regex result:----" + "sdA22f".match(wordregex));

var excludeRegex = /[^a-z][^0-9]/;
console.log(
  "exclude character regex result: ----" + "23sdfsdf".match(excludeRegex)
);

var includecapChara = /[\^a-z][^0-9]/; //     /[a-z^][^0-9]/
console.log(
  "exclude character regex result: ----" + "23^sdfsdf".match(includecapChara)
);

var shorthandCharsetWord = /\w/; // will match /[a-zA-Z0-9_]/
var shorthandCharsetDigits = /\d/; // will match /[0-9]/   --- /\D/ - /[^0-9]/

//// ? -- zero or one characters
//// + -- one or more characters
///  * -- zero or more characters
