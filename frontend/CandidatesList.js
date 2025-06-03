import React, { useEffect, useState } from 'react';

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);

  // Fetch candidates data from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/candidates')
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error('Error fetching candidates:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Candidates List</h2>

      {candidates.length === 0 ? (
        <p>No candidates available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Phone</th>
                <th className="border px-4 py-2 text-left">Job ID</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate._id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{candidate.name}</td>
                  <td className="border px-4 py-2">{candidate.email}</td>
                  <td className="border px-4 py-2">{candidate.phone}</td>
                  <td className="border px-4 py-2">{candidate.jobId}</td>
                  <td className="border px-4 py-2">{candidate.applicationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CandidatesList;
