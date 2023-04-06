import React from 'react'
import { Box } from "@mui/material";

function AboutUs() {
  return (
    <div className="aboutWrapper">
        <div className="box2">
          <div className="card2">
            <div className="card-body">
              <h2 className="aboutTitle">About TD Bad Bank</h2>
             
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                   
                    <p>
                    The TD Bad Bank project serves as the Capstone Github Portfolio Project within the{" "}
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding?utm_source=Google&utm_network=g&utm_medium=c&utm_term=mit%20full%20stack%20developer&utm_location=9011929&utm_campaign_id=17059210457&utm_adset_id=135511781189&utm_ad_id=594862351424" target="_blank">
                        MIT - Fullstack Development with MERN
                      </a>
                      <div className="videoMit">
                      <iframe 
                        width="100%" 
                        height="350" 
                        src="https://www.youtube.com/embed/5CiCtj_2Qsg"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                      />
                    </div>
                      This project is aptly named as such due to the intentional exposure of user data within the user interface.
                      <br /> <br />
                      This project comprises a straightforward React application where students apply various concepts including hooks, context, routing, and form validations. Additionally, this project serves as an opportunity for students to deploy a React application using AWS S3 Buckets for the first time.
                      <br /> <br />
                      <div className="features">
                        <div>
                          List of technologies and libraries used:
                          <ul>
                            <li>React JS</li>
                            <li>Formik</li>
                            <li>Yup Schema Validation</li>
                            <li>React Toastify</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>ChartJS</li>
                            <li>React Social Icons</li>
                          </ul>
                        </div>
                        <div>
                          Functionalities available:
                          <ul>
                            <li>Create Account</li>
                            <li>Login to Account</li>
                            <li>Edit Account</li>
                            <li>Transactions List</li>
                            <li>Deposit</li>
                            <li>Withdraw</li>
                            <li>Totals Charts</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Danny Nunez <h6>MIT xPro Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/Danny-Nunez">
                        GitHub Repo
                      </a>
                    </h6>
                  </div>
                </Box>

                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutUs