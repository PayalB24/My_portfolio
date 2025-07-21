import { Link, useLocation } from 'react-router-dom';

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '100px 20px',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#A855F7',
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          I'm <strong>Payal Borde</strong>, a Computer Engineering student passionate about full-stack development and data analytics.
          I enjoy building dynamic web applications using <strong>React</strong>, <strong>Flask</strong>, and <strong>MySQL</strong>.
          I also explore <strong>Machine Learning</strong> and <strong>Data Science</strong> to derive insights from data and solve real-world problems.
        </p>
        <br />
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          {/* Engineering Card */}
          <div style={{ ...educationCardStyle1 }}>
            <h4 style={titleStyle}>Engineering</h4>
            <ul style={ulStyle}>
              <li>B.E. in Computer Engineering</li>
              <li>Sanjivani College of Engineering, Kopargaon</li>
              <li>Savitribai Phule Pune University</li>
              <li>2021 – 2025 (Expected)</li>
            </ul>
          </div>

          {/* HSC Card */}
          <div style={{ ...educationCardStyle }}>
            <h4 style={titleStyle}>HSC (12th)</h4>
            <ul style={ulStyle}>
              <li>Maharashtra State Board</li>
              <li>Science Stream</li>
              <li>Passed in 2022</li>
            </ul>
          </div>
        </div>

        <hr/>
        <br />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          <div style={cardStyle}>
            <h4 style={titleStyle}>Web Development</h4>
            <ul style={ulStyle}>
              <li><span style={bulletStyle}></span> HTML, CSS, JavaScript</li>
              <li><span style={bulletStyle}></span> React.js, Bootstrap</li>
              <li><span style={bulletStyle}></span> Flask, Node.js (Basic)</li>
              <li><span style={bulletStyle}></span> REST APIs</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h4 style={titleStyle}>Tools & Platforms</h4>
            <ul style={ulStyle}>
              <li><span style={bulletStyle}></span> Git & GitHub</li>
              <li><span style={bulletStyle}></span> Power BI, Tableau</li>
              <li><span style={bulletStyle}></span> MongoDB, MySQL</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h4 style={titleStyle}>ML & Data Science</h4>
            <ul style={ulStyle}>
              <li><span style={bulletStyle}></span> Pandas, NumPy, Matplotlib</li>
              <li><span style={bulletStyle}></span> Scikit-Learn (Basic)</li>
              <li><span style={bulletStyle}></span> Exploratory Data Analysis</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h4 style={titleStyle}>CS Concepts</h4>
            <ul style={ulStyle}>
              <li><span style={bulletStyle}></span> Data Structures & Algorithms (DSA)</li>
              <li><span style={bulletStyle}></span> Object-Oriented Programming (OOP)</li>
              <li><span style={bulletStyle}></span> Database Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Style for Skills Cards
const cardStyle = {
  backgroundColor: '#1a1a1a',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.2)',
};
const educationCardStyle1 = {
  backgroundColor: '#000',
  padding: '20px',
  borderRight: '2px solid grey',
  width: '100%',
  maxWidth: '450px',
};

const educationCardStyle = {
  backgroundColor: '#000',
  padding: '20px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '350px',
};

const titleStyle = {
  color: '#a855f7',
  marginBottom: '15px',
};

const ulStyle = {
  listStyle: 'none',
  paddingLeft: 0,
  lineHeight: '1.8',
};

const bulletStyle = {
  display: 'inline-block',
  width: '10px',
  height: '10px',
  backgroundColor: '#a855f7',
  borderRadius: '50%',
  marginRight: '10px',
  transform: 'translateY(-2px)',
};

export default About;
