import React from "react";
import Link from "next/link";
export default function Header2() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 3,
        boxSizing: "border-box",
        background: "white",
      }}>
      {" "}
      <nav id="header2" className="d-flex justify-content-center py-1 px-2 ">
        <div id="navbar1" className="border-bottom">
          <ul className="list-unstyled d-flex gap-3 py-2 ">
            <Link className="btn text-success" href="/" prefetch={true}>
              {" "}
              Home
            </Link>
            <li>
              <Link className="btn text-success" href="/about" prefetch={true}>
                {" "}
                About
              </Link>{" "}
            </li>

            <li>
              <Link className="btn text-success" href="/contact" prefetch={true}>
                {" "}
                Contact
              </Link>
            </li>
            <li>
              <a href="/">
                <i className="fa-solid fa-magnifying-glass text-black pt-3" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
