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
    for (var i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            result += ' ';
            continue;
        } else {
            var char = '';
            for (var a = i; a < i + 10; a+=2 ) {
                if (expr[a] == 1) {
                    char += expr[a + 1] == 0 ? '.' : '-';
                }
            }
            console.log(char);
            result += MORSE_TABLE[char];
        }
    }
    return result;
}

module.exports = {
    decode
}