import React from 'react';

const PreviousReports: React.FC = () => {
    // Sample data for previous reports
    const reports = [
        { id: 1, date: '2023-01-15', vaccine: 'COVID-19', status: 'Completed' },
        { id: 2, date: '2023-03-10', vaccine: 'Flu', status: 'Completed' },
        { id: 3, date: '2023-06-20', vaccine: 'Hepatitis B', status: 'Pending' },
    ];

    return (
        <div className="previous-reports">
            <h2>Previous Vaccination Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Vaccine</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.date}</td>
                            <td>{report.vaccine}</td>
                            <td>{report.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PreviousReports;