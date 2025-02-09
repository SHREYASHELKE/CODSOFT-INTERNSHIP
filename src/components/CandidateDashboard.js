import React, { useState } from "react";

const CandidateDashboard = () => {
    const [applications, setApplications] = useState([
        { job: "Software Engineer", status: "Pending" },
        { job: "Frontend Developer", status: "Accepted" }
    ]);

    return (
        <div className="dashboard">
            <h2>Candidate Dashboard</h2>
            <ul>
                {applications.map((app, index) => (
                    <li key={index}>
                        {app.job} - <strong>{app.status}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateDashboard;