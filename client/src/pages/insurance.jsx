import React from 'react';

const Insurance = () => {
  return (
    <div className="container mx-auto p-4">
      <br />
      <h2 className="text-3xl font-bold text-center">Claim your insurance in under 10 minutes!</h2>
      <form className="text-center mb-6" >
        <br />
        <label htmlFor="username" className="block text-xl text-center font-medium text-black00">
          Enter Your Insurance policy details <i className="fa-solid fa-hospital-user text-green-600 ml-2"></i>
        </label>
        <input
          name="username"
          id="username"
          placeholder="Name"
          type="text"
          className="w-3/5 mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          required
        />
        <input
          name="username"
          id="username"
          placeholder="Phone number"
          type="text"
          className="w-3/5 mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          required
        />
        <input
          name="username"
          id="username"
          placeholder="Policy number"
          type="text"
          className="w-3/5 mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          required
        />
        <br />
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
          Start Claim process
        </button>
        <br />
        <br />
      </form>
      <hr />
      <br />
      <h2 className="text-2xl text-center p-0 font-bold mr-4 ">
        Get Best Insurance policies starting at just &#x20B9;447 per month
      </h2>
      <br />
      <br />

      <div className="card mb-8 p-2 w-4/5 rounded-xl mx-auto border-2 border-green-600">
        <div className="flex ">
          <div className="w-1/3 p-4">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/HDFC_ERGO@2x.png"
              className="img-fluid rounded-start h-24 ml-10"
              alt="HDFC ERGO"
            />
          </div>
          <div className="w-2/3 p-4 text-center mr-8">
            <h5 className="text-xl font-bold">Optima Secure by HDFC ERGO</h5>
            <p className="text-green-700 mt-2">
              Cover of &#x20B9;5Lakh starting at &#x20B9;901 per month
            </p>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="card mb-8 p-2 w-4/5 rounded-xl mx-auto border-2 border-green-600">
        <div className="flex">
          <div className="w-1/3 p-4">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Reliance@2x.png"
              className="img-fluid rounded-start h-24 ml-10"
              alt="Reliance General Insurance"
            />
          </div>
          <div className="w-2/3 p-4 text-center mr-8">
            <h5 className="text-xl font-bold">Health Gain by Reliance General Insurance</h5>
            <p className="text-green-700 mt-2">
              Cover of &#x20B9;5Lakh starting at &#x20B9;447 per month
            </p>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="card mb-8 p-2 w-4/5 rounded-xl mx-auto border-2 border-green-600">
        <div className="flex">
          <div className="w-1/3 p-4">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/SBI@2x.png"
              className="img-fluid rounded-start h-24 ml-10"
              alt="SBI General Insurance"
            />
          </div>
          <div className="w-2/3 p-4 text-center mr-8">
            <h5 className="text-xl font-bold">Aarogya Supreme by SBI General Insurance</h5>
            <p className="text-green-700 mt-2">
              Cover of &#x20B9;5Lakh starting at &#x20B9;840 per month
            </p>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="card mb-8 p-2 w-4/5 rounded-xl mx-auto border-2 border-green-600">
        <div className="flex">
          <div className="w-1/3 p-4">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/ICICI_Lombard@2x.png"
              className="img-fluid rounded-start h-24 ml-10"
              alt="ICICI Lombard"
            />
          </div>
          <div className="w-2/3 p-4 text-center mr-8">
            <h5 className="text-xl font-bold">Health AdvantEdge by ICICI Lombard</h5>
            <p className="text-green-700 mt-2">
              Cover of &#x20B9;5Lakh starting at &#x20B9;936 per month
            </p>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="card mb-8 p-2 w-4/5 rounded-xl mx-auto border-2 border-green-600">
        <div className="flex">
          <div className="w-1/3 p-4">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Aditya_Birla@2x.png"
              className="img-fluid rounded-start h-24 ml-10"
              alt="Aditya Birla"
            />
          </div>
          <div className="w-2/3 p-4 text-center mr-8">
            <h5 className="text-xl font-bold">Health AdvantEdge by ICICI Lombard</h5>
            <p className="text-green-700 mt-2">
              Cover of &#x20B9;7Lakh starting at &#x20B9;574 per month
            </p>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4">
              Buy
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Insurance;
