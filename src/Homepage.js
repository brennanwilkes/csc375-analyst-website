import './homepage.css';
import './homepageAnimations.css'
import BrennanWilkes from "./headshots/brennanwilkes.jpg";
import ArshSingla from "./headshots/arshsingla.jpg";
import ConnorHickton from "./headshots/connorhickton.jpg";
import ChrisWong from "./headshots/chriswong.jpg";
import Headshot from "./components/Headshot";
import Header from "./components/Header";
import Document from "./components/Document";
import DownArrow from "./components/DownArrow";
import Housing from "./housing.svg";
import Birds from "./uvic-birds.png";

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
					<Headshot src={ArshSingla} email="arsh98@uvic.com" name="Arsh Singla" role="Principal Software Engineer" />
					<Headshot src={ConnorHickton} name="Connor Hickton" email="connorhickton@uvic.ca" role="Project Manager" />
					<Headshot name="Leo Ma" email="liyaoma@uvic.ca" role="Requirements Analyst" />
					<Headshot src={ChrisWong} email="wongch@uvic.ca" name="Chris Wong" role="Client & Public Relations" />
					<Headshot name="Jooah Bae" email="jooahbae@uvic.ca" role="Project Analyst" />
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
				<img src={Birds} className="Birds" />
			</section>
			<section id="project">
				<div>
					<h2>Project Description</h2>
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
					Housing Consolidator (HOCO) is an organization located in the Victoria region that aims to develop the right tool to help renters search for housing in the Capital Regional District.
				</p>
				<img src={Housing} className="Housing" />
			</section>
			<section id="documents">
				<div>
					<h2>Document Space</h2>
					<h3>Public Corperate Documents</h3>
				</div>
				<p>
					<ul>
						<Document href="RFP.pdf" label="Request For Proposal" />
						<Document label="Project Charter" />
						<Document label="Requirements Report Version 1.0" />
						<Document label="Requirements Report Version 2.0" />
						<Document label="Requirements Report Version 3.0" />
						<Document label="Requirements Report Version 4.0" />
					</ul>
				</p>

				<div>
					<h2>Meeting Notes</h2>
					<h3>Public Meeting Minutes</h3>
				</div>
				<p>
					<ul>

						<Document label="Sept. 27th - Client Meeting #1" />
						<Document label="First Client - Analyst Meeting" />
					</ul>
				</p>
			</section>
		</div>
	);
}

export default Homepage;
