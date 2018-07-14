// @flow
export type SEX_ENUM = "MALE" | "FEMALE";
export var UserType = {
  firstName: String,
  lastName: String,
  email: String,
  sex: SEX_ENUM,
  dob: Date,
  password: String,
  verified: Boolean,
  userName: String,
  avatar: String
};

// export class UserType {
//   /**
//    * @constructor
//    * @param {string} firstName
//    * @param {string} lastName
//    * @param {string} email
//    * @param {string} sex
//    * @param {DateTime} dob
//    * @param {string} password
//    * @param {Boolean} verified
//    * @param {String} userName
//    */
//   constructor(
//     firstName: String,
//     lastName: String,
//     email: String,
//     sex: SEX_ENUM,
//     dob: Date,
//     password: String,
//     verified: Boolean,
//     userName: String
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.sex = sex;
//     this.dob = dob;
//     this.password = password;
//     this.verified = verified;
//     this.userName = userName;
//   }
// }

export const SEX_ENUM = "MALE" | "FEMALE";
