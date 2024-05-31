import React from 'react';

const doctorSignup = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mt-5 mb-8 text-3xl text-center">
        Become a verified consultant at PharmaHub{' '}
        <i className="fa-solid fa-user-doctor text-green-700"></i>
      </h2>
      <br />
      <form >
        <div className="mb-4">
          <label htmlFor="Name" className="form-label block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNumber" className="form-label block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
 
            type="text"
            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ProfileImage" className="form-label block text-sm font-medium text-gray-700">
            Upload Profile Image
          </label>
          <input

            type="file"
            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Qualifications" className="form-label block text-sm font-medium text-gray-700">
            Qualifications
          </label>
          <input
  
            type="text"
            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ConsultationFees" className="form-label block text-sm font-medium text-gray-700">
            Consultation fees
          </label>
          <input

            type="text"
            className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <h6 className="text-sm text-gray-500">
          *All the details entered will be verified by us.
        </h6>
        <br />
      </form>
      <a href="/">
        <button className="btn bg-[#1f9c61] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Join PharmaHub
        </button>
        </a>
      <br />
    </div>
  );
};

export default doctorSignup;
