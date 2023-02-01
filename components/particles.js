import { React } from 'https://unpkg.com/es-react@16.8.30/index.js';
import defaultProps from '/components/particleProps.js';
import particlesJS from '/vendor/particles.min.js';

class Particles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      height: 0
    }
	}
	
	componentDidMount() {
		const height = this.container.clientHeight;
		particlesJS(this.container, this.props);
		this.setState({ height });
	}
	
	render() {
		return html`
			<div
				id="particles"
				ref="${(element) => {this.container = element}}">
			</div>`;
	}
};

Particles.defaultProps = defaultProps;

export default Particles;
