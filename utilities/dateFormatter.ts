const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const dateFormatter = (date: Date): string => {
	const day = date.getDate();
	const month = date.getMonth();
	console.log(month);
	const year = date.getFullYear();
	return `${day} ${months[month]} ${year}`;
};

export default dateFormatter;
