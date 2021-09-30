const Document = (props) => (
	<li>
		<a href={props.href} target="_blank">
			{props.label}
		</a>
	</li>
);

export default Document;
