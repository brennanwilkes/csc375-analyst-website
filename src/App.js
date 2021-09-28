import './App.css';
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

const Headshot = (props) => {
	const inner = (
		<div className="Headshot">
			<img src={props.src ?? PlaceHolder} alt="Team member headshot" />
			<div>
				<h6>{props.role ?? "Unknown"}</h6>
			</div>
		</div>
	);
	if(props.email){
		return (
			<a href={`mailto:${props.email}`} target="_blank">
				{inner}
			</a>
		)
	}
	return inner;
}

function App() {
	return (
		<div className="App">
			<div>
				<header>
					<h1>CSC 375: Group 7</h1>
					<h2>System Analysis Solutions</h2>
					<div>
						<HeaderSubLink name="Mission Statement" />
						<HeaderSubLink name="Documents" />
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
					<Headshot src={BrennanWilkes} email="bwilkes@uvic.ca" role="Director of Web Technologies" />
					<Headshot />
					<Headshot />
					<Headshot />
					<Headshot />
					<Headshot />
				</div>
			</div>
		</div>
	);
}

export default App;
