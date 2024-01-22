let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let reverseAlpha = alpha.slice().reverse(); //slice makes it so the original array is not modified when reversing the array

// Function to encrypt a message using the Atbash cipher
function encrypt(val) {
  let result = [];
  let capVal = val.toUpperCase(); //making sure it can take both lowercase and capitalized letters

  for (let i = 0; i < capVal.length; i++) {
    let currentLetter = capVal[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter)) % 26; // Ensure the index wraps around
      result.push(reverseAlpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }
  return result.join(''); // Print the encrypted result
}


function matchAlpha(letter1) {
  for (let j = 0; j < alpha.length; j++) {
    if (letter1 === alpha[j]) {
      return j;
    }
  }
  return -1; // Return -1 if the letter is not found in the alphabet
}


// Function to decrypt a message using the Atbash cipher
function decrypt(val) {
  let capVal = val.toUpperCase();
  let result = [];

  for (let i = 0; i < capVal.length; i++) {
    let currentLetter = capVal[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) + 26) % 26; // Ensure the index wraps around correctly
      result.push(reverseAlpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }

return (result.join('')); // Print the decrypted result
}

function processPhrase() {
  let inputPhrase = document.getElementById('inputPhrase').value; //make new variable to use

  let encryptedPhrase = encrypt(inputPhrase);
  document.getElementById('encrypted').textContent = encryptedPhrase //encrypts phrase

  let decryptedPhrase = decrypt(encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase //decrypts phrase
}