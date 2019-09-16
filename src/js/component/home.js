import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		console.log(this.state);
		let redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";

		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div id="trafficTop" />
				<div id="contanier">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
