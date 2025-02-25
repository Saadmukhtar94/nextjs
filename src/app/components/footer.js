import React from 'react'
// import FooterMap from  './images/FooterMap.png';
import Link from 'next/link'

export default function () {
  return (
    <div>
        <section id="footer" className='bg-success text-light'>
  <footer className="py-5 container-fluid">
    <div className="row">
      <div className="col-md-4 offset-md-1 mb-3">
        <form>
          <h3>About Website</h3>
          <p>
            Welcome  in New York. Website
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat.
          </p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2 fs-1">
            <img
            //   src={FooterMap}
              className="object-fit-contain "
              id="footer-map"
              alt=""
            />
            <h5>Check on google map</h5>
          </div>
        </form>
      </div>
      <div className="col-md-3  mb-3">
        <h3>Explore</h3>
        <ul className="list-unstyled  footer-ul fw-bold">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Rooms &amp; Suites</a>
          </li>
          <li>
            <a href="#">Restaurant</a>
          </li>
          <li>
            <a href="#">Spa &amp; Wellness</a>
          </li>
          <li>
            <a href="#">About Hotel</a>
          </li>
          <li>
            <Link className="" href="/about">
                {" "} About
              </Link>            </li>
        </ul>
      </div>
      <div className="col-md-4  mb-3">
        <h3>Contact</h3>
        <ul className="list-unstyled  footer-ul">
          <li>
            <p className="w-50 mt-2">
              1616 Broadway NY, New York 10001 United States of America
            </p>
          </li>
          <li>
            <a href="#" className="fw-medium fs-3 mt-3 p">
              <i className="fa-solid fa-phone-volume mx-" /> 855 100 4444
            </a>
          </li>
          <li>
            <a href="#" className="fw-light fs-4">
              info@hoteladmin
            </a>
          </li>
          <li>
            <a href="#">
              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <i className="fa-brands fa-facebook-f fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-twitter fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-behance fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin fs-5" />
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-center py-4 mt-4 border-top">
      <p className="fw-bold">© 2024 Travelli @ All Rights Reserved.</p>
    </div>
  </footer>
</section>

    </div>
  )
}
