const CustomButton = () => {
  return (
    <div
      onClick={() => {
        alert("Alert From Me Yoo");
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click me Plzz
    </div>
  );
};

export default CustomButton;
