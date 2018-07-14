// @ts-check
import React from "react";
import { Radio, Form, Icon, Input, Select } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { SIGNUP_SEX_CHOOSE } from "../../../constants/index";
import { change } from "redux-form";

const inputStyle = {
  borderRadius: 0,
  border: "1px solid rgba(34,36,38,.35)"
};

export const renderTextField = ({
  input,
  label,
  meta: { touched, error }
  // ...custom
}) => {
  return <Input focus={touched} required placeholder={label} {...input} />;
};

export const renderPasswordField = ({
  input,
  label,
  meta: { touched, error, form }
  // ...custom
}) => (
  <Input
    iconPosition="left"
    fluid
    focus={touched}
    placeholder={label || "Password"}
    {...input}
  >
    <Icon name="key" />
    <input type="password" required style={inputStyle} />
  </Input>
);

export const renderEmailField = ({
  input,
  label,
  meta: { touched, error, form }
  // ...custom
}) => (
  <Input
    iconPosition="left"
    fluid
    focus={touched}
    placeholder="Email Address"
    {...input}
    required
  >
    <Icon name="mail outline" />
    <input type="email" style={inputStyle} />
  </Input>
);

export const renderNameField = ({
  input,
  label,
  meta: { touched, error, form }
  // ...custom
}) => (
  <Input
    iconPosition="left"
    fluid
    focus={touched}
    placeholder={label}
    {...input}
    required
  >
    <Icon name="user outline" />
    <input type="text" style={inputStyle} />
  </Input>
);

export const renderSelectField = ({
  input,
  label,
  options,
  meta: { touched, error, form }
  // ...custom
}) => (
  <Select
    fluid
    style={inputStyle}
    options={options}
    placeholder={label}
    onChange={(e, data) => input.onChange(data.value)}
  />
);

export const renderDateField = ({
  input,
  label,
  meta: { touched, error, form }
  // ...custom
}) => {
  let ref;
  return (
    <Input
      fluid
      focus={touched}
      type="text"
      required
      placeholder={label}
      {...input}
    >
      <input
        ref={r => (ref = r)}
        onFocus={() => (ref.type = "date")}
        style={inputStyle}
      />
    </Input>
  );
};

export class renderDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      month: 0,
      year: 1990
    };

    this.updateDate();
  }

  range(start, end) {
    return [...Array(1 + end - start).keys()].map(v => start + v);
  }

  get dayOptions() {
    return this.range(1, 31).map(n => ({
      key: n,
      text: n,
      value: n
    }));
  }

  get monthOptions() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ].map((n, i) => ({
      key: i,
      text: n,
      value: i
    }));
  }

  get yearOptions() {
    return this.range(1960, 2018).map(n => ({
      key: n,
      text: n,
      value: n
    }));
  }

  componentDidUpdate() {
    this.updateDate();
  }

  onChange(data) {
    this.setState(data);

    setTimeout(() => {
      this.updateDate();
    }, 500);
  }

  updateDate() {
    const { year, month, day } = this.state;
    this.props.meta.dispatch(
      change(
        this.props.meta.form,
        this.props.input.name,
        new Date(year, month, day)
      )
    );
  }

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Select
              fluid
              style={inputStyle}
              options={this.monthOptions}
              placeholder={"Month"}
              value={this.state.month}
              onChange={(e, data) => this.onChange({ month: data.value })}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Select
              fluid
              style={inputStyle}
              options={this.dayOptions}
              placeholder={"Day"}
              value={this.state.day}
              onChange={(e, data) => this.onChange({ day: data.value })}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Select
              fluid
              style={inputStyle}
              options={this.yearOptions}
              placeholder={"Year"}
              value={this.state.year}
              onChange={(e, data) => this.onChange({ year: data.value })}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

let maleChecked = true;
let femaleChecked = false;

export class renderRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maleChecked: true
    };
    this.props.meta.dispatch(
      change(
        this.props.meta.form,
        this.props.input.name,
        this.state.maleChecked
      )
    );
  }
  componentDidUpdate() {
    this.props.meta.dispatch(
      change(
        this.props.meta.form,
        this.props.input.name,
        this.state.maleChecked
      )
    );
  }
  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>Male</Grid.Column>
          <Grid.Column>
            <Form.Field>
              <Radio
                toggle
                checked={this.state.maleChecked}
                onClick={() => {
                  this.setState({
                    maleChecked: !this.state.maleChecked
                  });
                }}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>Female</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
