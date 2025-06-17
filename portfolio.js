// password generator

const alphabet = `abcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;

const passcode1 = (codeLength = 10) => {
    let phrase1 = '';
    for (let i = 0; i < codeLength; i++) {
        let char = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (alphabet.slice(0,26).includes(char)){
            let num = Math.ceil(Math.random() * 2);
            // console.log(num);
            if (num % 2 === 0){
                char = char.toUpperCase();
            }
        }
        phrase1 += char;
    }
    return phrase1;
}



function generatePasscode() {
    let lengthCode = parseFloat(document.getElementById('passwordLength').value);
    let newCode = passcode1(lengthCode);
    document.getElementById('output').innerHTML = newCode;
    event.preventDefault();

}
let submitLength = document.getElementById('submitLength');
submitLength.addEventListener('click', generatePasscode);







// testPhrase = passcode1(10);
// console.log(testPhrase);
// phrase20 = passcode1(20);
// console.log(phrase20);