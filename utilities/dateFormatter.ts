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
const dateFormatter = (date: string): string => {
	const dateObj = new Date(date);
	const day = dateObj.getDate();
	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();
	return `${day} ${months[month]} ${year}`;
};

export default dateFormatter;
