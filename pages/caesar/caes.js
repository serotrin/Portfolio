let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function encrypt(key, val) {
  let result = [];

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) + key) % 26; // Ensure the index wraps around
      result.push(alpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }

  return (result.join('')); // Print the encrypted result
}

function decrypt(key, val) {
  let result = [];

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) - key + 26) % 26; // Ensure the index wraps around correctly
      result.push(alpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }

  return (result.join('')); // Print the decrypted result
}

function matchAlpha(letter1) {
  for (let j = 0; j < alpha.length; j++) {


    if (letter1 === alpha[j]) {
      return j;
    }
  }
  return -1; // Return -1 if the letter is not found in the alphabet
}

function processPhrase() {
  let inputPhrase = document.getElementById('inputPhrase').value; //make new variable to use

  let encryptedPhrase = encrypt(inputPhrase);
  document.getElementById('encrypted').textContent = encryptedPhrase //encrypts phrase

  let decryptedPhrase = decrypt(encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase //decrypts phrase
}