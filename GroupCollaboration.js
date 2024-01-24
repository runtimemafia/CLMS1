// GroupCollaboration.js
document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const questionInput = document.getElementById('question');
    const postQuestionButton = document.getElementById('postQuestion');
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

    // Event listener for the "Post Question" button
    postQuestionButton.addEventListener('click', function () {
        const newName = nameInput.value.trim();
        const newQuestion = questionInput.value.trim();

        if (newName && newQuestion) {
            // Get the current time
            const currentTime = new Date().toLocaleTimeString();

            // Display the new question on the page with name and time
            displayQuestion(newQuestion, newName, currentTime);

            // Save the new question to LocalStorage with name and time
            saveQuestion(newQuestion, newName, currentTime);

            // Clear the input fields after posting
            nameInput.value = '';
            questionInput.value = '';
        } else {
            alert('Please enter your name and a question.');
        }
    });

    // Function to save a question to LocalStorage
    function saveQuestion(question, name, time) {
        const storedQuestions = JSON.parse(localStorage.getItem('groupCollaborationQuestions')) || [];
        storedQuestions.push({ question, name, time });
        localStorage.setItem('groupCollaborationQuestions', JSON.stringify(storedQuestions));
    }
});
