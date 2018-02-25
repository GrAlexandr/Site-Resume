import React, { Component } from 'react';

class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.form = {	name: '',	email: '',	message: ''	};
		this.state.map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789946.6203207069!2d31.03299019115851!3d49.329599785603065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0YHRiywg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE4MDAw!5e0!3m2!1sru!2sua!4v1519210377435';

		this.formChange = this.formChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	formChange = (key, value) => {
		this.setState(state => (
			{ form: { ...state.form, [key]: value } }
		));
	};

	submit = () => {
		fetch('/contact', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.form)
		});
	};

	render() {
		return (
			<div className="contacts">

				<div className="wrap-cont">

					<div className="contacts-left">
						<div className="data contacts-data-location">
							Location: Ukraine, Cherkassy
						</div>
						<div className="data contacts-data-tel">
							tel: +30969455442
						</div>
						<div className="data contacts-data-email">
							Email: grygorenko1982@gmail.com
						</div>
						<div className="data contacts-data-skype">
							Skype: sasha_00982
						</div>
					</div>

					<div className="contacts-right">
						<form>
							<div className="input-text">
							<label>
								<input type='text' placeholder='* YOUR NAME' value={ this.state.form.name }
									onChange={ (e) => this.formChange('name', e.target.value) } />
							</label>
							</div>
							<div className="input-email">
							<label>
								<input type='email'	placeholder='* YOUR EMAIL'	value={this.state.form.email}
									onChange={ (e) => this.formChange('email', e.target.value) } />
							</label>
							</div>
							<div className="textarea">
							<label>
								<textarea placeholder='YOUR MESSAGE'	value={ this.state.form.message }
									onChange={ (e) => this.formChange('message', e.target.value) } />
							</label>
							</div>
						<div className="btn-submit">
							<label>
								<input onClick={ this.submit } type='submit' value='Send &rarr;'	/>
							</label>
						</div>
						</form>
					</div>

				</div>

				<iframe className="map" src={ this.state.map } />
			</div>
		)
	}
}

export default Contacts;