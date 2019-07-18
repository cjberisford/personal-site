import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <strong>
            Hello, I'm Chris. I study Computer Science at the University of
            Sheffield.
          </strong>
        </h3>

        <p>
          But does that define me? Absolutely n- well, probably. In a
          professional sense at least. But this is not a professional website,
          oh lord, no. (If you're a recruiter reading this then ignore the
          previous sentence, it totally is, and you will want to go{" "}
          <a href="#skills">here</a>)
        </p>
        <p>
          In my spare time I love playing the piano, and this website is a
          result of blending my two main passions together; showcasing my
          ability to design and build websites, and play the piano. You might
          think "is that useful?", and the answer is "not especially".
        </p>
        <p>
          I have authored lots of digital content over the years, and almost all
          of it - the good and the bad - has been consigned to history by
          obsolescence of the machine it resided on. This website, then, is an
          archive of my creative output, i.e. an accumulation of the stuff that
          is still going strong. Hopefully some of it has some value to you, but
          I wouldn't be surprised if it didn't. That's not a problem though!
          It's all part of a learning process.
        </p>
        <p>
          <i>
            Oh, on the off chance you happen to have something I've lost
            (particularly my RPG Maker masterpieces), I would be grateful if you
            would get in touch.
          </i>
        </p>
        <p id="skills">
          So, the technical stuff. Right now you're on a page built in React
          running on Node.js. Fascinating, I know. My challenge is to branch
          into back-end development, using this site somehow. Other skills
          include:
        </p>
        <ul>
          <li>Java/Ruby/C# programming experience</li>
          <li>HTML/CSS/JavaScript</li>
          <li>Git version control</li>
        </ul>
        <p>
          Don't just take my word for it though, head over to my projects page
          to check out what I've done.
        </p>
      </div>
    );
  }
}

export default Home;
