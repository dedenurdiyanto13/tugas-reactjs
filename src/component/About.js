import React from "react";

const About = () => {
  return (
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        {/* <!-- About Section Heading--> */}
        <h2 class="page-section-heading text-center text-white">About Me</h2>

        {/* <!-- About Section Content--> */}
        <div class="row mt-5">
          <div class="col-lg-4 ms-auto">
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus eros tortor, at luctus nisi fermentum quis. Aliquam porta
              finibus augue eget rutrum. Quisque laoreet odio a massa euismod
              rutrum. Cras non felis eget lorem venenatis sagittis. Etiam vel
              felis augue. Integer et arcu vel ligula convallis tincidunt. Donec
              consequat dolor a ipsum dapibus, ut facilisis erat vestibulum.
            </p>
          </div>
          <div class="col-lg-4 me-auto">
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus eros tortor, at luctus nisi fermentum quis. Aliquam porta
              finibus augue eget rutrum. Quisque laoreet odio a massa euismod
              rutrum. Cras non felis eget lorem venenatis sagittis. Etiam vel
              felis augue. Integer et arcu vel ligula convallis tincidunt. Donec
              consequat dolor a ipsum dapibus, ut facilisis erat vestibulum.
            </p>
          </div>
        </div>
        {/* <!-- About Section Button--> */}
        <div class="text-center mt-4">
          <a
            class="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/theme/freelancer/"
          >
            <i class="fas fa-download me-2"></i>
            Download CV!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
