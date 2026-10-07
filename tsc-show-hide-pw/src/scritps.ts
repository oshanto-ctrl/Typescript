/* Show/Hide Password Toggle Visibility */

const passwordInput = document.getElementById('password') as HTMLInputElement | null;
const toggleButton = document.getElementById('togglePasswordVisibility') as HTMLButtonElement | null;

if (passwordInput && toggleButton) {
    const updatePasswordVisibility = (isVisible: boolean) => {
        passwordInput.type = isVisible ? 'text' : 'password';
        toggleButton.textContent = isVisible ? '🙄' : '👀';
        toggleButton.setAttribute('aria-label', isVisible ? 'Hide password' : 'Show password');
    };

    toggleButton.addEventListener('click', () => {
        // If the password is currently hidden, show it and switch to the
        // "look away" emoji to indicate the password is visible.
        if (passwordInput.type === 'password') {
            updatePasswordVisibility(true);
        } else {
            // If the password is currently visible, hide it again and switch
            // back to the "look at password" emoji.
            updatePasswordVisibility(false);
        }
    });
}

