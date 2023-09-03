// Fungsi untuk membalikkan string dengan tanpa membalikan agnka
function reverseAlphabet(input: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const alphabetChars: string[] = [];
    const nonAlphabetChars: string[] = [];
    
    for (const char of input) {
        if (alphabet.indexOf(char) !== -1) {
            alphabetChars.push(char);
        } else {
            nonAlphabetChars.push(char);
        }
    }

    if (alphabetChars.length === 0) return input

    const reversedAlphabet = alphabetChars.reverse().join('');
    const result = reversedAlphabet + nonAlphabetChars.join('');

    return result;
}

// Fungsi untuk mencari kata terpanjang dalam sebuah kalimat
function findLongestWord(sentence: string): string {
  const words = sentence.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Fungsi untuk menghitung kemunculan kata dalam array INPUT berdasarkan QUERY
function countWordOccurrences(INPUT: string[], QUERY: string[]): number[] {
  const wordCount: { [key: string]: number } = {};
  for (const word of INPUT) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  const result: number[] = [];
  for (const query of QUERY) {
    result.push(wordCount[query] || 0);
  }
  return result;
}

// Fungsi untuk menghitung selisih antara jumlah diagonal matriks NxN
function diagonalDifference(matrix: number[][]): number {
  let diagonal1 = 0;
  let diagonal2 = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][n - i - 1];
  }

  return Math.abs(diagonal1 - diagonal2);
}

const reversedString = reverseAlphabet('NEGIE1');
console.log(reversedString)

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = findLongestWord(sentence);
console.log(longestWord);

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const wordOccurrences = countWordOccurrences(INPUT, QUERY);
console.log(wordOccurrences);

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const difference = diagonalDifference(matrix);
console.log(difference);
