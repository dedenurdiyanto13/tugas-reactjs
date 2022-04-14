import React from "react";

const Footer = () => {
  return (
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          {/* <!-- Footer Location--> */}
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="mb-4">Location</h4>
            <p class="lead mb-0">
              Majalengka
              <br />
              West Java - 45453
            </p>
          </div>
          {/* <!-- Footer Social Icons--> */}
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="mb-4">Visit Me on</h4>
            <a class="btn-sosmed btn-outline-light btn-social mx-1" href="#!">
              <i class="fab fa-fw fa-facebook-f"></i>
            </a>
            <a class="btn-sosmed btn-outline-light btn-social mx-1" href="#!">
              <i class="fab fa-fw fa-twitter"></i>
            </a>
            <a class="btn-sosmed btn-outline-light btn-social mx-1" href="#!">
              <i class="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a class="btn-sosmed btn-outline-light btn-social mx-1" href="#!">
              <i class="fab fa-fw fa-dribbble"></i>
            </a>
          </div>
          {/* <!-- Footer About Text--> */}
          <div class="col-lg-4">
            <h4 class="mb-4">About Me</h4>
            <p class="lead mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus eros tortor, at luctus nisi fermentum quis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
