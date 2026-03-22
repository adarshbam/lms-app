import { ShoppingCart } from "lucide-react";

const CourseCard = ({ name, price, thumbnail }) => {
  function addToCart(e) {
    console.log(e);
  }

  return (
    <div className="bg-white dark:bg-gray-800 cursor-pointer rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-colors">
      <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            ₹{price}
          </h2>
          <button
            onClick={addToCart}
            className="flex cursor-pointer items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="lucide lucide-shopping-cart w-5 h-5" />{" "}
            <span>Add Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
