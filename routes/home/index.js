import Bio from '/components/bio.js';
import Interests from '/components/interests.js';
import Meta from '/components/meta.js';
import Particles from '/components/particles.js';
import Profile from '/components/profile.js';
import Social from '/components/social.js';
import { React } from 'https://unpkg.com/es-react@16.8.30/index.js';
import {PROFILE, CURRENT_JOB, HIRE_LINK, BIO_DETAILS, INTERESTS, SOCIAL_MEDIA} from './constants.js';
const styles = css`/routes/home/index.css`;

// Social media logos included in constants.
const logos = SOCIAL_MEDIA.reduce(
	(logos, current) => {
		const name = current.name.toLowerCase();
		logos[name] = React.lazy(() => import('/img/logos/' + name + '.js'));
		return logos;
	}, {});

// Main component
export default () => html`
	<article className=${styles}>
	  <main>
			<aside>
				<${Particles} />
				<${Profile}
					image="${PROFILE.image}"
					name="${PROFILE.name}"
					title="${CURRENT_JOB.title}"
					job="${CURRENT_JOB.location}" />
			</aside>
			<nav>
				<${Profile}
					image="${PROFILE.image}"
					name="${PROFILE.name}"
					title="${CURRENT_JOB.title}"
					job="${CURRENT_JOB.location}" />
				<section className="spotlight">
					<a href="${HIRE_LINK}" target="_blank" rel="noopener noreferrer" className="button">Hire me</a>
				</section>
				<${Bio} bioDetails="${BIO_DETAILS}" />
				<${Interests} interests="${INTERESTS}" />
				<${Meta} company="${CURRENT_JOB.company}" education="${CURRENT_JOB.education}" />
				<${Social} data="${SOCIAL_MEDIA}" logos="${logos}" />
			</nav>
		</main>
  </article>
`;
