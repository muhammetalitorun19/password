function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
}
