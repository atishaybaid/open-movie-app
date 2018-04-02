import React from "react";
import PropTypes from "prop-types";

const LoginForm = props => {
  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Your Name"
        value={props.data.name}
        onChange={props.onFieldChange.bind(this, "name")}
      />
      <input
        type="text"
        placeholder="Your email"
        value={props.data.email}
        onChange={props.onFieldChange.bind(this, "email")}
      />
      <input
        type="text"
        placeholder="Your password"
        value={props.data.password}
        onChange={props.onFieldChange.bind(this, "password")}
      />
      <input type="button" value="submit" onClick={props.onFormSubmit} />
    </div>
  );
};

const FormHOC = Form_Componet => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      //this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange = (field, event) => {
      var target = event.target;

      this.setState(
        prevState => ({ [field]: target.value }),
        () => {
          console.log(this.state);
        }
      );
    };
    onFormSubmit() {
      //validation logic
    }

    render() {
      return <Form_Componet onFieldChange={this.onFieldChange} onFormSubmit={this.onFormSubmit} data={this.state} />;
    }
  };
};

const ConnectedForm = FormHOC(LoginForm);

export default ConnectedForm;


