import React, { Component } from 'react';

class Skills extends Component {
	constructor(props) {
		super(props);

		this.move = this.move.bind(this);
	}

	move() {
		let elemHTML = document.getElementById("myBar-HTML");
		let elemCSS = document.getElementById("myBar-CSS");
		let elemJavaScript = document.getElementById("myBar-JavaScript");
		let elemLESS = document.getElementById("myBar-LESS");
		let elemReact = document.getElementById("myBar-React");
		let elemNode = document.getElementById("myBar-Node");
		let elemGit = document.getElementById("myBar-Git");

		let widthHTML = 0;
		let widthCSS = 0;
		let widthJS = 0;
		let widthLESS = 0;
		let widthReact = 0;
		let widthNode = 0;
		let widthGit = 0;
		let idTimerHTML = setInterval(frameHTML, 10);
		let idTimerCSS = setInterval(frameCSS, 10);
		let idTimerJS = setInterval(frameJS, 10);
		let idTimerLESS = setInterval(frameLESS, 10);
		let idTimerReact = setInterval(frameReact, 10);
		let idTimerNode = setInterval(frameNode, 10);
		let idTimerGit = setInterval(frameGit, 10);

		function frameHTML() {
			if (widthHTML >= 95) {
				clearInterval(idTimerHTML);
			} else {
				widthHTML++;
				elemHTML.style.width = widthHTML + '%';
				elemHTML.innerHTML = widthHTML * 1 + '%';
			}
		}
		function frameCSS() {
			if (widthCSS >= 90) {
				clearInterval(idTimerCSS);
			} else {
				widthCSS++;
				elemCSS.style.width = widthCSS + '%';
				elemCSS.innerHTML = widthCSS * 1 + '%';
			}
		}
		function frameJS() {
			if (widthJS >= 80) {
				clearInterval(idTimerJS);
			} else {
				widthJS++;
				elemJavaScript.style.width = widthJS + '%';
				elemJavaScript.innerHTML = widthJS * 1 + '%';
			}
		}
		function frameLESS() {
			if (widthLESS >= 50) {
				clearInterval(idTimerLESS);
			} else {
				widthLESS++;
				elemLESS.style.width = widthLESS + '%';
				elemLESS.innerHTML = widthLESS * 1 + '%';
			}
		}
		function frameReact() {
			if (widthReact >= 50) {
				clearInterval(idTimerReact);
			} else {
				widthReact++;
				elemReact.style.width = widthReact + '%';
				elemReact.innerHTML = widthReact * 1 + '%';
			}
		}
		function frameNode() {
			if (widthNode >= 50) {
				clearInterval(idTimerNode);
			} else {
				widthNode++;
				elemNode.style.width = widthNode + '%';
				elemNode.innerHTML = widthNode * 1 + '%';
			}
		}
		function frameGit() {
			if (widthGit >= 70) {
				clearInterval(idTimerGit);
			} else {
				widthGit++;
				elemGit.style.width = widthGit + '%';
				elemGit.innerHTML = widthGit * 1 + '%';
			}
		}
	}

	componentDidMount() {
		this.move()
	}

	render() {
		return (
		<div className="skills">

			<p className="section">HTML</p>
			<div className="myProgress">
				<div id="myBar-HTML" className="myBar">0%</div>
			</div>

			<p className="section">CSS</p>
			<div className="myProgress">
				<div id="myBar-CSS" className="myBar">0%</div>
			</div>

			<p className="section">JavaScript</p>
			<div className="myProgress">
				<div id="myBar-JavaScript" className="myBar">0%</div>
			</div>

			<p className="section">LESS</p>
			<div className="myProgress">
				<div id="myBar-LESS" className="myBar">0%</div>
			</div>

			<p className="section">React</p>
			<div className="myProgress">
				<div id="myBar-React" className="myBar">0%</div>
			</div>

			<p className="section">Node.js</p>
			<div className="myProgress">
				<div id="myBar-Node" className="myBar">0%</div>
			</div>

			<p className="section">Git</p>
			<div className="myProgress">
				<div id="myBar-Git" className="myBar">0%</div>
			</div>

		</div>
		)
	}
}

export default Skills;