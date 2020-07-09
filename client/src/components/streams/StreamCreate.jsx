import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error visible" style={{ color: 'red' }}>
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div
				className={`field  ${
					meta.touched && meta.error ? 'error' : ''
				}`}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<form
				className="ui form"
				onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'streamCreate',
	validate,
})(StreamCreate);
