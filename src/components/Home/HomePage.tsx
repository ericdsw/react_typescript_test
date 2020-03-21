import React from 'react';
import DashboardPage from '../BasePages/DashboardPage';
import { Typography, MenuItem } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import * as yup from 'yup';

const options = [
  { key: "option1", val: "Option 1" },
  { key: "option2", val: "Option 2" },
  { key: "option3", val: "Option 3" }
];

const schema = yup.object().shape({
  randomData: yup.string().required("Random Data is required"),
  firstName: yup.string().required("First Name is required"),
  dropdown: yup.string().required("dropdown is required"),
  date: yup.date().required('Date is required')
})

const HomePage = () => {

  return (
    <DashboardPage>
      <Typography variant='h5'>

      </Typography>
      <Formik
        validationSchema={schema}
        initialValues={{
          randomData: 'random data',
          firstName: 'First Name',
          dropdown: 'option1',
          date: Date.now()
        }}
        onSubmit={(values, {setSubmitting}) => {
          setSubmitting(false);
          console.log(values);
        }}
      >
      {({submitForm}) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    name='randomData'
                    label='Random Data'
                    fullWidth variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    name='firstName'
                    label='First Name'
                    fullWidth variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    name='dropdown'
                    label='Drop Down'
                    select variant='outlined' fullWidth
                  >
                    {options.map((option: any) => (
                      <MenuItem key={option.key} value={option.key}>{option.val}</MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={DatePicker}
                    name='date'
                    label='Date Picker'
                    format='MM/dd/yyyy'
                    fullWidth variant='inline' inputVariant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color='primary'
                    variant='contained'
                    fullWidth
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </DashboardPage>
  )
}

export default HomePage;
