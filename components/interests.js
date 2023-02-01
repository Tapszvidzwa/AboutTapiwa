const Interests = (props) => html`
	<section className="interests">
		<ul className="inline">
			${props.interests.map(
				(interest, index) =>
					html`<li key="interest-${index}" className="interest">#${interest}</li>`)}
		</ul>
	</section>
`;
export default Interests;
