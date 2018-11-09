import React from 'react';

const Footer = () => (
  <div className ="page-footer" >
      <div className="row footer-content mx-0 mt-md-5 mb-md-5">
        <div className="col-md-2 ml-md-5">
          <div className="footer-logo text-center">
            <h2><span>Q</span><span>U</span><span>I</span><span>L</span><span>T</span><span></span></h2>
            <hr/>
            <div className="row">
              <div className="ball ball1"></div>
              <div className="ball ball2"></div>
            </div>
            <div className="row">
              <div className="ball ball3"></div>
              <div className="ball ball4"></div>
            </div>
          </div>
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-4 mid-foot-box p-0">
          <div className="row">
            <div className="col p-0">
              <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo">News</button>
              <div id="demo" className="collapse show">
                <ul className="footer-links">
               <li><a href="#">Senate</a></li>
               <li><a href="#">House</a></li>
               <li><a href="#">Campaign</a></li>
            </ul></div>
            </div>
            <div className="col p-0">
              <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo2">Policy</button>
              <div id="demo2" className="collapse">
                <ul className="footer-links">
                  <li><a href="#">Defense</a></li>
                  <li><a href="#">Environment</a></li>
                  <li><a href="#">Finance</a></li>
                </ul>
              </div>
            </div>
            <div className="col p-0">
              <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo3">Opinion</button>
          <div id="demo3" className="collapse">
            <ul className="footer-links">
             <li><a href="#">Columnists</a></li>
             <li><a href="#">Reports</a></li>
             <li><a href="#">Editorials</a></li>
            </ul>
           </div>
            </div>
          </div>
        </div>
        <div className="col-md">
        </div>
      </div>
    <div className="row pt-4 footer-copyright-row">
      <div className="footer-copyright col px-md-4 p-sm-0"><span>© 2018 :
        <a className="font-weight-light" href="http://benmerrill.biz/"> Ben Merrill Design</a></span>
      </div>
      <div className="col text-right desk-contact-ads">
        <ul className="contact-ads p-md-0">
         <li><a href="#">Contact</a></li>
         <li><a href="#">Ads</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
