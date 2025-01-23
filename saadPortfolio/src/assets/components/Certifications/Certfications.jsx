import React from "react";
import ReactCertification from "../img/front-end-development-with-react-v2.1.png";
import SoftwareEngineeringCertification from "../img/software-engineering-essentials.png";
import StartingWeb from "../img/getting-started-with-front-end-and-web-development.png";
import CertificationComponent from "./CertificationComponent";
import BootstrapCertification from "../img/developing-websites-and-front-ends-with-bootstrap.png";
import GitCertification from "../img/git-and-github-essentials.1.png";
import HtmlCertification from "../img/Coursera 56QPC4UPCC7Q_page-0001.jpg";
const Certfications = () => {
  const dataset = [
    {
      image: ReactCertification,
      link: "https://www.coursera.org/account/accomplishments/verify/RD5A5G9J7HAT",
      title: "React Js Certification",
    },

    {
      image: SoftwareEngineeringCertification,
      link: "https://www.coursera.org/account/accomplishments/verify/WPS6ZDYGMD2Z",
      title: "Software Engineering Certification",
    },
    {
      image: StartingWeb,
      link: "https://www.coursera.org/account/accomplishments/verify/U92UZKBVTYWA",
      title: "Getting Started with Frontend Web Development",
    },
    {
      image: BootstrapCertification,
      link: "https://www.coursera.org/account/accomplishments/verify/LPL58A55PD7X",
      title: "Developing Websites and Front-Ends with Bootstrap",
    },
    {
      image: GitCertification,
      link: "https://www.coursera.org/account/accomplishments/verify/UV3NWT32AE37",
      title: "Git and GitHub Essentials",
    },
    {
      image: HtmlCertification,
      link: "https://www.coursera.org/account/accomplishments/verify/56QPC4UPCC7Q",
      title: "Introduction to HTML, CSS, & JavaScript",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center" id="certification">
        Certifications
      </h1>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        {dataset.map((item) => {
          return (
            <>
              <div className="col col-lg-4  m-auto my-2">
                <CertificationComponent
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Certfications;
