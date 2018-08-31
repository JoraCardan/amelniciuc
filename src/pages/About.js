import React from 'react';

import Icon from '../atoms/Icon';
import aboutImage from '../assets/images/image.jpg'
import pdfCV from '../assets/downloads/CV-Alexandra-Melniciuc.pdf'

const About = () => (
  <section className="about">
    <h1 className="title">A little about myself.</h1>
    <p className="content">
      Every project I work on is done with passion &mdash;<br/>
      passion for design.
    </p>
    <div className="about__image">
      <img src={aboutImage}  alt="Group photo at Generator hackaton" />
    </div>

    <div className="about__cols">
      <div className="about__col-left"></div>
      <div className="about__col-right">
        <p>I’m an UI/UX Designer that currently lives in the Netherlands with 3 years experience.</p>
        <p>I collaborate with many digital agencies and individual clients.</p>
        <p>Love to attend conferences, meetups and workshops to become a better designer. </p>
      </div>
    </div>
    <hr />
    <div className="about__cols">
      <div className="about__col-left">
        <h2>Experience</h2>
      </div>
      <div className="about__col-right">
        <div className="about__period">May 2017 – Now</div>
        <div className="about__desc">UI/UX Designer, <strong>Freelancer</strong></div>

        <div className="about__period">Feb 2016 – May 2017</div>
        <div className="about__desc">UI Designer, <strong>FloAgency</strong></div>

        <div className="about__period">May 2015 – Feb 2016</div>
        <div className="about__desc">UI/UX Designer, <strong>SensMedia</strong></div>

        <div className="about__period">May 2015 – Feb 2016</div>
        <div className="about__desc">Summer Intern UI Designer, <strong>Spark Research Labs</strong></div>
      </div>
    </div>
    <hr />

    <div className="about__cols">
      <div className="about__col-left">
        <h2>Skills</h2>
      </div>
      <div className="about__col-right">
        <div className="col-half">Web Design</div>
        <div className="col-half">Illustration</div>
        <div className="col-half">Mobile Design</div>
        <div className="col-half">Social Media Design</div>
        <div className="col-half">User Experience</div>
        <div className="col-half">Ebooks Design</div>
        <div className="col-half">Branding</div>
        <div className="col-half">Logo</div>
      </div>
    </div>
    <hr />

    <div className="about__cols">
      <div className="about__col-left">
        <h2>Tools</h2>
      </div>
      <div className="about__col-right">
        <div className="about__period">2018</div>
        <div className="about__desc">Scrum Course, <strong>Bizboard.</strong></div>

        <div className="about__period">2017</div>
        <div className="about__desc">Sprint Design Workshop, <strong>AJSmart.</strong></div>
        <div className="about__desc">Introduction to HTML and CSS,  <strong>Codeacademy Courses.</strong></div>
        <div className="about__desc">Introduction to Calligraphy Course, <strong>43'OZ.</strong></div>

        <div className="about__period">2016</div>
        <div className="about__desc">Digital Design Course, <strong>FloAgency.</strong></div>

        <div className="about__period">2011 – 2015</div>
        <div className="about__desc">Bachelor of Engineering, System & Computer Engineering, <strong>Technical University of Moldova.</strong></div>
      </div>
    </div>
    <hr />

    <div className="about__cols">
      <div className="about__col-left">
        <h2>Side Activities</h2>
      </div>
      <div className="about__col-right">
        <div className="about__period">2018</div>
        <div className="about__desc">Volunteer, The Next Web Conference.</div>

        <div className="about__period">2017</div>
        <div className="about__desc">Design Mentor, Rockstart "Shell Smart Energy Program".</div>

        <div className="about__period">2015</div>
        <div className="about__desc">Participant (Designer), Smart City Hackaton Chisinau, MD.</div>
        <div className="about__desc">Volunteer (Graphic Designer), TEDx Chisinau, MD.</div>

        <div className="about__period">2014</div>
        <div className="about__desc">Participant (Designer), Startup Weekend Chisinau, MD.</div>
      </div>
    </div>

    <div className="about__pdf">
      <a href={pdfCV} download>Download my curriculum vitae .pdf version here <Icon name="arrow_down" color="white"/></a>
    </div>
  </section>
);

export default About;
