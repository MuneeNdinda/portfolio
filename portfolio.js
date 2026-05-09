console.log("Portfolio page loaded! 🌸");

function showMessage() {
  console.log("showMessage function was called");
  
  document.getElementById("heroMessage").innerHTML = 
    "Thanks for visiting! I'm glad you're here 🌸";
  
  console.log("Hero message has been displayed on the page");
}

function sendMessage() {
  let name = document.getElementById("visitorName").value;
  console.log("sendMessage called. Name entered: " + name);

  if (name === "") {
    document.getElementById("contactReply").innerHTML = 
      "Please enter your name first! 😊";
    console.log("No name was entered — showing error message");
  } else {
    document.getElementById("contactReply").innerHTML = 
      "Thank you, " + name + "! I'll be in touch soon 💌";
    console.log("Message sent successfully to: " + name);
  }
}