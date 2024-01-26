"use client";
/* eslint-disable react/prop-types */

const AddTwoNumbers = ({ num1, num2 }) => {
  return (
    <div>
      {/* num1 and num 2 are props */}
      {num1 + num2}
    </div>
  );
};

export default AddTwoNumbers;
