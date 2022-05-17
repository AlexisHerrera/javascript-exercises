function reverse(s){
    return s.split("").reverse().join("");
}

function is_a_letter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function parse_phrase(phrase) {
    const array_of_chars = phrase.toLowerCase().split("");
    return array_of_chars.filter(char => is_a_letter(char)).join("");
}

const palindromes = function (phrase) {
    const phrase_to_be_reversed = parse_phrase(phrase);
    return parse_phrase(phrase) === reverse(phrase_to_be_reversed);
};

// Do not edit below this line
module.exports = palindromes;
