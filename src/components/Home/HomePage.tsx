import React, { useState } from 'react';
import DashboardPage from '../BasePages/DashboardPage';
import { Typography, Input } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@material-ui/core';

const HomePage = () => {

  const [data, updateData] = useState({
    firstName: 'foo',
    randomData: 'bar'
  });

  return (
    <DashboardPage>
      <Typography variant='h3' gutterBottom>Home page. Visit /items for an actual page</Typography>
      <SubComponent
        firstName={data.firstName}
        randomData={data.randomData}
        parentMethod={data => {
          updateData(data);
          console.log(data);
        }}
      />
    </DashboardPage>
  )
}

// This logic is only encased in a sub component to test how to pass data to the parent state.
type SubComponentProps = {
  firstName: string,
  randomData: string,
  parentMethod: (params: any) => void
}

const SubComponent = (props: SubComponentProps) => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    props.parentMethod(data);
  }

  return (
    <form style={{maxWidth: 300}} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name='randomData'
            label='Random Data'
            inputRef={register({ required: "Input is Required" })}
            defaultValue={props.randomData}
            error={typeof errors.randomData !== 'undefined'}
            helperText={errors.randomData && errors.randomData.message}
            fullWidth
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='first_name'
            label='First Name'
            variant='outlined'
            fullWidth
            defaultValue={props.firstName}
            inputRef={register({ required: "Input is Required", pattern: /^[A-Za-z]+$/ })}
            error={typeof errors.first_name !== 'undefined'}
            helperText={
              errors.first_name &&
              <span>
                {errors.first_name.type === 'required' && errors.first_name.message}
                {errors.first_name.type === 'pattern' && 'Must only use letters, no number allowed'}
              </span>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            variant='contained'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default HomePage;
