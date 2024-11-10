import React from 'react'
import './styles.css';
// import { NavLink } from 'react-router-dom'


const MyWork = () => {
  return (
    <>
      {/* MyWork-Heading Start */}
      <div className='container vh-100 Work-section-heading'>
        <div className="row h-100">
          <div className="col-12 d-flex justify-content-center align-items-center">
          <h4>👋 Hey There, I'm Sanket <br />
          <span><h2 >A <span className='heading-style'>Web Developer</span>, Building the future of the web, pixel by pixel.</h2></span></h4>
          </div>
        </div>
      </div>
      {/* MyWork-Heading End */} 

      

      <div className="container vh-100 Project-section-heading projects-section">
      <h1 className="text-center  fw-bold experience-heading">Experience</h1>
      <div className="row h-100 justify-content-center">
      <div className="row mx-1 g-4 justify-content-center">

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/html.png"
          alt="HTML"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        /> 
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-0">
        <img
          src="images/css.png"
          alt="CSS"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/bootstrap.png"
          alt="Bootstrap"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/js.png"
          alt="JS"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/material-ui.png"
          alt="Material-ui"
          className="img-fluid"
          style={{ width: "120px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/react-js.png"
          alt="React"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/node.png"
          alt="Node"
          className="img-fluid"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/express.png"
          alt="Express-js"
          className="img-fluid"
          style={{ width: "120px", height: "100px", borderRadius: "50%" }}
        />
      </div>

      <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3">
        <img
          src="images/mongo.png"
          alt="Mongodb"
          className="img-fluid"
          style={{ width: "120px", height: "100px", borderRadius: "50%" }}
        />
      </div>


    </div>
  </div>
</div>






      <div className="container vh-100 Project-section-heading projects-section">
        <h1 className="text-center mt-5 mb-5 fw-bold  project-heading">Projects</h1>
        <div className="row h-100">
          <div className="row mx-1 g-4">

            <div className="col-md-6 col-sm-12 col-12 mb-3"> 
              <img
                src="images/weather-app.png"
                alt="Weather App"
                className="img-fluid"
                style={{ width: "100%", height: "auto", maxHeight: "500px" , borderRadius:"15px" }}
              /> 
                <a href="https://weather-app-sand-five-50.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline-danger mt-3 fw-bold text-sm-center">
                    Go There <i className="bi bi-box-arrow-in-up-right"></i>
                  </button>
                </a>
            </div>

            <div className="col-md-6 col-sm-12 col-12 mb-3">
              <img
                src="images/cal-app.png"
                alt="Cal App"
                className="img-fluid"
                style={{ width: "100%", height: "auto", maxHeight: "500px" , borderRadius:"15px" }}
              />
              <a href="https://calculator-app-iota-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline-danger mt-3 fw-bold text-sm-center">
                    Go There <i className="bi bi-box-arrow-in-up-right"></i>
                  </button>
              </a>
            </div>

            <div className="col-md-6 col-sm-12 col-12 mb-3">
              <img
                src="images/game.png"
                alt="Game-Rock-Paper-Scissors"
                className="img-fluid"
                style={{ width: "100%", height: "auto", maxHeight: "500px" , borderRadius:"15px" }}
              />
              <a href="https://game-rock-paper-scissors-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline-danger mt-3 fw-bold text-sm-center">
                    Go There <i className="bi bi-box-arrow-in-up-right"></i>
                  </button>
              </a>
            </div>

            <div className="col-md-6 col-sm-12 col-12 mb-3">
              <img
                src="images/FilmFolio.png"
                alt="FilmFolio"
                className="img-fluid"
                style={{ width: "100%", height: "auto", maxHeight: "500px" , borderRadius:"15px" }}
              />
              <a href="https://film-folio-movie-site.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline-danger mt-3 fw-bold text-sm-center">
                    Go There <i className="bi bi-box-arrow-in-up-right"></i>
                  </button>
              </a>
            </div>


          </div>
        </div>
      </div>

    </> 
  )                    
}

export default MyWork