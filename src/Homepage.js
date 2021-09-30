import './homepage.css';
import './homepageAnimations.css'
import BrennanWilkes from "./headshots/brennanwilkes.jpg";
import ArshSingla from "./headshots/arshsingla.jpg";
import Headshot from "./components/Headshot";
import Header from "./components/Header";
import DownArrow from "./components/DownArrow";

/*
Arsh Singla - arsh98@uvic.com
Brennan Wilkes  - bwilkes@uvic.ca
Chris Wong - wongch@uvic.ca
Connor Hickton  - connorhickton@uvic.ca
Jooah Bae - jooahbae@uvic.ca
Leo Ma - liyaoma@uvic.ca
*/

function Homepage() {
	return (
		<div className="Homepage">
			<section>
				<Header><>
					<p>
						Disclaimer: This isn't real. We are not a real software company or constulancy.
					</p>
					<p>
						Please do not actually reach out to us with software projects you need developed. We're actually just a couple students trying to get a good grade in CSC 375.
					</p>
					<p>
						However for inquiries about individual employment oppertunities, please reach out.
					</p>
				</></Header>
				<div>
					<Headshot src={BrennanWilkes} email="bwilkes@uvic.ca" name="Brennan Wilkes" role="Director of Web Technologies" />
					<Headshot src={ArshSingla} email="arsh98@uvic.com" name="Arsh Singla" role="" />
					<Headshot />
					<Headshot />
					<Headshot />
					<Headshot />
				</div>

				<DownArrow onClick={(e) => {
					window.scrollTo(0, window.innerHeight);
				}}/>
			</section>
			<section id="mission-statement">
				<div>
					<h2>Mission Statement</h2>
					<h3>System Analysis Solutions</h3>
				</div>
				<p>
					Our company provides professional software and system solutions to clients from a range of businesses. While most of our clients are focused in the region of Victoria, we open our doors to clients from around British Columbia seeking to find the right and reliable professionals for software and system deployment, upgrade, installation, and maintenance.
				</p>
			</section>
			<section id="current-project">
				<div>
					<h2>Current Project</h2>
					<h3>The Victoria Housing Rental Consolidator</h3>
				</div>
				<p>
					The Victoria Housing Rental Consolidator project aims at developing a system that consolidates and scrapes housing rental information (links) on UsedVictoria, Kijiji, and Craigslist to support individuals in need of housing around the University of Victoria (UVic). Users entering the system will search for listings based on a range of criteria and look for information on three different sources all at once. The project should not cost over one Million dollars and is expected to finish around 4 months.
				</p>
				<div>
					<h2>Project Client</h2>
					<h3>Housing Consolidator (HOCO)</h3>
				</div>
				<p>
					Housing Consolidator (HOCO) is an organization located in the Victoria region that aims to develop the right tool to help renters search for housing in the Capital Regional District .
				</p>
			</section>
		</div>
	);
}

export default Homepage;
