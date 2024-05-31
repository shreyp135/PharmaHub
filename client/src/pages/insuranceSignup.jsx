import React from 'react';

const InsuranceSignup = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mt-5 text-3xl mb-10 text-center">
        Get listed as an Insurance Company at PharmaHub{' '}
        <i className="fa-solid fa-notes-medical text-green-700"></i>
      </h2>
      <br />
      <form method="POST" action="/insuranceCompanyRegister" encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
            Name of Organisation
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="PolicyName" className="block text-sm font-medium text-gray-700">
            Name of the policy
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="TermsAndConditions" className="block text-sm font-medium text-gray-700">
            Upload Terms & conditions
          </label>
          <input
            type="file"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Premium" className="block text-sm font-medium text-gray-700">
            Insurance premium per month
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
            Office Address
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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

export default InsuranceSignup;
