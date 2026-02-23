import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    //{/**
    // <div className="flex justify-around items-center">
    //  <div>
    //    <h1>
    //      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, at?
    //    </h1>
    //    <button className="btn btn-primary"> TEST</button>
    //  </div>
    //  <div>
    //    <img src={bookimage} alt="" srcset="" />
    //  </div>
    //</div>
    // */}
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookimage} />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
