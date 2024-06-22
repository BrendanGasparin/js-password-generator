function generatePassword(event) {
    // Stop default submit button behaviour
    event.preventDefault();

    const textArea = document.querySelector('textarea');
    const inputField = document.querySelector('input');
    const numChars = inputField.value;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', generatePassword);
});