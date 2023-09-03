// Fungsi untuk membalikkan string dengan tanpa membalikan agnka
function reverseAlphabet(input) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var alphabetChars = [];
    var nonAlphabetChars = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (alphabet.indexOf(char) !== -1) {
            alphabetChars.push(char);
        }
        else {
            nonAlphabetChars.push(char);
        }
    }
    if (alphabetChars.length === 0)
        return input;
    var reversedAlphabet = alphabetChars.reverse().join('');
    var result = reversedAlphabet + nonAlphabetChars.join('');
    return result;
}
// Fungsi untuk mencari kata terpanjang dalam sebuah kalimat
function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var longestWord = '';
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
// Fungsi untuk menghitung kemunculan kata dalam array INPUT berdasarkan QUERY
function countWordOccurrences(INPUT, QUERY) {
    var wordCount = {};
    for (var _i = 0, INPUT_1 = INPUT; _i < INPUT_1.length; _i++) {
        var word = INPUT_1[_i];
        if (wordCount[word]) {
            wordCount[word]++;
        }
        else {
            wordCount[word] = 1;
        }
    }
    var result = [];
    for (var _a = 0, QUERY_1 = QUERY; _a < QUERY_1.length; _a++) {
        var query = QUERY_1[_a];
        result.push(wordCount[query] || 0);
    }
    return result;
}
// Fungsi untuk menghitung selisih antara jumlah diagonal matriks NxN
function diagonalDifference(matrix) {
    var diagonal1 = 0;
    var diagonal2 = 0;
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][n - i - 1];
    }
    return Math.abs(diagonal1 - diagonal2);
}
var reversedString = reverseAlphabet('NEGIE1');
console.log(reversedString);
var sentence = "Saya sangat senang mengerjakan soal algoritma";
var longestWord = findLongestWord(sentence);
console.log(longestWord);
var INPUT = ['xc', 'dz', 'bbb', 'dz'];
var QUERY = ['bbb', 'ac', 'dz'];
var wordOccurrences = countWordOccurrences(INPUT, QUERY);
console.log(wordOccurrences);
var matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
var difference = diagonalDifference(matrix);
console.log(difference);
