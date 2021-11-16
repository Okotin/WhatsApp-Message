window.onload = function() {
	phone.addEventListener("keydown", submitIfEnter);
}

function submitIfEnter(e) {
	const key = e.which || e.keyCode || 0;
	if (key == 13) {
		openChat();
	}
}

function openChat() {
	const num = document.getElementById("phone").value;
	if (num) {
		window.location = "https://api.whatsapp.com/send?phone=" + num;
	}
}