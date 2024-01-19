const questionSelector = document.getElementById("questions");
const subjectSelector = document.getElementById("subject");
const levelSelector = document.getElementById("level");
const timeSelector = document.getElementById("time");

const button = document.querySelector("a.button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button is clicked");

  // save the selections in the local storage
  console.log(
    questionSelector.value,
    subjectSelector.value,
    levelSelector.value,
    timeSelector.value
  );

  localStorage.setItem(
    "data",
    JSON.stringify({
      noOfQuestions: Number(questionSelector.value),
      subject: subjectSelector.value,
      level: levelSelector.value,
      time: Number(timeSelector.value),
    })
  );

  window.location.pathname = "/page1.html";
});
