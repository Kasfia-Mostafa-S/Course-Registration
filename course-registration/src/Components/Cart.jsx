import PropTypes from 'prop-types';

const Cart = ({ selectedCourses,remainingHours,totalHours }) => {
  return (
    <div>
      <div className="h-fit w-80 bg-white rounded-lg p-4">
        <p className="pb-4 text-blue-600 font-bold">
          Credit Hour Remaining {remainingHours} hr
        </p>
        <hr />
        <h1 className="mt-4 mb-4 font-bold">Course Name</h1>
        {selectedCourses.map((selectedCourse) => (
          <li key={selectedCourse.id} className="mt-4 mb-4 list-decimal">
            {selectedCourse.title}
          </li>
        ))}
        <hr />
        <p className="mt-4 font-semibold">Total Credit Hour : {totalHours}</p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.func,
  remainingHours: PropTypes.func,
  totalHours: PropTypes.func
}
export default Cart;
