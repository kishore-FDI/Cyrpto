'use client'
import { useState } from 'react';

export default function Home() {
  const [encryptedFiles] = useState([
    { text: 'io io hu 9i io... fd er.. 34 re', prediction: 'AES-256', date: '12 Feb 2024' },
    { text: 'fg u8 4d ew... 8d we 39 lk', prediction: 'RSA-2048', date: '14 Feb 2024' },
    { text: 'ty we... k4 gr re ui qw...', prediction: 'Blowfish', date: '16 Feb 2024' },
    { text: 'l9 fj 3w.. pq ty 84.. zx qw', prediction: 'Triple DES', date: '18 Feb 2024' },
    { text: '8d we lk.. fg io hu... io io', prediction: 'PGP', date: '22 Feb 2024' },
  ]);

  return (
    <div className="flex min:h-screen h-screen">
      {/* Sidebar */}
      <aside className="bg-blue-500 text-white w-64 p-4">
        <div className="flex items-center mb-6">
          <h2 className="text-xl font-bold">Decryption Menu</h2>
        </div>
        <nav>
          <ul>
            <li className="py-2 px-4 bg-blue-600 rounded mb-2">Encrypted Files</li>
            <li className="py-2 px-4">Decryption Predictions</li>
            <li className="py-2 px-4">Statistics</li>
            <li className="py-2 px-4">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Table */}
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-6">Sample Encrypted Text</th>
              <th className="py-3 px-6">Prediction</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Redirect</th>
            </tr>
          </thead>
          <tbody>
            {encryptedFiles.map((file, index) => (
              <tr key={index} className="border-b text-gray-700">
                <td className="py-3 px-6">{file.text}</td>
                <td className="py-3 px-6">{file.prediction}</td>
                <td className="py-3 px-6">{file.date}</td>
                <td className="py-3 px-6 text-right">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => window.location.href = `/decrypt/${file.prediction}`}
                  >
                    Go
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
