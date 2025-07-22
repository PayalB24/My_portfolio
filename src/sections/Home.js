import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div
            className="container-fluid"
            style={{
                color: 'white',
                minHeight: '80vh',
                paddingTop: '30vh',
            }}
        >
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <h1 className="display-4 fw-bold gradient-text mb-4">
                            Hi, I'm Payal Borde
                        </h1>
                        <p className="lead mb-5">
                            Passionate about turning ideas into interactive web experiences, I'm actively building skills in full stack development.
With a strong interest in frontend, backend, and DSA, I'm committed to growing as a future-ready developer.
                        </p>

                        {/* Buttons Row */}
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Link
                                to="/projects" 
                                className="btn"
                                style={{
                                    backgroundColor: '#8b5cf6',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 25px',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 20px rgba(138, 84, 246, 0.5)',
                                    transition: '0.3s ease-in-out',
                                    textDecoration: 'none',
                                }}
                            >
                                Projects
                            </Link>

                            <Link
                                to="/contact" 
                                className="btn"
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    border: '2px solid rgba(121, 30, 196, 0.5)',
                                    padding: '10px 25px',
                                    fontWeight: 'bold',
                                    borderRadius: '10px',
                                    boxShadow: '0 6px 25px rgba(121, 30, 196, 0.5)',
                                    transition: '0.3s ease-in-out',
                                    textDecoration: 'none',
                                }}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
