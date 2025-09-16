/*
Problem: Caesar Cipher (Shift by 2)

Description:
You are given a cipher text where each alphabetical character 
has been encrypted using a Caesar Cipher with a fixed shift 
of 2 letters forward in the alphabet.

- To decipher the text, shift each alphabetical character 
  backward by 2 positions.
- Wrapping should occur:
    'a' -> 'y'
    'b' -> 'z'
- Case sensitivity must be preserved:
    'A' stays uppercase, 'a' stays lowercase.
- Non-alphabetic characters (digits, spaces, punctuation, !, @, #, etc.) 
  remain unchanged.

Your task is to convert the cipher text into plain text.

-----------------------------------------------------------
Input:
A string S (1 ≤ length of S ≤ 10^5) representing the cipher text.
The string may contain lowercase letters, uppercase letters, 
spaces, digits, or special symbols.

Output:
A string representing the deciphered plain text.

-----------------------------------------------------------
Sample Input 1:
Jgnnq Yqtnf!

Sample Output 1:
Hello World!

-----------------------------------------------------------
Sample Input 2:
Crrngu! Vjku ku c ugetgv.

Sample Output 2:
Apple! This is a secret.

-----------------------------------------------------------
Sample Input 3:
Zab! 123 @#$.

Sample Output 3:
Xyz! 123 @#$.
*/

function caesarDecipher(text, shift = 2) {
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index !== -1) {
      const newIndex = (index - shift + 26) % 26;
      let newChar = alphabet[newIndex];
      result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      result += char;
    }
  }
  return result;
}

let cipherText = "Jgnnq Yqtnf!";
let plainText = caesarDecipher(cipherText, 2);
console.log("Decipher:", plainText);