import React from 'react';
import { useNavigate } from 'react-router-dom';;

const consult = () => {
    const navigate = useNavigate();
    const handleJoin = async ()=>{
        navigate("/videoRoom/1003");
    };

  return (
    <div>
      <div className='mt-12 text-3xl mx-4 text-center'>
          Consult a Doctor according to your medical needs instantly
          <i class="fa-solid fa-user-doctor ml-2 text-[#1f9c61]"></i>
      </div>
      
      <div className=' flex grid grid-cols-3 gap-20 mx-36 my-20 justify-evenly  '>
        {[
          {
            title: 'General Physician',
            doctor: 'Dr. Shashwat Kumar',
            description: 'For general health queries, simple cough & cold or issues about diet.',
          },
          {
            title: 'Dermatologist',
            doctor: 'Dr. Lagan Garg',
            description: 'For skin or hair related issues.',
          },
          {
            title: 'Psychiatrist',
            doctor: 'Dr. Akshit Mehta',
            description: 'For mental health or emotional issues.',
          },
          {
            title: 'Pediatrician',
            doctor: 'Dr. Meenal Parekh',
            description: 'For health issues or queries in infants.',
          },
          {
            title: 'Urologist',
            doctor: 'Dr. Ravi Shastri',
            description: 'For UTI\'s or problems in kidney, bladder etc.',
          },
          {
            title: 'Gynaecology',
            doctor: 'Dr. Parul Sharma',
            description: 'For Pregnancy related issues.',
          },
        ].map((card, index) => (
          <div
            className="card p-6 rounded-xl "
            style={{ width: '18rem', height: '17rem', borderColor: '#1f9c61', borderWidth: '2px' }}
            key={index}
          >
            <div className="card-body" style={{ marginTop: '1.5rem' }}>
              <h5 className="card-title text-xl">{card.title}</h5>
              <h6>{card.doctor}</h6>
              <h6 className='flex nowrap text-[#1f9c61] mt-2 '>
                PharmaHub verified
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                  style={{ height: '2rem', width: '2rem' }}
                  alt="verified"
                />
              </h6>
              <p className="card-text text-sm" >
                {card.description}
              </p>
              <button onClick={handleJoin} className='mt-4 bg-[#1f9c61] text-white h-8 w-32 rounded-md hover:shadow-black hover:duration-500 hover:shadow-2xl'>Consult now</button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex nowrap text-lg  ml-4'>
        
          *Our Doctors are verified for authenticity, medical license, and experience by our Team 
          <img className='h-7'
            src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
            alt="verified"
          />
      </div>
    </div>
  );
};

export default consult;
