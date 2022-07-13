const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let decodeExpr = "";
  for (let i = 0; i < expr.length; i += 10) {
    let sign = expr.substr(i, 10);
    decodeExpr += decodeSign(sign);
  }

  function decodeSign(sign) {
    if (sign === "**********") return " ";
    let morse = "";

    for (let i = 0; i < sign.length; i += 2) {
      let morseChar = sign.substr(i, 2);
      switch (morseChar) {
        case "10":
          morse += ".";
          break;
        case "11":
          morse += "-";
          break;
      }
    }
    return MORSE_TABLE[morse];
  }
  return decodeExpr;
}

module.exports = {
  decode,
};
