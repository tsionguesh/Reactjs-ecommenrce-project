import React from 'react';
import products from "../data/Product";
import { NavLink } from 'react-router-dom';

const Products= () =>{

  return (
    <div>
         
        <div className="container my-5 py-5">
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className="display-6 fw-bolder text-center">Our Products</h1>
                    <hr />
                </div>
            </div>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark' me-2 >Men's Cloth</button>
                <button className='btn btn-outline-dark' me-2 >women's Cloth</button>
                <button className='btn btn-outline-dark' me-2 >children's Cloth</button>
                <button className='btn btn-outline-dark' me-2 >Other's Cloth</button>
            </div>
        
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                      {products.map((product) => (
                          <div class="card h-100 text-center p-4" key={product._id}>
                              <img src={product.image} class="card-img-top " alt={product.title} height="250px" width="300px" />
                              <div class="card-body">
                                  <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                  <p class="card-text lead fw-bold">
                                      ${product.price}
                                  </p>
                                  <NavLink to={'/products/(product._id'} class="btn btn-outline-dark ">
                                      Buy Now
                                  </NavLink>
                              </div>
                          </div>
                      ))}



               

              </div>



        </div>
        
      
    </div>
  );
};

export default Products
