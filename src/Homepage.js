import './homepage.css';
import './homepageAnimations.css'
import BrennanWilkes from "./headshots/brennanwilkes.jpg";
import ArshSingla from "./headshots/arshsingla.jpg";
import HeaderSubLink from "./components/HeaderSubLink";
import Headshot from "./components/Headshot";
import DownArrow from "./components/DownArrow";

/*
Arsh Singla - arshsingla02@gmail.com
Brennan Wilkes  - bwilkes@uvic.ca
Chris Wong - wongch@uvic.ca
Connor Hickton  - connorhickton@uvic.ca
Jooah Bae - jooahbae@uvic.ca
Leo Ma - liyaoma@uvic.ca
*/

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
					<Headshot src={ArshSingla} email="arshsingla02@gmail.com" name="Arsh Singla" role="" />
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
