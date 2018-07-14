import { gql } from "react-apollo";

export const createUser = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $sex: String!
    $dob: DateTime!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      sex: $sex
      dob: $dob
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
      dob
    }
  }
`;
export const addHuman = gql`
  mutation addHuman(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $sex: String!
    $dob: String!
    $verified: Boolean!
  ) {
    addHuman(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      sex: $sex
      dob: $dob
      verified: $verified
    ) {
      id
      firstName
      lastName
      sex
      dob
      email
      verified
    }
  }
`;

export const login = gql`
  mutation signupUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $sex: String!
    $dob: String
  ) {
    signupUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      sex: $sex
      dob: $dob
    ) {
      id
      token
    }
  }
`;
