import Courses from "../components/Courses";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Popular Courses
      </h1>
      <Courses />
    </div>
  );
}

export default App;
