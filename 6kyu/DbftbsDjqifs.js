/*
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.
Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher
Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.
Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.
Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.
A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor (key, message) {
	let res = '',
      alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      idx = 0;
  for (let char of message) {
    idx = char.toLowerCase().charCodeAt() - 97 + (key % 26);
    idx = idx < 0 ? 26 + idx : idx % 26
    if (/[a-z]/.test(char)) {
      res += alpha[idx]
    } else if (/[A-Z]/.test(char)) {
      res += alpha[idx].toUpperCase()
    } else res += char
  }
  return res