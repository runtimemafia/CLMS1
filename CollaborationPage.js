// CollaborationPage.js
document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('postsContainer');

    // Load stored questions from LocalStorage on page load
    loadStoredQuestions();

    // Function to load stored questions from LocalStorage
    function loadStoredQuestions() {
        const storedQuestions = JSON.parse(localStorage.getItem('groupCollaborationQuestions')) || [];
        storedQuestions.forEach(questionData => {
            displayQuestion(questionData.question, questionData.name, questionData.time);
        });
    }

    // Function to display a question in the postsContainer
    function displayQuestion(question, name, time) {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const header = document.createElement('div');
        header.classList.add('question-header');
        header.innerHTML = `<strong>${name}</strong> - ${time}`;
        questionElement.appendChild(header);

        const content = document.createElement('div');
        content.textContent = question;
        questionElement.appendChild(content);

        postsContainer.appendChild(questionElement);
    }
});
