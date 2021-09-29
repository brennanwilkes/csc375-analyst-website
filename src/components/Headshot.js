import PlaceHolder from "../headshots/placeholder.jpg";

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

export default Headshot;
