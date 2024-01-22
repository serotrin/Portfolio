//the key is randomly generated, so it's never the same if you run it more than once. the key is used similarily to how it was in the other ciphers, just to shift the binary so the ciphertext comes out differently.

function generate_key(plaintext_length) {
  var key = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < plaintext_length; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
}

//the encrypt function does exactly what it sounds like.
function encrypt(plaintext, key) {
  var ciphertext = '';
  for (var i = 0; i < plaintext.length; i++) {
    ciphertext += String.fromCharCode(plaintext.charCodeAt(i) ^ key.charCodeAt(i));
  }
   //it converts both the plaintext and key into its binary equivalent and adds the binary together to get a new number. uses something called bitwise XOR which is just used to add the binary together.
    //once it's added together, that is the ciphertext
  return btoa(ciphertext); //encode the ciphertext using base64

    //the reason i needed to encode it using base 64 is so that the console can print a visual representation of what the ciphertext would look like
}

//the encrypt and decrypt do essentially the same thing, just with the ciphertext instead of plaintext
function decrypt(ciphertext, key) {
  var decrypted_text = '';
  ciphertext = atob(ciphertext);
  for (var i = 0; i < ciphertext.length; i++) {
    decrypted_text += String.fromCharCode(ciphertext.charCodeAt(i) ^ key.charCodeAt(i));
  }
  return decrypted_text;
}

var plaintext = "HELLO";
var key = generate_key(plaintext.length);
console.log("Plaintext:", plaintext);
console.log("Key:", key);
var ciphertext = encrypt(plaintext, key);
console.log("Ciphertext:", ciphertext);
var decrypted_text = decrypt(ciphertext, key);
console.log("Decrypted Text:", decrypted_text);