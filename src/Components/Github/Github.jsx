import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-gray-300"
            src={data.avatar_url} // Replace with your GitHub profile photo URL
            alt="GitHub Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Malik Hashir Shakeel</h2>
          <p className="text-gray-600">{data.name}</p>
          <div className="mt-4 flex space-x-4">
            <div className="text-center">
              <p className="text-gray-800 font-bold">Followers</p>
              <p className="text-gray-600">{data.followers}</p> {/* Replace with your followers count */}
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-bold">Following</p>
              <p className="text-gray-600">{data.following}</p> {/* Replace with your following count */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const githubInfoLoader = async () =>{
    let response = await fetch('https://api.github.com/users/MalikHashirShakeel'); // Replace with your GitHub username
    return response.json();
}

export default Github
