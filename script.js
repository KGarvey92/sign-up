const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
password.addEventListener('keydown', () => {
    confirmPassword.removeAttribute("disabled");
});

confirmPassword.addEventListener('focus', () => {
    let userPass = password.value;
    confirmPassword.setAttribute('pattern', `${userPass}`);
})