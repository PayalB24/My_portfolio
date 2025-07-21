import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '100px 20px',
      }}
    >
      <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#A855F7',
          }}
        >
          Contact
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            marginBottom: '40px',
            color: '#ccc',
          }}
        >
          I'm open to internship, freelance, and collaboration opportunities. Feel free to reach out!
        </p>

        <div
          style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.1)',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>
              <strong style={{ color: '#A855F7' }}>Email:</strong>{' '}
              <a href="mailto:bordepayal26@gmail.com" style={linkStyle}>
                bordepayal26@gmail.com
              </a>
            </li>
            <li>
              <strong style={{ color: '#A855F7' }}>Phone:</strong>{' '}
              <a>
                +91 98341 26076
              </a>
            </li>
            <li>
              <strong style={{ color: '#A855F7' }}>Location:</strong> Kopargaon, Maharashtra, India
            </li>
            <li>
              <strong style={{ color: '#A855F7' }}>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/payal-borde-468868269/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                linkedin.com/in/payal-borde
              </a>
            </li>
            <li>
              <strong style={{ color: '#A855F7' }}>GitHub:</strong>{' '}
              <a
                href="https://github.com/PayalB24"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                github.com/PayalB24
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const linkStyle = {
  color: '#A855F7',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Contact;
