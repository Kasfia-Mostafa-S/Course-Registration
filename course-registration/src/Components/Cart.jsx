import React from 'react';
import { BiDollar  } from 'react-icons/bi';
import { BsBook  } from 'react-icons/bs';

const Cart = () => {
  return (
    <div>
      <div className='container mt-5'>
           <div className='card-container h-96 w-72 bg-white rounded-lg'>
            <img className='pt-2' src="https://i.ibb.co/fYtPmDv/Rectangle-2-6.png" alt="" />
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
           <div>

           </div>
      </div>
    </div>
  );
};

export default Cart;