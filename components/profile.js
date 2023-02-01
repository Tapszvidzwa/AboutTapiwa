const Profile = (props) => html`
	<section className="profile">
		<div className="imageContainer"><img src="${props.image}"/></div>
		<h1 className="name">${props.name}</h1>
		<h2 className="headline">
			<span>${props.title} - ${props.job}</span>
		</h2>
	</section>
`;
export default Profile;
