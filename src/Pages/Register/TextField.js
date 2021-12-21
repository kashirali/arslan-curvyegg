import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './TextField.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


function onChange(value) {
    console.log("Captcha value:", value);
  }
   

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    website: Yup.string()
      .required('Required'),
    email: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    recaptcha: Yup.string().required(),
  });
  
  export const TextField = () => (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          website: '',
          email: '',
          phone: '',
          recaptcha: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" >{
                 ({ 
                    field, 
                    meta: { touched, error } 
                }) => <input  id="inp" className={ touched && error ? "invalid" : "" } { ...field } placeholder="Name"/>
           }
                </Field>
        
        <br/>
            <Field name="email" type="email" placeholder="Email">
            {
             ({ 
                field, 
                meta: { touched, error } 
             }) => <input id="inp" className={ touched && error ? "invalid" : "" } { ...field } placeholder="Email" />
            }
                </Field><br/>

            <Field name="website" placeholder="Website">
            {
             ({ 
                field, 
                meta: { touched, error } 
             }) => <input id="inp" className={ touched && error ? "invalid" : "" } { ...field } placeholder="Website"/>
           }
            </Field><br/>

            <Field name="phone" placeholder="Phone">
            {
              ({ 
                field, 
                meta: { touched, error } 
               }) => <input id="inp" className={ touched && error ? "invalid" : "" } { ...field } placeholder="Phone"/>
            }
            </Field>  <br/>    

            <textarea className="text-area" name="message"  placeholder='Message' rows="5" columns="10"/><br/>
             

            <div class="d-flex justify-content-center btn-mob">
                <button class="btn-demo mt-3" type="submit">Register</button>
            </div>
            <div style={{marginBottom:"40px"}}></div>
          </Form>
        )}
      </Formik>
      </div>


);


