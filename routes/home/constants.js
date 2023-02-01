/* (TODO) Update details. */
//Profile details
const PROFILE = {
	name: 'Your Name',
	image: './img/profile.jpg'
};

// Professional details
const CURRENT_JOB = {
	title: 'Job title',
	location: 'Current, Location',
	company: 'Current Company',
	education: 'Academic Degree'
};

// Link for the hire me button
const HIRE_LINK = 'https://www.yourHireMe.com/link';

// List of biographical details (Job type & Static Content type)
const BIO_DETAILS = [
	// Job type
	{
		title: 'Job title',
		company: 'Current Company',
		link: 'https://www.currentcompany.com/' 
	},
	{
		title: 'Previous job title',
		company: 'Previous Company',
		link: 'https://www.previouscompany.com/' 
	},
	{
		title: 'Previous job title',
		company: 'Previous Company',
		link: 'https://www.previouscompany.com/' 
	},
	// Static content type
	{
		content: 'Personal description.'
	},
	{
		content: 'About Me content.'
	},
];

// List of interests  (Rendered as #interest)
const INTERESTS = [
	'interest1', 'interest2', 'interest3', 'interest4', 'interest5', 'interest6', 'interest7', 'interest8'
];

// Social media links
const SOCIAL_MEDIA = [
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/',
	},
	{
		name: 'Github',
		link: 'https://github.com/',
	},
	{
		name: 'Twitter',
		link: 'https://www.twitter.com/',
	},
	{
		name: 'YouTube',
		link: 'https://www.youtube.com/',
	},
];

export {
	PROFILE,
	CURRENT_JOB,
	HIRE_LINK,
	BIO_DETAILS,
	INTERESTS,
	SOCIAL_MEDIA,
};
