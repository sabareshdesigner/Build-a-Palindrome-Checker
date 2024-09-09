const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkPalindrome = (input) => {
  const ordinalInput = input;

  if (input === "") {
    alert("Please input a value");
    result;
  }

  // result was empty
  result.replaceChildren();

  // The input value is covert lowerCase and replace
  let filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");

  // spreed array of reverse and joint the space
  let reverseInput = [...filterInput].reverse().join("");

  let resultMsg = `<strong>${ordinalInput}</strong> ${
    filterInput === reverseInput ? "is" : "is not"
  } a palindrome`;

  const tagP = document.createElement("p");
  tagP.classList = "result-input";
  tagP.innerHTML = resultMsg;
  result.appendChild(tagP);

  result.classList.remove("hidden");
};

// To click the check btn import to p tag
checkBtn.addEventListener("click", () => {
  checkPalindrome(textInput.value);
  textInput.value = "";
});

// To entry the input import to p tag
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(textInput.value);
    textInput.value = "";
  }
});
