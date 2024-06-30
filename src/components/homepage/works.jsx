import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./theaftercolorx.png"
								alt="theaftercolorx"
								className="work-image"
							/>
							<div className="work-title">Theaftercolorx</div>
							<div className="work-subtitle">
								Wordpress/Frontend Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./tvalogo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Travel Avatar (TVA)
							</div>
							<div className="work-subtitle">UI/UX Designer</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./swapspace.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Swap Space</div>
							<div className="work-subtitle">
								Product Designer
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./vefi_official_logo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">VEFI</div>
							<div className="work-subtitle">
								Senior Product Designer
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./swapdex.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">3SwapDex</div>
							<div className="work-subtitle">
								Senior Product Designer
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>

						<div className="work">
							<img src="" alt="" className="work-image" />
							<div className="work-title">Quantum</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img src="" alt="" className="work-image" />
							<div className="work-title">
								National Hosptial Abuja
							</div>
							<div className="work-subtitle">
								Laboratory Intern
							</div>
							<div className="work-duration">2016 - 2018</div>
						</div>

						<div className="work">
							<img src="" alt="" className="work-image" />
							<div className="work-title">Jollo Delivery</div>
							<div className="work-subtitle">
								Product Design Intern
							</div>
							<div className="work-duration">2016 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
