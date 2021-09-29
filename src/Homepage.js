import './homepage.css';
import './homepageAnimations.css'
import BrennanWilkes from "./headshots/brennanwilkes.jpg";
import PlaceHolder from "./headshots/placeholder.jpg";

/*
Arsh Singla - arshsingla02@gmail.com
Brennan Wilkes  - bwilkes@uvic.ca
Chris Wong - wongch@uvic.ca
Connor Hickton  - connorhickton@uvic.ca
Jooah Bae - jooahbae@uvic.ca
Leo Ma - liyaoma@uvic.ca
*/

const HeaderSubLink = (props) => (
	<div className="HeaderSubLinkLink">
		<a href={props.href ?? ""} target="_blank">
			<span>{props.name}</span>
		</a>
	</div>
);

const Headshot = (props) => (
	<a href={`mailto:${props.email}`} target="_blank">
		<div className="Headshot">
			<img src={props.src ?? PlaceHolder} alt="Team member headshot" />
			<div>
				<h6>{props.name ?? "Unknown"}</h6>
				<h6>{props.role ?? "Unknown"}</h6>
			</div>
		</div>
	</a>
);

const DownArrow = (props) => (
	<svg
		className="arrow svg-inline--fa fa-angle-double-down fa-w-10"
		ariaHidden="true"
		focusable="false"
		dataPrefix="fas"
		dataIcon="angle-double-down"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
		onClick={props.onClick}
	>
		<path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path>
	</svg>
);

function Homepage() {
	return (
		<div className="Homepage">
			<div>
				<header>
					<h1>CSC 375: Group 7</h1>
					<h2>System Analysis Solutions</h2>
					<div>
						<HeaderSubLink name="Mission Statement" />
						<HeaderSubLink name="Important Documents" />
						<HeaderSubLink name="Current Project" />
						<HeaderSubLink name="Contact Us" />
					</div>
					<p>
						Disclaimer: This isn't real. We are not a real software company or constulancy.
					</p>
					<p>
						Please do not actually reach out to us with software projects you need developed. We're actually just a couple students trying to get a good grade in CSC 375.
					</p>
					<p>
						However for inquiries about individual employment oppertunities, please reach out.
					</p>
				</header>
				<div>
					<Headshot src={BrennanWilkes} email="bwilkes@uvic.ca" name="Brennan Wilkes" role="Director of Web Technologies" />
					<Headshot />
					<Headshot />
					<Headshot />
					<Headshot />
					<Headshot />
				</div>

				<DownArrow onClick={(e) => {
					window.scrollTo(0, window.innerHeight);
				}}/>
			</div>
			<div>
			</div>
		</div>
	);
}

export default Homepage;
