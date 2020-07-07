let date = new Date();

let day = date.getDate();
let week = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let time = date.getHours();
let minutes = date.getMinutes();

let weeks = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
let months = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function time2(t, d, m) {
	if (d == 'Monday' || d == 'Tuesday' || (d == 'Sunday' && t >= 13) || (d == 'Wednesday' && t <= 20 && m <= 30)) {
		document.getElementById('time2').innerHTML = `Next Meeting: Prayer Meeting`;
	}
}

time2(time, weeks[week], minutes);

document.getElementById('time').innerHTML = `Current Date: ${weeks[week]}, ${months[month]} ${day}, ${year}`;
