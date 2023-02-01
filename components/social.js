const Social = (props) => html`
	<section className="social">
		<ul>
			${props.data.map(
				(social, index) => 
					html`
					<li key="social-${index}">
						<a title="Visit me on ${social.name}" href="${social.link}" target="_blank">
							<span className="SVGInline">
								<${React.Suspense} fallback=${html`<div></div>`}>
									<${props.logos[social.name.toLowerCase()]} />
								<//>
							</span>
						</a>
					</li>
					`)}
		</ul>
	</section>
`;
export default Social;
