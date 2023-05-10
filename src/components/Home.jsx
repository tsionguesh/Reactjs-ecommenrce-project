import React from "react";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

const Home =() => {
    return (
        <div className="hero">
            <div class="card bg-dark text-black boarder 0">
                <img src="/images/bg1.png" class="card-img" alt="background" 
                height="550px"/>
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h1 class="card-title display-3 fw-bolder">KEAFA DESIGN</h1>
                            <p class="card-text lead fs-2">
                                Not Just Fashion, but The Design

                            </p>
                        </div>
                        
                    </div>
            </div>
            <Products />
            <Contact />
            <Footer />
        
        </div>
    )
}
export default Home;