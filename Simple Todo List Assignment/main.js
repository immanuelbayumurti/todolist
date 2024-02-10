// Mood-Box

const changeBlue = document.getElementById("blue");
changeBlue.onclick = function () {
  document.body.style.color = " rgb(52, 132, 207)";
};
const changeYellow = document.getElementById("yellow");
changeYellow.onclick = function () {
  document.body.style.color = " rgb(231, 159, 87)";
};
const changeRed = document.getElementById("red");
changeRed.onclick = function () {
  document.body.style.color = " rgb(212, 58, 130)";
};
const changeGreen = document.getElementById("green");
changeGreen.onclick = function () {
  document.body.style.color = " rgb(42, 189, 62)";
};

// Weather-Box
const apiKey = "ed934d1fce4354a59aa3fb37f0a2a11b";
const apiUrl =
  " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function weather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(weather);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%" + "humidity";
}

searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
  searchBox.value = "";
});

// task list

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
