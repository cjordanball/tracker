const validator = (
	value: any,
	type: 'amount' | 'date' | 'description'
): boolean => {
	switch (type) {
		case 'amount':
			if (typeof value !== 'number') return false;
			if (Number(value) < 0) return false;
			return true;
		case 'date':
			if (typeof value !== 'string') return false;
			if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(value) === false) return false;
			const datePieces = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);
			if (
				parseInt(datePieces![1], 10) > 2100 ||
				parseInt(datePieces![1], 10) < 2000
			)
				return false;
			if (parseInt(datePieces![2], 10) > 12 || parseInt(datePieces![2], 10) < 1)
				return false;
			if (parseInt(datePieces![3], 10) > 31 || parseInt(datePieces![3], 10) < 1)
				return false;
			return true;
		case 'description':
			if (typeof value !== 'string') return false;
			if (value.length < 1) return false;
			return true;
	}
};

export default validator;
