function clickButton() {
  console.log("hi");
  let button = document.getElementsByTagName("button")[0];
  button.textContent =
    "Clicks: " + (parseInt(button.textContent.split(" ")[1]) + 1);
}
