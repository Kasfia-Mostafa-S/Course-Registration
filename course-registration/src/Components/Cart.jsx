/* eslint-disable react/prop-types */
import React from "react";

const Cart = ({ selectedCourses }) => {
  return (
    <div>
      <div className="h-fit w-80 bg-white rounded-lg p-4">
        <p className="pb-4 text-blue-600 font-bold">
          Credit Hour Remaining 7 hr
        </p>
        <hr />
        <h1 className="mt-4 mb-4 font-bold">Course Name</h1>
        {selectedCourses.map((selectedCourse) => (
          <li key={selectedCourse.id} className="mt-4 mb-4 list-decimal">
            {selectedCourse.title}
          </li>
        ))}
        <hr />
        <p className="mt-4 font-semibold">Total Credit Hour : 13</p>
      </div>
    </div>
  );
};

export default Cart;
