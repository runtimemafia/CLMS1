class Forums {
    constructor() {
        this.emailInput = document.getElementById('email');
        this.usernameInput = document.getElementById('username');
        this.postForumButton = document.getElementById('postForum');

        this.postForumButton.addEventListener('click', () => {
            this.postForum();
        });

        // Initialize forum posts display (replace with your logic)
        // Example: this.displayForumPosts();
    }

    postForum() {
        const email = this.emailInput.value.trim();
        const username = this.usernameInput.value.trim();

        if (email && username) {
            alert(`Forum Posted - Email: ${email}, Username: ${username}`);
        } else {
            alert('Please enter both email and username.');
        }
    }

    // Add method to display forum posts
    // displayForumPosts() {
    //     // Implementation to display forum posts
    // }
}
