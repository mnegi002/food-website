import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <NavLink to="" className="btn btn-primary">
              Add to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
