import React from "react";
import "./HomeComponentStyle.css";
import { Link } from "react-router-dom";
import gif from "../../assets/loading.gif";
import backgroundPrev from './HomeComponentImages/pngguru.com.png'
import backgroundNext from './HomeComponentImages/pngguru2.com.png'

const HomeComponent = ({ cities, nums }) => {
    return (
      <div className={"Apps"}>
        <div className={"cen"}>
          <h2 className={"myFont marg"}>
            Find your perfect trip,
            <br />
            designed by insiders who know and love their cities.
          </h2>
        </div>
        <h3 className={"myFont myFont2 marg3"}>View all cities here!</h3>
        <Link to="/search">
          <div className={"two"}>
            <div className={"arrow marg"}></div>
          </div>
        </Link>

        <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>

          <div className={"flexImg"}>
            <div
              id="carouselExampleControls"
              className="carousel slide one"
              data-ride="carousel"
            >
              {
                <div className="carousel-inner">
                  {cities.map((chunk, index) => {
                    var className = "carousel-item" + (index == 0 ? " active " : " ") + "one";
                    return <div key={index} className={className}>
                      
                      {chunk.map((city) => {
                        return <Link key={city._id}
                          to={`/cities/${city.title}`}
                        >
                          <div className={"pos"}>
                            <span className={"pos"}></span>
                            <span className={"posi"}>
                              <img
                                className="col-lg-6 col-md-6 col-sm-6 images"
                                src={city.image} 
                                alt="First slide"
                              />
                              <span className={"inside2"}>
                                {city.name.toUpperCase()}
                              </span>
                            </span>
                          </div>
                        </Link>
                      })
                  }
                  </div>
                  })}
                </div>
              }
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{height: "80px", width: "80px", backgroundImage: `url(${backgroundPrev})`}}
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{height: "80px", width: "80px", backgroundImage: `url(${backgroundNext})`}}
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        
      </div>
    );
  
};

export default HomeComponent;