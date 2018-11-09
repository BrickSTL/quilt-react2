import React from 'react';

const Header = () => (
  <header className="header container-fluid px-0 mr-0 mb-md-5">
    <div className='row'>
      {/*RIGHT SIDE LOGO*/}
      <div className="col-md-5">
        <div className="desk-header-right">
          <h1 className="desk-logo">QUILT</h1>
          <hr  />
          <span>News - Policy - Opinion</span>
        </div>
      </div>
      {/*SPACE HOLDER*/}
      <div className="col-md">
      </div>
      {/*FILTER HOLDER*/}
      <div className="col-md-6 d-md-block pt-3 px-0 " id="filtercol">
        <div className="row justify-content-evenly">
          <div className="col-md-6 col-sm text-center p-0">
            <div  className="filter-box">
              <div className="row instructions-mobile-2 row d-md-none instructions-mobile-2">
                <p id="instructions-line-2"><span className="d-md-none">Select source filter</span></p>
              </div>
              <h5 className="desktop-filters"> - Select Source Filter-</h5>
              <div className="text-left">
                <div className="filters filter-button-group">
                  <ul className="desktop-filters">
                    <li className="active" data-filter="*">
                      <input type="checkbox" id="c1" name="cc"/><label for="c1"><span></span>All</label>
                    </li>
                    <li data-filter=".newsArticle">
                      <input type="checkbox" id="c2" name="cc" /><label for="c2"><span></span>News Article</label>
                    </li>
                    <li data-filter=".opinion">
                      <input type="checkbox" id="c3" name="cc" /><label for="c3"><span></span>Opinion</label>
                    </li>
                  </ul>
                  <ul className="mobile-filters">
                    <li className="active" data-filter="*">
                      <input type="checkbox" id="c1" name="cc"/><label for="c1"><span></span>All</label>
                    </li>
                    <li data-filter=".newsArticle">
                      <input type="checkbox" id="c2" name="cc" /><label for="c2"><span></span>News Article</label>
                    </li>
                    <li data-filter=".opinion">
                      <input type="checkbox" id="c3" name="cc" /><label for="c3"><span></span>Opinion</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 row-sm px-0">
            <h5 className="desktop-filters"> - Select Political Bias by Color - </h5>
            <div className=" row">
              <span className="bias bias-lib">Liberal</span>
              <div className="col-md p-0">
                <div className="container-fluid fade-box">
                  <div className='holer'>
                      <div className="button-group filters-button-group">
                        <div className="row">

                          <div className="col fade-check">
                            <button className="button red1" data-filter=".red1">r1</button>
                          </div>
                          <div className="col fade-check">
                            <button className="button red2" data-filter=".red3">r3</button>
                          </div>
                          <div className="col fade-check" id="red4">
                            <button className="button red3" data-filter=".red4">r4</button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col fade-check">
                            <button className="button blue1"  data-filter=".blue1">b1</button>
                          </div>
                          <div className="col fade-check">
                            <button className="button purple" data-filter=".purple1">p0</button>
                          </div>
                          <div className="col fade-check">
                            <button className="button red2" data-filter=".red2">r2</button>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col fade-check">
                              <button className="button blue4" data-filter=".blue4">b4</button>
                            </div>
                            <div className="col fade-check">
                              <button className="button blue3" data-filter=".blue3">b3</button>
                            </div>
                            <div className="col fade-check">
                              <button className="button blue2" data-filter=".blue2">b2</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row instructions-mobile mt-4">
                  <p id="instructions-line"><span className="d-md-none">Select political bias by color</span></p>
                </div>
                <div className="button-group fade-box-mobile filters-button-group row">
                 <div className="col fade-check" id="blue4">
                   <button className="button" data-filter=".blue4" id="blue4">b4</button>
                 </div>
                 <div className="col fade-check" id="blue3">
                   <button className="button" data-filter=".blue3" id="blue3">b3</button>
                 </div>
                 <div className="col fade-check" id="blue2">
                    <button className="button" data-filter=".blue2" id="blue2">b2</button>
                 </div>
                 <div className="col fade-check" id="blue1">
                   <button className="button"  data-filter=".blue1" id="blue1">b1</button>
                 </div>
                 <div className="col fade-check" id="purple1">
                   <button className="button" data-filter=".purple1" id="purple1">p0</button>
                 </div>
                 <div className="col fade-check" id="red1">
                    <button className="button" data-filter=".red1" id="red1">r1</button>
                  </div>
                 <div className="col fade-check" id="red2">
                   <button className="button" data-filter=".red2" id="red2">r2</button>
                 </div>
                 <div className="col fade-check" id="red3">
                    <button className="button" data-filter=".red3" id="red3">r3</button>
                  </div>
                 <div className="col fade-check" id="red4">
                     <button className="button" data-filter=".red4" id="red4">r4</button>
                   </div>
               </div>
              </div>
              <span className="bias bias-con">Conservative</span>
            </div>
          </div>
        </div>
      </div>
      {/*SPACE HOLDER*/}
      <div className="col-md">
      </div>
    </div>
  </header>
);

export default Header;
