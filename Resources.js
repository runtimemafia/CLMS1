// Resources.js
class Resources {
    constructor() {
        this.yearSelector = document.getElementById('yearSelector');
        this.joinTelegramButton = document.getElementById('joinTelegram');
        this.timerElement = document.getElementById('timer');
        this.telegramLinkInput = document.getElementById('telegramLink');
        this.postLinkButton = document.getElementById('postLink');

        this.joinTelegramButton.addEventListener('click', () => {
            this.joinTelegram();
        });

        this.postLinkButton.addEventListener('click', () => {
            this.postTelegramLink();
        });

        // Initialize timer (replace with your timer logic)
        this.timerElement.textContent = '00:00:00';
    }

    joinTelegram() {
        const selectedYear = this.yearSelector.value;

        // Replace 'YOUR_TELEGRAM_LINK_HERE' with the actual link
        const telegramLink = 'https://t.me/Feresource';

        // Open the link in a new tab
        window.open(telegramLink, '_blank');

        // Alternatively, if you want to redirect the current page to the link
        // window.location.href = telegramLink;
    }

    postTelegramLink() {
        const telegramLink = this.telegramLinkInput.value.trim();

        if (telegramLink) {
            // You can store the link or take further actions as needed
            alert(`Link Posted: ${telegramLink}`);
        } else {
            alert('Please enter a valid link.');
        }
    }
}
