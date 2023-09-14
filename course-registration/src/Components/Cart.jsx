import React, { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const Cart = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // created card and cart

  return (
    <div>
      <div className="flex m-10 pl-10 gap-10">
        <div className="grid grid-cols-3 gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="h-full w-80 bg-white rounded-lg"
            >
              <img className="p-5" src={course.img_url} alt="" />
              <h3 className="m-2 text-bold text-xl">{course.title}</h3>
              <p className="text-gray-400 m-2 text-sm">{course.description}</p>

              <div className="flex justify-between text-gray-600 p-4">
                <div className="flex items-center gap-1">
                  <p className="text-2xl">
                    <BiDollar></BiDollar>
                  </p>
                  <p className="text-xl ">Price: {course.price}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-2xl">
                    <BsBook></BsBook>
                  </p>
                  <p className="text-xl">Credit: {course.credit_hour}hr</p>
                </div>
              </div>

              <div className="bg-blue-500 m-2 text-white text-center rounded-md h-8 flex items-center justify-center">
                <button>Select</button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-80 bg-white rounded-lg p-4">
          <p className="pb-4 text-blue-600 font-bold">Credit Hour Remaining 7 hr</p>
          <hr />
          <h1 className="mt-4 mb-4 font-bold">Course Name</h1>
          <p className="mt-4 mb-4">1 Introduction to c programming
2 Introduction to C++ for DSA
3 Software Engineering</p>
<hr />
<p className="mt-4 font-semibold">Total Credit Hour : 13</p>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
