import logo1 from "./dal-naan.jpg";
import logo2 from "./thali.jpg";
import logo3 from "./chaap.jpg";

const Carousel = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={logo1} className="d-block w-100" alt="err" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>North Indian</h5>
                      <p>Because food brings us together.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={logo2} className="d-block w-100" alt="err" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Combo Thali</h5>
                      <p>For the best taste of us.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={logo3} className="d-block w-100" alt="err" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Spicy</h5>
                      <p>Evergreen Mouth Watering.</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Carousel;
