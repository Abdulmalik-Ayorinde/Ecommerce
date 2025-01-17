import React from 'react';
import banner from "../images/banner.jpg";
import skin from "../images/skin.jpg";
import beauty from "../images/beauty.jpg"

const Bar = () => {
  return (
    <div>
      
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            style={{marginTop:"30px",marginBottom:"30px"}}
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <div className="container">
                  <img className="d-block w-100" src={skin} alt="First slide" />
                  <div className="text-block" >
                    <h4 style={{ color: "white" }}>AMAZING STORE</h4>
                    <p style={{ fontSize: "2rem" }}>GET THE GOOD STUFF</p>
                    <small style={{ fontSize: "1.5rem" }}>
                      You are fully coverd
                    </small>
                  </div>
                  <button className="btn">
                    View More <i className="fa fa-arrow-right"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="carousel-item" >
                <div className="container">
                  <img
                    className="d-block w-100"
                    src={beauty}
                    alt="Second slide"
                  />
                  <div className="text-block">
                    <h4 style={{ color: "white" }}>AMAZING STORE</h4>
                    <p style={{ fontSize: "2rem" }}>GET THE GOOD STUFF</p>
                    <small style={{ fontSize: "1.5rem" }}>
                      You are fully coverd
                    </small>
                  </div>
                  <button className="btn">
                    View More <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="carousel-item" >
                <div className="container">
                  <img className="d-block w-100" src={banner} alt="Third slide" />
                  <div className="text-block">
                    <h4 style={{ color: "white" }}>AMAZING STORE</h4>
                    <p style={{ fontSize: "2rem" }}>GET THE GOOD STUFF</p>
                    <small style={{ fontSize: "1.5rem" }}>
                      You are fully coverd
                    </small>
                  </div>
                  <button className="btn">
                    View More <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div> 
    </div>
  );
}

export default Bar;
