import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import Cart from "./Cart";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingHours, setRemainingHours] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Course selection in cart

  const handleCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);

    let hours = 20
    let count = course.credit_hour;

    if (isExist) {
     return toast.error("Course Have Been Already Selected");
    } else {

       selectedCourses.forEach(item =>{
        count = count + item.credit_hour;
       })

const totalRemaining = hours - count;
setTotalHours(count)
setRemainingHours(totalRemaining)

      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // created card and cart

  return (
    <div>
      <div className="flex m-10 pl-10 gap-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div key={course.id} className="h-full w-80 bg-white rounded-lg">
              <img className="p-5" src={course.img_url} alt="" />
              <h3 className="m-4 text-bold text-xl">{course.title}</h3>
              <p className="text-gray-400 m-4 text-sm">{course.description}</p>

              <div className="flex justify-between text-gray-600 p-4">
                <div className="flex items-center">
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
                <button onClick={() => handleCourse(course)}>Select</button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </div>
          ))}
        </div>

        <Cart 
        selectedCourses={selectedCourses}
        remainingHours={remainingHours}
        totalHours={totalHours}
        ></Cart>
      </div>
    </div>
  );
};

export default Course;
