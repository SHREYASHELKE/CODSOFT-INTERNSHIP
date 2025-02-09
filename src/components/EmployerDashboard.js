import React, { useState } from "react";

const EmployerDashboard = () => {
    const [job, setJob] = useState({ title: "", company: "", location: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Job posted:", job);
    };

    return (
        <div className="dashboard">
            <h2>Employer Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Job Title" onChange={(e) => setJob({ ...job, title: e.target.value })} />
                <input type="text" placeholder="Company Name" onChange={(e) => setJob({ ...job, company: e.target.value })} />
                <input type="text" placeholder="Location" onChange={(e) => setJob({ ...job, location: e.target.value })} />
                <br></br>
                <button type="submit">Post Job</button>
            </form>
        </div>
    );
};

export default EmployerDashboard;