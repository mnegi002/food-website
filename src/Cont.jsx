import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const changeEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your name is ${data.fullname}. Phone No. is ${data.phone}. MailId is ${data.email}. Messsage is ${data.msg}.
    Submitted Successfully. `);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  name="fullname"
                  value={data.fullname}
                  onChange={changeEvent}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Phone No.</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={changeEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter Mobile"
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={changeEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={changeEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-outline-primary " type="submit">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
