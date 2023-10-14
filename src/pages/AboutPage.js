import React from "react";

import "../styles/pages/About.css";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="page_header">
        <h1 className="header">Meet The Creative Minds Behind</h1>
        <p>
          Welcome to the about page of Coin WAVE. We are thrilled to introduce
          the creative minds and passionate individuals who have come together
          to make this website a reality. Our team consists of three dedicated
          members who each bring a unique set of skills and experiences to the
          table.
        </p>
      </div>

      <div className="TeamMembers">
        <div className="member">
          <h1>The Visionary</h1>
          <p>
            Quang Minh Phan is the visionary thinker of our team. With a
            background in Management and Planning, excel at brainstorming
            innovative ideas and turning them into actionable plans.
          </p>
        </div>

        <div className="member">
          <h1>The coding master</h1>
          <p>
            Adrian Chai is the technical powerhouse responsible for the smooth
            functioning of Coin WAVE. With a background in Programming, turn
            concepts and designs into functional code.
          </p>
        </div>

        <div className="member">
          <h1>The Designer</h1>
          <p>
            Samuditha Kavishka's artistic flair and design expertise breathe
            life into Coin WAVE With a passion for Designing, ensure that our
            website is not only functional but also visually captivating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
