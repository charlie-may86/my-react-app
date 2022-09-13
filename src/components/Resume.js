import React from "react";
import headshot from "./images/ChasHeadShot.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <div className="headerImage">
          <img
            src={headshot}
            alt="Charlie Head Shot"
            className="headshot"
          ></img>
        </div>
        <div className="intro">
          <h1>Charlie May</h1>
          <p>
            I am a Full Stack Web Developer. I love coffee, doing averagly at
            endurances races, and my dogs.
          </p>
        </div>
      </header>
      <div className="Eduaction">
        <h2>Education</h2>
        <div className="company">
          <h3 className="school">University of Nebraska at Omaha</h3>
          <p className="degree">
            Bachelor of Science in Business Administration
          </p>
          <p>Graduation Date August 2016</p>
        </div>
        <br />
        <div className="company">
          <h3 className="school">Bloomtech</h3>
          <p className="degree">Fullstack Software Engineer</p>
          <p>Graduation Date August 2022</p>
        </div>
      </div>
      <div className="technicalSkills">
        <h2>Technical Skills</h2>
      </div>
      <div className=" Work">
        <h2>Work Experience</h2>
        <div className="company">
          <p className="company name ">Fiserv, Omaha, NE</p>
          <p>January 2019 - Present</p>
        </div>
        <hr size="3" noshade />
        <p className="title">Project Manager</p>
        <p>
          ● Reengineered incentive program to save $500,000+ while increasing
          output run rates 8%
        </p>
        <p>
          ● Leveraged Microsoft Excel and its programing language to create a
          data model to manage the incentive program{" "}
        </p>
        <p>
          ● Created Last-Mile Program which saved 632 operator hours and
          generated 2,370,271 additional mail sets in the first two months
        </p>
        <br />
        <div className="company">
          <p className="company name">Nebraska Furniture Mart, Omaha, NE</p>
          <p>May 2018 - January 2019</p>
        </div>
        <hr size="3" noshade />
        <p className="title">SalesPerson</p>
        <p>
          ● Sold 25.62% more product than the average furniture salesperson
          during the first six months
        </p>
        <p>
          ● Sold 44.67% more add-on products than the average furniture
          salesperson during the first six months
        </p>
        <p>
          ● Generated more sales in the first month than any previous
          salesperson
        </p>
        <br />
        <div className="company">
          <p className="company name">Securities America, LaVista, NE </p>
          <p>February 2016 - October 2016</p>
        </div>
        <hr size="3" noshade />
        <p className="title">Due Diligence Analyst</p>
        <p>
          ● Built financial models for $240 million in private equity real
          estate deals
        </p>
        <p> ● Analyzed and reviewed $160 million in oil and gas deals</p>
        <p>
          ● Reviewed over 400 mutual fund prospectuses and found previously
          unknown fee waivers, saving clients millions
        </p>
      </div>
      <br />
      <div className="Entreprnuership">
        <h2>Entrepreneurship </h2>
        <div className="company">
          <p className="company name">Storkwear</p>
          <p>May 2016 - January 2019</p>
        </div>
        <hr size="3" noshade />
        <p className="title">Founder</p>
        <p>
          ● Raised a family and friends round of money and built out a baby
          clothes subscription company
        </p>
        <p>
          ● Overcame lack of technical skill in founding team by making a deal
          with a local developer to build storkwear.com
        </p>
        <p>● Managed the budget and team that built storkwear.com</p>
        <p>
          ● Worked with Drip and Instapage to build automated sales funnel
          around weekly content for pregnant moms
        </p>
        <p>
          ● Purchased clothes, built an inventory system, branded the company,
          built a distribution system
        </p>
        <p>● Eventually ran out of money and closed up shop</p>
      </div>
      <br />
      <div className="miliatry">
        <h2>Military Service</h2>
        <div className="company">
          <p className="company name">United States Air Force</p>
          <p>October 2006 - October 2010</p>
        </div>
        <hr size="3" noshade />
        <p className="title">Aerospace Medical Technician (Medic)</p>
        <p>
          ● Lead inbound and outbound air evacuation missions from the wars in
          Iraq and Afghanistan
        </p>
        <p>
          ● Trained new medics as they joined the air evacuation team in
          evacuation procedures and advanced wound care
        </p>
        <p>
          ● Became first senior airmen (E-4) to be named lead trainer for the
          Honor Guard at Joint Base Andrews
        </p>
      </div>
    </div>
  );
};

export default Resume;
