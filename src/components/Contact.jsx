import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <div class="card">
      <h1 className="display-6 fw-bolder text-center">Contact us</h1>
      <img src="/images/bg1.png" class="card-img" alt="background"
        height="550px" />
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
          <form id='form' className="col-md-6 offset-md-4
                            text-center"
            style={{ width: '100%', maxWidth: '500px' }}>

            <MDBInput  v-model='name' wrapperClass='mb-8' label='Name' className='square border border-5'/>

            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' className='square border border-5' />

            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-3' className='square border border-5' />

            <MDBTextArea wrapperClass='mb-4' label='Message' className='square border border-5'/>

            <MDBBtn color='dark' rippleColor='light' block className='mx-2' size='lg'>
              Send
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>

  );
};
export default Contact