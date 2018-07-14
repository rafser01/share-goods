import {LOGIN_EMAIL_INPUT, LOGIN_PASSWORD_INPUT } from '../../../../constants/index';

export const validate = values => {
    
    const errors = {}
    const requiredFields = [
      LOGIN_PASSWORD_INPUT,
      LOGIN_EMAIL_INPUT
  
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    return errors
  }