import HeaderSubLink from "../components/HeaderSubLink";

const Header = (props) => (
	<header>
		<h1>CSC 375: Group 7</h1>
		<h2>System Analysis Solutions</h2>
		<div>
			<HeaderSubLink name="Mission Statement" href="#mission-statement" target="" />
			<HeaderSubLink name="Project & Client" href="#project" target="" />
			<HeaderSubLink name="Document Space" href="#documents" target="" />
			<HeaderSubLink name="Contact Us" href="mailto:systemanalysissolution@gmail.com" />
		</div>
		{
			props.children
		}
	</header>
);

export default Header;
