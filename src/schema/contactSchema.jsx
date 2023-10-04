import * as Yup from 'yup'
const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string(),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  company: Yup.string(),
  message: Yup.string().required('Message is required'),
})
export default ContactSchema
