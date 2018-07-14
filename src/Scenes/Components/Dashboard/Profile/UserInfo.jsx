// @flow
import React from "react";
import {
  Grid,
  Image,
  Button,
  Icon,
  Input,
  Label,
  Table
} from "semantic-ui-react";
import { UserType } from "../../../../CommonTypes/UserType";
type props = {
  user: UserType
};
export class UserInfo extends React.Component<props> {
  render() {
    return (
      <Grid>
        <Grid.Row centered columns={1}>
          <Grid.Column>
            <h2>
              {`${this.props.user.firstName} ${this.props.user.lastName}`}
            </h2>
            <hr />
            <Table singleLine style={{ border: "none " }}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Date Of Birth : </Table.Cell>
                  <Table.Cell>{this.props.user.dob.split("T")[0]}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>E-MAIL :</Table.Cell>
                  <Table.Cell>{this.props.user.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sex : </Table.Cell>
                  <Table.Cell>{this.props.user.sex}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
