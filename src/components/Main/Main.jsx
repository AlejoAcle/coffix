import React from "react";

export default function Main() {
  return (
    <div>
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-2xl lg:text-5xl text-primary uppercase mb-7">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl text-primary font-black uppercase mb-8">
          Coffix
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12  bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          Enjoy our Coffee
        </div>

        <div className=" lg:text-l  lg:py-0 w-fit mx-auto mb-5 rounded-full">
          Subscribe to our newsletter
        </div>

        <form action="" method="post" target="_blank">
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="Ex. name@domain.com"
              type="email"
              name="member[email]"
              className="text-lg md:text-2x1 placeholder:text-gray-400
        placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg_white
        bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full
        md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0"
            />

            <input
              type="submit"
              value="Join today"
              className="bg-secondary rounded-full md:rounded-tl-none
      md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6
      lg:px-12 cursor-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">
            By subscribing, you agree with Revue´s Terms
            <p>of Service and Privacy Policy.</p>
          </div>
        </form>
      </main>
    </div>
  );
}
