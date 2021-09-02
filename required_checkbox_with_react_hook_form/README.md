# Getting Started with Create React App

TThe app component contains an example form built with the React Hook Form library that contains a single required checkbox.

Form validation rules are defined with the Yup schema validation library and passed to the React Hook Form useForm() function, for more info on Yup see https://github.com/jquense/yup.

The checkbox is set to required with the rule Yup.bool().oneOf([true], 'Accept Ts & Cs is required').

The useForm() hook function returns an object with methods for working with a form including registering inputs, handling form submit, resetting the form, displaying errors and more, for a complete list see https://react-hook-form.com/api#useForm.

The onSubmit() method is called when the form is valid and submitted, and simply displays the form data in a javascript alert.

The returned JSX template contains the form with the required checkbox field and validation message. The form field is registered with the React Hook Form using the ref={register} attribute which registers the checkbox with its name.

```
npm install -S yup

npm i react-hook-form

npm i @hookform/resolvers

npm install react-bootstrap@next bootstrap@5.1.

npm install react-hook-form-resolvers
```


