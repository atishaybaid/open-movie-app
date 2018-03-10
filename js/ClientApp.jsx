import React from "react";
import ReactDOM from "react-dom";
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
      this.state = {
        data: {}
      };
      this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event, field) {
      console.log(this);
      console.log(field);
      console.log(event.target);
      /* var tempData = this.state.data;
      console.log(tempData);
      tempData[field] = event.target.value;
      this.setState({ data: tempData });*/
    }
    onFormSubmit() {}

    render() {
      return (
        <Form_Componet onFieldChange={this.onFieldChange} onFormSubmit={this.onFormSubmit} data={this.state.data} />
      );
    }
  };
};

const ConnectedForm = FormHOC(LoginForm);

ReactDOM.render(<ConnectedForm />, document.getElementById("app"));
