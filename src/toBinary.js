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
  // write your solution here
  function getBinaryCode(symbol) {
    if (symbol === ' ') return '**********'
    let codeArray = new Array(10).fill('0')
    let reverseTable = Object.fromEntries(
      Object.entries(MORSE_TABLE).map(([key, value]) => [value, key])
    )
    let morseCode = reverseTable[symbol]
    for (let i = 0; i < morseCode.length; i++) {
      switch (true) {
        case (morseCode[i] === '-'):
          codeArray.shift()
          codeArray.push('1')
          codeArray.shift()
          codeArray.push('1')
          break
        case (morseCode[i] === '.'):
          codeArray.shift()
          codeArray.push('1')
          codeArray.shift()
          codeArray.push('0')
          break
      }
    }
  
    let codeString = codeArray.join('')
    return codeString
  }

  let result = ''
  for (let i = 0; i < expr.length; i++) {
    result += getBinaryCode(expr[i])
  }
  return result
}

