import React from 'react';
import Container from '@material-ui/core/Container'
import { CssBaseline } from '@material-ui/core';
import BusinessForm from '../../components/business-form';

const BusinessRegistrationPage = () => {

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <BusinessForm />
      </Container>
    </>
  )
}

export default BusinessRegistrationPage;
