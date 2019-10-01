import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class StreamCreate extends Component {

  renderError({touched, error}) {
    if ( touched && error ) {
      return (
        <div className="ui error message">
          <div className="header">
            { error }
          </div>
        </div>
      );
    }

    return null;
  }

  renderInput = (formProps) => {
    const { label, input, meta } = formProps;
    const classes = `field ${meta.error && meta.touched ? 'error' : null }`;
    console.log({ meta })

    return (
      <div className={classes}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        { this.renderError(meta) }
      </div>
    );
  }

  // since this function will be a callback, the parameter gets passed
  // from the this.props.handleSubmit function
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  // this.props.handleSubmit is a prop injected by the reduxForm that expects a callback
  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="button ui primary">Submit</button>
      </form>
    );

  }
}

const validate = (formValues) => {
  const errors = {};

  if ( !formValues.title ) {
    errors.title = "Please enter a title"
  }

  if ( !formValues.description ) {
    errors.description = "Please enter a description"
  }

  return errors;
}

// form specifies the name of this form
const wrappedForm = reduxForm({ 
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm)