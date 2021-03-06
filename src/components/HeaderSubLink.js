

const HeaderSubLink = (props) => (
	<div className="HeaderSubLinkLink">
		<a href={props.href ?? ""} onClick={props.onClick} target={props.target ?? "_blank"}>
			<span>{props.name}</span>
		</a>
	</div>
);

export default HeaderSubLink;
