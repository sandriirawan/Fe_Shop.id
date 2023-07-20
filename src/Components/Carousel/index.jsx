import React from 'react'
import carousell1 from '../../Assets/img/corousell/Card Promotion.png';
import carousell2 from '../../Assets/img/corousell/Card Promotion2.png';




function Carousel () {
  return (
    <>
    {/* corousel */}
    <div className="container">
      <div className="row pt-3">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active col-12">
              <img
                src={carousell1}
                className="w-100"
                alt="Promotion"
              />
            </div>
            <div className="carousel-item col-12">
              <img
                src={carousell2}
                className="w-100"
                alt="Promotion2"
              />
            </div>
            <div className="carousel-item col-12">
              <img
                src={carousell1}
                className="w-100"
                alt="Promotion"
              />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* end corousel */}
  </>
  
  )
}

export default Carousel 