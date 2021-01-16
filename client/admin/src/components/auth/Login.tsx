import React from "react";

const Login: React.FC = () => {
  return (
    <div
      className="content  d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      {/*begin::Subheader*/}
      <div
        className="subheader py-2 py-lg-6  subheader-transparent "
        id="kt_subheader"
      ></div>
      {/*end::Subheader*/}
      {/*begin::Entry*/}
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container col-md-4">
          {/*begin::Card*/}
          <div className="card card-custom gutter-b example example-compact">
            <div className="card-header">
              <h3 className="card-title">Login | Admin Panel</h3>
              <div className="card-toolbar"></div>
            </div>
            {/*begin::Form*/}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="card-footer text-right">
                <button type="reset" className="btn btn-primary mr-2">
                  Login
                </button>
              </div>
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Card*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Entry*/}
    </div>
  );
};

export default Login;
