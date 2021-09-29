import HeaderSubLink from "../components/HeaderSubLink";

const Header = (props) => (
	<header>
		<h1>CSC 375: Group 7</h1>
		<h2>System Analysis Solutions</h2>
		<div>
			<HeaderSubLink name="Mission Statement" />
			<HeaderSubLink name="Important Documents" />
			<HeaderSubLink name="Current Project" />
			<HeaderSubLink name="Contact Us" />
		</div>
		{
			props.children
		}
	</header>
);

export default Header;
