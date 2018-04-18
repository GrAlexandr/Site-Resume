import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about-left">
					<p>
						<h2>Education</h2>
					</p>
					<ul className="education-list">
						<li>
							<p>1998 - 2003</p>
							<p>
								National Aerospace University named after M.E. Zhukovsky (KhAI)
							</p>
							<p>
								Faculty of aircraft engines
							</p>
							<p>
								Specialty:	Robotic systems and complexes
							</p>
						</li>
						<li>
							<p>2016 - 2017</p>
							<p>
								Independently studied HTML, CSS, JavaScript
							</p>
						</li>
						<li>
							<p>2017 - 2018</p>
							<p>
								GeekHub seventh season
							</p>
							<p className="geek-hub">
								GeekHub is a project that enables talented young people to gain practical knowledge and skills in
								the field of software development and IT in general. The Geekhub team is a group of IT professionals working in leading software companies.
							</p>
							<p>
								Course JavaScript
							</p>
							<p>
								The course is designed for people who want to learn Javascript from the inside. The course includes: language learning in detail, programming techniques and frameworks needed to do everything from a quick AJAX add-on to up-to-date large-scale applications.
							</p>
						</li>
					</ul>
				</div>
				<div className="about-right">
					<h2>I study and use in practice such technologies:</h2>
					<ul>
						<li>HTML</li>
						<li>CSS / LESS / Bootstrap</li>
						<li>JavaScript / jQuery</li>
						<li>React / Router / Redux</li>
						<li>Node.js / Express</li>
						<li>WebSocket / Socket.io</li>
						<li>MongoDB</li>
						<li>Mailgun</li>
						<li>Heroku</li>
						<li>Git</li>
					</ul>
					<div className="projects">
						<h3>Projects written within the framework of GeekHub course</h3>
						<ul>
							<li><a href="https://gralexandr.github.io/" target="_blank">site layout</a></li>
							<li><a href="https://gralexandr.github.io/todoDnD/" target="_blank">todo list drag and drop</a></li>
							<li><a href="https://gralexandr.github.io/plugin_jQ/" target="_blank">plugin jQuery slider</a></li>
							<li><a href="https://gralexandr.github.io/react_slider/build/" target="_blank">react slider</a></li>
							<li>API:
								<a href="https://gralexandr.github.io/API/exchange/" target="_blank" className="api">Rate Bitcoin</a>
								<a href="https://gralexandr.github.io/API/map/" target="_blank" className="api">Map</a>
								<a href="https://gralexandr.github.io/API/wikipedia/" target="_blank" className="api">Wikipedia</a>
							</li>
							<li><a href="https://gralexandr.github.io/puzzle_ES6/" target="_blank">game puzzle</a></li>
							<li><a href="https://contacts-geekhub.herokuapp.com/" target="_blank">contacts</a></li>
							<li><a href="https://tank-ultimate-arena.herokuapp.com//" target="_blank">tank-ultimate-arena</a></li>
						</ul>
					</div>
				</div>

			</div>
		)
	}
}

export default About;