/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { BiDollar  } from 'react-icons/bi';
import { BsBook  } from 'react-icons/bs';

const Cart = () => {

const [courses, setCourses] = useState([]);

useEffect(()=>{
  fetch('./course.json')
  .then(res => res.json())
  .then(data => setCourses(data))
},[])


// created card and cart

  return (
    <div>
      <div className='flex m-10 pl-10 gap-10'>
          <div className='grid grid-cols-3 gap-5'>
            {
              courses.map(course => (
                <div key={course.id} className='card-container h-96 w-72 bg-white rounded-lg'>
                <img className='p-2' src="https://i.ibb.co/fYtPmDv/Rectangle-2-6.png" alt="" />
                  <h3 className='mt-2 text-semibold text-3xl'>title</h3>
                  <p className='text-gray-400 mt-2'>description</p>
    
                  <div className='flex justify-between text-gray-600'>
                    <div className='flex items-center gap-1'>
                      <p className='text-2xl'><BiDollar ></BiDollar ></p>
                      <p className='text-xl'>Price:</p>
                    </div>
                       <div className='flex items-center gap-1'>
                       <p className='text-2xl'><BsBook></BsBook></p>
                       <p className='text-xl'>Credit:hr</p>
                       </div>
                  </div>
               </div>
              ))
            }
          </div>
           
           <div>
           <h1>this is cart</h1>
           </div>
      </div>
    </div>
  );
};

export default Cart;