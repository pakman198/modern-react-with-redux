import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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

  onSubmit(formValues) {
    console.log({formValues})
  }

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
export default reduxForm({ 
  form: 'streamCreate',
  validate
})(StreamCreate);