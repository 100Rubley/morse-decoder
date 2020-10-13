const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

  let exprArray = expr.split('')
  let answer = ''

  for (let i = 0; i < exprArray.length / 10; i++) {
    let exprArrayCut = exprArray.splice(0, 10)

    if (getMorzeCode(exprArrayCut) === ' ') {
      answer += ' '
    } else {
      answer += MORSE_TABLE[getMorzeCode(exprArray)]
    }
  }

  function getMorzeCode(str) { //this function translating a 10 length string into a dash-dot code
    let letterBinaryCode = str
    let result = ''

    for (let i = str.length - 1; i > 0; i -= 2) {
      if (letterBinaryCode === '**********') return ' '
      if (letterBinaryCode[i] === '0' && letterBinaryCode[i - 1] === '1') {
        result += '.'
        letterBinaryCode.pop()
        letterBinaryCode.pop()
      }
      if (letterBinaryCode[i] === '1' && letterBinaryCode[i - 1] === '1') {
        result += '-'
        letterBinaryCode.pop()
        letterBinaryCode.pop()
      }
    }
    return result
  }

  return answer
}

module.exports = {
  decode
}
