(() => {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	function setTimeToHtmlElement(idName, text) {
		const element = document.getElementById(idName);
		element.innerText = text;
	}

	function countDown() {
		const now = new Date().getTime();
		const christmas = new Date("December 25, 2021 23:59:59").getTime();
		const timeLeft = christmas - now;

		setTimeToHtmlElement("days", Math.floor(timeLeft / day));
		setTimeToHtmlElement("hours", Math.floor((timeLeft % day) / hour));
		setTimeToHtmlElement("minutes", Math.floor((timeLeft % hour) / minute));
		setTimeToHtmlElement("seconds", Math.floor((timeLeft % minute) / second));
	}
	function run() {
		countDown();
		setInterval(countDown, second);
	}
	run();
})();
