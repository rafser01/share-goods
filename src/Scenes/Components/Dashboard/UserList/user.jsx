// @flow
import { SEX_ENUM } from "../../../../models/User";
type props = {
  avatar: String,
  name: String,
  sex: SEX_ENUM
};
import { Grid, Image } from "semantic-ui-react";
export const User = (props: props) => {
  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column width={12}>
          <Image src={`data:image/gif;base64,${props.avatar}`} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12}>
          <Image src={`data:image/gif;base64,${props.avatar}`} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12}>
          <Image src={`data:image/gif;base64,${props.avatar}`} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
