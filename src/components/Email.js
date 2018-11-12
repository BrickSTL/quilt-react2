import React from 'react';

const EmailLine = () => (
  <div className="container-fluid email-line">
      <div className="holder">
        <div className="col"></div>
        <div className="emailer col-4 p-3">
        <span>DON'T MISS A BRIEF. SIGN UP FOR OUR DAILY EMAIL.</span>
      </div>
        <div className="form-group col-4 mx-5">
          <div className="row justify-content-center">
          <label className=" text-center">Enter Email</label>
          </div>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="btn col" id="email-button">
          <i className="fa fa-arrow-right"></i>
        </div>
        <div className="col"></div>
      </div>
      <div className="row background-div">
        <div className="col-md-3 background-div-lightblue"></div>
        <div className="col-md-4 background-div-purple"></div>
        <div className="col-md-1 background-div-magenta"></div>
        <div className="col-md-2 background-div-peach"></div>
        <div className="col-md-2 background-div-red"></div>
      </div>
  </div>
);

export default EmailLine;
