'use client'
import { useState } from 'react';

export default function Home() {
  const [files] = useState([
    { name: 'hash1', tag: '#defect', created: '12 Feb 2022', modified: '1 days ago', type: 'folder' },
    { name: 'hash 2', tag: '#3dgltf', created: '14 Feb 2022', modified: '2 days ago', type: 'folder' },
    { name: 'hash 3', tag: '#figmafiles', created: '19 Feb 2022', modified: '5 days ago', type: 'folder' },
    { name: 'Documentation', tag: '#document', created: '27 Feb 2022', modified: '8 days ago', type: 'folder' },
    { name: '3d credit card.jpg', tag: '#3ddesign', created: '13 Mar 2022', modified: '14 days ago', type: 'image' },
    { name: 'panel 1 image.jpg', tag: '#bgn', created: '13 Mar 2022', modified: '14 days ago', type: 'image' },
    { name: 'branding details.doc', tag: '#branding', created: '06 Apr 2022', modified: '24 days ago', type: 'document' },
    { name: 'store 1 dataset.csv', tag: '#storeddataset', created: '07 May 2022', modified: '1 month ago', type: 'csv' },
    { name: 'promotion video.mp4', tag: '#promotion', created: '11 Jul 2022', modified: '2 month ago', type: 'video' },
    { name: 'Not you lyrics.doc', tag: '#lyrics', created: '12 Jul 2022', modified: '2 month ago', type: 'document' },
  ]);

  return (
    <div className="flex min:h-screen h-auto">
      {/* Sidebar */}
      <aside className="bg-blue-500 text-white w-64 p-4">
        <div className="flex items-center mb-6">
          <h2 className="text-xl font-bold">Storage</h2>
        </div>
        <nav>
          <ul>
            <li className="py-2 px-4 bg-blue-600 rounded mb-2">Storage</li>
            <li className="py-2 px-4">Assets</li>
            {/* <li className="py-2 px-4">UI Files</li> */}
            <li className="py-2 px-4">Documentation</li>
            <li className="py-2 px-4">Starred</li>
            <li className="py-2 px-4">Shared with me</li>
            <li className="py-2 px-4">Statistics</li>
            <li className="py-2 px-4">Settings</li>
          </ul>
        </nav>
        <div className="mt-auto">
          <p className="text-sm">You have used 5 GB out of 15 GB.</p>
          <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '33%' }}></div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Table */}
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-6">Asset Name</th>
              <th className="py-3 px-6">Tag</th>
              <th className="py-3 px-6">Created</th>
              <th className="py-3 px-6">Last Modified</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-b text-gray-700">
                <td className="py-3 px-6">
                  <div className="flex items-center">
                    {file.type === 'folder' && <span className="mr-2">📁</span>}
                    {file.type === 'image' && <span className="mr-2">🖼️</span>}
                    {file.type === 'document' && <span className="mr-2">📄</span>}
                    {file.type === 'csv' && <span className="mr-2">📊</span>}
                    {file.type === 'video' && <span className="mr-2">🎥</span>}
                    {file.name}
                  </div>
                </td>
                <td className="py-3 px-6">{file.tag}</td>
                <td className="py-3 px-6">{file.created}</td>
                <td className="py-3 px-6">{file.modified}</td>
                <td className="py-3 px-6 text-right">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
