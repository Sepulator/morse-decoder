const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let result = '';
	for (let i = 0; i < (expr.length / 10); i++) {
		let str = expr.slice (i*10, i*10 + 10);
		if (str === '**********') { result += ' '} else {
      let letter = '';
			for (let j = 0; j < str.length; j += 2) {
				if ((str[j] + str[j+1]) === '11') {letter +='-'}
				if ((str[j] + str[j+1]) === '10') {letter +='.'}
			}
      result += MORSE_TABLE[letter];
		}
	}
	return result;
}

module.exports = {
    decode
}