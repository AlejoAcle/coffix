import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0  container mx-auto p-6 flex flex-wrap  md:flex-row items-center justify-between font-black">
        <div className="grid grid-cols-10 gap-8 px-4 py-1 md:grid-cols-4">
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

          <div className="flex -mx-6">
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
