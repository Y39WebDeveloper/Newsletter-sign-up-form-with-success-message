const sendBtn = document.getElementById("sendBtn");
const dismissBtn = document.getElementById("dismissBtn");
const msgBox = document.getElementById("msgBox");
const form = document.getElementById("form");

function handleSubmit(e) {
    e.preventDefault()
    form.classList.remove("active");
    msgBox.classList.add("active");
}
function handleDismiss(){
    msgBox.classList.remove("active");
    form.classList.add("active");
}
form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', handleDismiss);
