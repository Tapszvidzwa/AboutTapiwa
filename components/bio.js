const Bio = (props) => html`
	<section className="bio">
		${props.bioDetails.map(
			(detail, index) =>
				detail.link ?
					html`<p key="bio-${index}">${detail.title} at <a href="${detail.link}" target="_blank" rel="noopener noreferrer">${detail.company}</a></p>`
					: html`<p key="bio-${index}">${detail.content}</p>`)}
	</section>
`;
export default Bio;
