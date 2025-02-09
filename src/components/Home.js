import React, { useState, useEffect } from "react";
import axios from "axios";

import { MdAttachEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://api.example.com/jobs") // Replace with real API
            .then(response => setJobs(response.data))
            .catch(error => console.error("Error fetching jobs:", error));
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">

            <input
                type="text"
                placeholder="Search for jobs..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="job-list">
                {filteredJobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h3>{job.title}</h3>
                        <p>Company: {job.company}</p>
                        <p>Location: {job.location}</p>
                        <button>Apply</button>
                    </div>

                ))}
            </div>
            {/* <h1>JOB VACANCY</h1> */}
            <section>


                <div className="job">
                    <h3>Software Engineer</h3>
                    <p>Company: Tech Corp</p>
                    <p>Location: Remote</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Frontend Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>App Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
                <div className="job">
                    <h3>Fullstack Developer</h3>
                    <p>Company: Web Innovations</p>
                    <p>Location: San Francisco, CA</p>
                    <button>Apply</button>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-icons">
                    <div className="footer-item">
                        <FaUserTie className="icon" />
                        <p>Employer</p>
                    </div>
                    <div className="footer-item">
                        <FaEnvelopeOpen className="icon" />
                        <p>Security</p>
                    </div>
                    <div className="footer-item">
                        <FaLock className="icon" />
                        <p>Authentication</p>
                    </div>
                    <div className="footer-item">
                        <MdAttachEmail className="icon" />
                        <p>Email</p>
                    </div>
                </div>
                <p className="footer-text">© 2025 Job Board. All Rights Reserved.</p>
            </footer>
        </div>


    );
};

export default Home;