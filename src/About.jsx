import { NavLink } from "react-router-dom";
import del2 from "./zomato.png";
// import del1 from "./swiggy.png";
import del3 from "./insta.png";
import del4 from "./fb.png";
import del5 from "./tele.png";

const About = () => {
  return (
    <>
      <section id="about" className=" d-flex align-items-center ">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-11 mx-auto  d-flex align-items-center">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 className="text-center">
                    We are here to serve you anytime
                    <br />
                    <strong className="brand-name">24/7</strong>
                  </h1>
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <h2 className="my-3">We are available on :</h2>
                    <div className="d-flex align-items-center justify-content-center">
                      <a href="https://www.swiggy.com" target="_blank">
                        <img
                          src="images/swiggy.png"
                          className="d-block w-100"
                          alt="err"
                        />
                      </a>
                      <a href="https://www.zomato.com" target="_blank">
                        <img src={del2} className="d-block w-100" alt="err" />
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <h2 className="my-3">Follow Us on :</h2>
                    <div className="d-flex align-items-center justify-content-center">
                      <a href="https://www.instagram.com" target="_blank">
                        <img src={del3} className="d-block w-100" alt="err" />
                      </a>
                      <a href="https://www.facebook.com" target="_blank">
                        <img src={del4} className="d-block w-100" alt="err" />
                      </a>
                      <a href="https://www.telegram.org" target="_blank">
                        <img src={del5} className="d-block w-100" alt="err" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-3  d-flex justify-content-center">
                    <NavLink
                      to="menu"
                      className="btn btn-lg btn-primary "
                      role="button"
                    >
                      Order Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img
                    src="	https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
                    alt="err"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
