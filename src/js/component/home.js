import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div id="trafficTop" />
				<div id="contanier">
					<div className="red light" />
					<div className="yellow light" />
					<div className="green light" />
				</div>
			</div>
		);
	}
}
