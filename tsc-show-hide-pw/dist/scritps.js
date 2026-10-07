/* Show/Hide Password Toggle Visibility */
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePasswordVisibility');
if (passwordInput && toggleButton) {
    const updatePasswordVisibility = (isVisible) => {
        passwordInput.type = isVisible ? 'text' : 'password';
        toggleButton.textContent = isVisible ? '🙄' : '👀';
        toggleButton.setAttribute('aria-label', isVisible ? 'Hide password' : 'Show password');
    };
    toggleButton.addEventListener('click', () => {
        // If the password is currently hidden, show it and switch to the
        // "look away" emoji to indicate the password is visible.
        if (passwordInput.type === 'password') {
            updatePasswordVisibility(true);
        }
        else {
            // If the password is currently visible, hide it again and switch
            // back to the "look at password" emoji.
            updatePasswordVisibility(false);
        }
    });
}
export {};
