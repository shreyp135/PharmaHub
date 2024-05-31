import React from 'react';

const home = () => {
  return (
    <div className='p-6'>
      <h2 className="text-center mt-6 mb-20 text-3xl font-bold">
        Welcome to PharmaHub, one stop platform for all your medical needs.
      </h2>
      <div className="flex flex-col items-center gap-6">
        <div className="card mb-3 border-2 border-green-600 rounded-xl ">
          <div className="flex">
            <div className="w-1/3">
              <img
                src="https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"
                className="img-fluid rounded-start m-4 h-48 mx-auto"
                alt="Medicine Delivery"
              />
            </div>
            <div className="w-2/3 p-6 text-center">
              <h5 className="text-2xl font-bold">Get verified medicines at your doorstep in under 10 minutes.</h5>
              <p className="text-[#1f9c61] mt-4 mb-4 text-xl text-center">
                All medicines and health products are checked for authenticity, expiry, and effectiveness by our medical experts
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                  className="inline h-7 w-7 pb-px"
                  alt="Verified"
                />
              </p><a href="/medicines"> <button className="bg-green-600 w-48 mx-auto text-white py-2 rounded">Get your medicines now</button></a>
             
            </div>
          </div>
        </div>

        <div className="card mb-3 w-4/5 border-2 border-green-600 rounded-xl">
          <div className="flex">
            <div className="w-1/3">
              <img
                src="https://www.mukathospital.com/wp-content/uploads/2023/07/Get-an-Appointment-with-the-Best-Heart-Doctor-Cardiologist-in-Chandigarh.jpg"
                className="img-fluid rounded-start m-4 h-48 mx-auto"
                alt="Doctor Consultation"
              />
            </div>
            <div className="w-2/3 p-10 text-center">
              <h5 className="text-2xl font-bold text-center">Get Instant Doctor consultation 24/7</h5>
              <p className="text-green-600 mt-4 mb-4 text-xl text-center">
                Our Doctors are verified for authenticity, medical license, and experience.
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                  className="inline h-7 w-7 pb-px"
                  alt="Verified"
                />
              </p>
              <a href="/consult"><button className="bg-green-600 w-48 mx-auto text-white py-2 rounded">Consult a Doctor now</button></a>
              
            </div>
          </div>
        </div>

        <div className="card mb-3 w-4/5 border-2 border-green-600 rounded-xl">
          <div className="flex">
            <div className="w-1/3">
              <img
                src="https://1finance.co.in/magazine/wp-content/uploads/2023/06/16404392_tp212-socialmedia-02-1-scaled.jpg"
                className="img-fluid rounded-start m-4 h-48 mx-auto"
                alt="Insurance"
              />
            </div>
            <div className="w-2/3 p-10 text-center">
              <h5 className="text-2xl font-bold text-center">Claim your insurance in under 10 minutes!</h5>
              <p className="text-green-600 mt-4 mb-4 text-xl text-center">
                Get Best Insurance policies starting at just ₹447 per month
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                  className="inline h-7 w-7 pb-px"
                  alt="Verified"
                />
              </p>
             <a href="insurance"> <button className="bg-green-600 w-48 mx-auto text-white py-2 rounded">Get an insurance now</button></a>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8" />
      <h3 className="text-center text-2xl font-bold">What our customers have to say...</h3>
      <div className="flex justify-center gap-20 mt-6">
        {[
          {
            name: 'Basant Kumar',
            feedback: 'Seamless experience in Insurance claims and super fast medicine delivery, very satisfied with the service.',
          },
          {
            name: 'Vipin Kumar',
            feedback: 'Very nice platform for all your medical needs.',
          },
          {
            name: 'Shivani Agarwaal',
            feedback: 'I got Instant online consultation with doctor at PharmaHub, very nice experience.',
          },
        ].map((customer, index) => (
          <div
            className="card w-72 h-42 border-2 border-green-600 mt-10 rounded-xl"
            key={index}
          >
            <div className="card-body p-8 text-center  ">
              <h5 className="text-xl font-bold text-center">{customer.name}</h5>
              <p className="text-sm mt-4 text-[16px]">{customer.feedback}</p>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
    </div>
  );
};

export default home;
