import React from 'react';

const Header = () => (
  <header className="header container-fluid">
    <div className='row'>
    {/*LOGO*/}
      <div className="col-md-5">
        <div className="desk-header-right">
          <h1 className="desk-logo">
            <span style={{"color": "#4600FF"}}>Q</span>
            <span style={{"color": "#4F00CF"}}>U</span>
            <span style={{"color": "#90007F"}}>I</span>
            <span style={{"color": "#C50044"}}>L</span>
            <span style={{"color": "#FF0000"}}>T</span>
          </h1>
          <hr  />
          <span style={{"color": "#172893"}}>News - Policy - Opinion</span>
        </div>
      </div>
      {/*SPACE HOLDER - Left*/}
      <div className="col-md">
      </div>
      {/*FILTERS*/}
      <div className="col-md-6 d-md-block px-0 ">
        <div className="row justify-content-evenly">
          {/*Source*/}
          <div className="filter-box col-md-6 col-sm p-0">
            {/*Mobile Source instructions line*/}
            <div className="row d-md-none">
              <p id="instructions-line-2"><span className="d-md-none">Select source filter</span></p>
            </div>
            {/*Desktop Source instructions line*/}
            <h5 className="desktop-filters"> - Select Source Filter-</h5>
            {/*Desktop and Mobile Source Filters*/}
            <div className="text-left">
              {/*Desktop Source Filters*/}
              <ul className="desktop-filters">
                <li>
                  <input type="checkbox" id="c1"/><label for="c1"><span></span>All</label>
                </li>
                <li>
                  <input type="checkbox" id="c2"/><label for="c2"><span></span>News Article</label>
                </li>
                <li>
                  <input type="checkbox" id="c3"/><label for="c3"><span></span>Opinion</label>
                </li>
              </ul>
              {/*Mobile Source Filters*/}
              <ul className="mobile-filters">
              <li>
                <input type="checkbox" id="c1"/><label for="c1"><span></span>All</label>
              </li>
              <li>
                <input type="checkbox" id="c2"/><label for="c2"><span></span>News Article</label>
              </li>
              <li>
                <input type="checkbox" id="c3"/><label for="c3"><span></span>Opinion</label>
              </li>
              </ul>
            </div>
          </div>
          {/*Bias Color Filter*/}
          <div className="col-md-5 row-sm px-0">
            {/*Desktop Bias Instructions*/}
            <h5 className="desktop-filters"> - Select Political Bias by Color - </h5>
            {/*Bias Color Shades Box*/}
            <div className=" row">
              {/*Desktop Lib Verticle Line*/}
              <span className="bias bias-lib">Liberal</span>
              {/* Desktop Colors*/}
              <div className="col-md p-0">
                <div className="container-fluid fade-box">
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
                {/*Mobile Bias Instructions*/}
                <div className="row instructions-mobile mt-4">
                  <p id="instructions-line"><span className="d-md-none">Select political bias by color</span></p>
                </div>
                {/*Mobile Colors*/}
                <div className="button-group fade-box-mobile row">
                 <div className="col fade-check">
                   <button className="button blue4">b4</button>
                 </div>
                 <div className="col fade-check">
                   <button className="button blue3">b3</button>
                 </div>
                 <div className="col fade-check">
                    <button className="button blue2">b2</button>
                 </div>
                 <div className="col fade-check">
                   <button className="button blue2">b1</button>
                 </div>
                 <div className="col fade-check">
                   <button className="button purple">p0</button>
                 </div>
                 <div className="col fade-check">
                    <button className="button red1">r1</button>
                  </div>
                 <div className="col fade-check">
                   <button className="button red2">r2</button>
                 </div>
                 <div className="col fade-check">
                    <button className="button red3">r3</button>
                  </div>
                 <div className="col fade-check">
                     <button className="button red4" data-filter=".red4" id="red4">r4</button>
                  </div>
               </div>
              </div>
              {/*Desktop Con Verticle Line*/}
              <span className="bias bias-con">Conservative</span>
            </div>
          </div>
        </div>
      </div>
      {/*SPACE HOLDER - Right*/}
      <div className="col-md">
      </div>
    </div>
  </header>
);

export default Header;
