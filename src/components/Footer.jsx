import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn className='me-4'outline color="light"  href='#' role='button'>
            <MDBIcon icon='facebook-f' />
          </MDBBtn>

          <MDBBtn className='me-4'  outline color="light"  href='#' role='button'>
            <MDBIcon icon='twitter' />
          </MDBBtn>

          <MDBBtn className='me-4' outline color="light"  href='#' role='button'>
            <MDBIcon icon='google' />
          </MDBBtn>
          <MDBBtn className='me-4' outline color="light" href='#' role='button'>
            <MDBIcon icon='instagram' />
          </MDBBtn>

          <MDBBtn className='me-4' outline color="light"  href='#' role='button'>
            <MDBIcon icon='linkedin' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black'}}>
        ©Copyright
        
      </div>
    </MDBFooter>
  );
}