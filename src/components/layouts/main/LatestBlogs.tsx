import React from "react";

const LatestBlog = () => {
  return (
    <section className="latest-blog mt-5">
      <div className="row blog-title clearfix">
        <div className="col-12">
          <span>
            <h5>
              <b>Latest Blog</b>
            </h5>
            <a href="#">see more</a>
          </span>
        </div>
      </div>
      <div className="row blogs">
        <div className="col-sm-12 col-lg-6 col-xs-12">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <img
                src={require("../../../images/new_arrval.png")}
                alt="blog image"
                width="100%"
              />
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <p className="date-1">19 Jan 2019</p>
              <h5 className="heading-2">
                Leap Motion review: A glimpse into the future
              </h5>
              <p className="paragraph-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <button className="primary-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-xs-12">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <img
                src={require("../../../images/new_arrval.png")}
                alt="blog image"
                width="100%"
              />
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <p className="date-1">19 Jan 2019</p>
              <h5 className="heading-2">
                Leap Motion review: A glimpse into the future
              </h5>
              <p className="paragraph-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <button className="primary-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
