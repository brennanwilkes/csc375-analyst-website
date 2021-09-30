const Document = (props) => {
	if(!props.href){
		return (<li>{props.label}</li>);
	}
	return (
		<li>
			<a href={props.href} target="_blank">
				{props.label}
			</a>
		</li>
	);
}

export default Document;
