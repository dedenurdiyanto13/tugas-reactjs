import React from "react";

const Masthead = () => {
  return (
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img
          class="masthead-avatar mb-5"
          src="assets/img/profile.svg"
          alt="..."
        />
        {/* <!-- Masthead Heading--> */}
        <h1 class="masthead-heading mb-3">Dede Nurdiyanto</h1>

        {/* <!-- Masthead Subheading--> */}
        <p class="masthead-subheading font-weight-light mb-0">
          MERN Developer - UI/UX Designer - Graphic Designer
        </p>
      </div>
    </header>
  );
};

export default Masthead;
