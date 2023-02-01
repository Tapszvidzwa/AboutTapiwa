const Meta = (props) => html`
	<section className="meta">
		<ul className="meta-sections">
			<li className="meta-section jobs">
				<div className="meta-header">Work</div>
				<ul className="meta-list">
					<li className="meta-item text ellipsis">${props.company}</li>
				</ul>
			</li>
			<li className="meta-section schools">
				<div className="meta-header">Education</div>
				<ul className="meta-list">
					<li className="meta-item text ellipsis">${props.education}</li>
				</ul>
			</li>
		</ul>
	</section>
`;
export default Meta;
