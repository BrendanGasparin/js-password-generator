function generatePassword(event) {
    // Stop default submit button behaviour
    event.preventDefault();
        
    const textArea = document.querySelector('textarea');
    const inputField = document.querySelector('input');
    const numChars = inputField.value;

    let password = new Array(numChars);
    let passwordValid = false;

    // Generate passwords until a strong one is generated
    while (passwordValid == false) {
    
        for (let i = 0; i < numChars; i++) {
            const random = Math.floor(Math.random() * 4);

            // Generate uppercase letter
            if (random == 0) {
                password[i] = getUppercaseChar();
            }
            // Generate lowercase letter
            else if (random == 1) {
                password[i] = getLowercaseChar();
            }
            // Generate digit
            else if (random == 2) {
                password[i] = getDigit();
            }
            // Generate special character
            else {
                password[i] = getSpecialChar();
            }
        }

        let passwordString = password.join('');

        // If password is strong, stop generating passwords and output the current one
        // to the textarea
        if (isStrongPassword(passwordString))
            passwordValid = true;
        textArea.value = passwordString;
    }
}

function copyToClipboard(event) {
    // Stop default submit button behaviour
    event.preventDefault();

    const password = document.querySelector('textarea').value;

    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Copied to clipboard.');
        })
        .catch(err => {
            alert('Failed to copy to clipboard. ' + err);
        });
}

// Return a string that is a random digit
function getDigit() {
    const zero = 48;
    const numDigits = 10;
    return String.fromCharCode((Math.floor(Math.random() * numDigits)) + zero);
}

// Return a string that is a random lowercase character
function getLowercaseChar() {
    const lowercaseA = 97;
    const alphabetLength = 26;
    return String.fromCharCode((Math.floor(Math.random() * alphabetLength)) + lowercaseA);
}

// Return a string that is a random uppercase character
function getUppercaseChar() {
    const uppercaseA = 65;
    const alphabetLength = 26;
    return String.fromCharCode((Math.floor(Math.random() * alphabetLength)) + uppercaseA);
}

// Return a string that is a random special character
function getSpecialChar() {
    const specialChars = "!\"#%'()*+,-./:;<=>?@[\\]^_`{|}~";
    return specialChars[Math.floor(Math.random() * specialChars.length)];
}

// Return true if the password is strong
function isStrongPassword(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    
    // Return true if the password has at least one of each:
    // uppercase character, lowercase character, digit, special character
    return hasUpper && hasLower && hasDigit && hasSpecialChar;
}

// Add event listeners when the page has loaded
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit').addEventListener('click', generatePassword);
    document.querySelector('.clipboard').addEventListener('click', copyToClipboard);
});