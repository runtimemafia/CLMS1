const postQuestionButton = document.getElementById("postQuestion");

postQuestionButton.addEventListener("click", () => {
  const questionInput = document.getElementById("question");

  $.ajax({
    type: "post",
    url: "https:clms.yash.lol",
    data: {
      new_question: true,
      question: questionInput.value,
    },
    success: function (response) {
      if ((response = "newqmade")) {
        alert("Success");
        location.reload();
      } else {
        alert("Error");
      }
    },
    error: function () {
      alert("Error !!");
    },
  });
});

async function fetchStrings() {
  try {
    const response = await fetch("https://clms.yash.lol/?questions=1");
    const data = await response.json(); // Assuming the response is in JSON format

    // Check if data is an array
    if (Array.isArray(data)) {
      displayStrings(data);
    } else {
      console.error("Invalid data format");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display strings in an unordered list
function displayStrings(strings) {
  const stringList = document.getElementById("questionsList");

  strings.forEach((str) => {
    const listItem = document.createElement("li");
    listItem.textContent = str;
    stringList.appendChild(listItem);
  });
}

// Start fetching and displaying strings when the page loads
window.onload = function () {
  fetchStrings();
};
