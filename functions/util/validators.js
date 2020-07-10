// validators.js

// various functions to validate API request data

// makes sure field is not empty
const isEmpty = (string) => {
	if (string.trim() === '') return true;
	else return false;
};

// makes sure both login fields are filled
exports.validateLoginData = (data) => {
	let errors = {};

	if (isEmpty(data.email)) errors.email = 'Must not be empty';
	if (isEmpty(data.password)) errors.password = 'Must not be empty';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	};
};

// makes sure email is correctly formatted
const isEmail = (email) => {
	const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email.match(emailRegEx)) return true;
	else return false;
};

// makes sure netid has three letters followed by six numbers
const isNetId = (netid) => {
	const netidRegEx = /^[a-zA-Z]{3}[0-9]{6}$/;
	if (netid.match(netidRegEx)) return true;
	else return false;
};

// makes sure phone number is a valid format
const isPhoneNumber = (phoneNumber) => {
	const phoneNumberRegEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
	if (phoneNumber.match(phoneNumberRegEx)) return true;
	else return false;
};

// makes sure every signup field is filled
exports.validateSignUpData = (data) => {
	let errors = {};

	if (isEmpty(data.email)) {
		errors.email = 'Must not be empty';
	} else if (!isEmail(data.email)) {
		errors.email = 'Must be valid email address';
	}

	if (isEmpty(data.netid)) {
		errors.netid = 'Must not be empty';
	} else if (!isNetId(data.netid)) {
		errors.netid = 'Must be valid NetID';
	}

	if (isEmpty(data.phoneNumber)) {
		errors.phoneNumber = 'Must not be empty';
	} else if (!isPhoneNumber(data.phoneNumber)) {
		errors.phoneNumber = 'Please enter a valid phone number';
	}

	if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty';
	if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty';
	if (isEmpty(data.classification)) errors.classification = 'Must not be empty';
	if (isEmpty(data.major)) errors.major = 'Must not be empty';

	if (isEmpty(data.password)) errors.password = 'Must not be empty';
	if (isEmpty(data.confirmPassword)) errors.confirmPassword = 'Must not be empty';
	if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must be the same';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	};
};

// makes sure every event field is filled
exports.validateAddEventData = (data) => {
	let errors = {};

	if (isEmpty(data.email)) {
		errors.email = 'Must not be empty';
	} else if (!isEmail(data.email)) {
		errors.email = 'Must be valid email address';
	}

	if (isEmpty(data.netid)) {
		errors.netid = 'Must not be empty';
	} else if (!isNetId(data.netid)) {
		errors.netid = 'Must be valid NetID';
	}

	if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty';
	if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty';
	if (isEmpty(data.phoneNumber)) errors.phoneNumber = 'Must not be empty';
	if (isEmpty(data.classification)) errors.classification = 'Must not be empty';
	if (isEmpty(data.major)) errors.major = 'Must not be empty';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	};
};