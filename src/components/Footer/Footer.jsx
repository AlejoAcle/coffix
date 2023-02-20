import React from "react";

export const Footer = () => {
  return (
    <div >
      <footer className=" bottom-0  container mx-auto p-1 flex flex-wrap justify-between  font-black">
        <div className="flex container mx-auto p-8 flex flex-wrap justify-between  font-black">
          <p>
            Build with{" "}
            <box-icon
              name="bowl-hot"
              rotate="90"
              animation="tada"
              color="#3d1e0a"
            ></box-icon>{" "}
            by Alejo{" "}
          </p>
          {/* <div>
            
          </div>
          <div>
            
          </div> */}

          <div className="flex mx-7">
            <a
              href="#"
              className="font-black mx-3 hover:opacity-80 duration-150"
            >
              {" "}
              About us
            </a>
            <a
              href="#"
              className="font-black mx-3 hover:opacity-80 duration-150"
            >
              {" "}
              Privacy
            </a>
            <a
              href="#"
              className="font-black mx-3 hover:opacity-80 duration-150"
            >
              {" "}
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
