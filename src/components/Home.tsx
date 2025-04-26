import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="text-center min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6">
        Welcome to Petit Suisse!
      </h1>
      <p className="text-xl text-gray-800 mb-4 max-w-2xl">
        Dive into a world of fun and learning! Explore our quizzes, climb the
        leaderboard, and challenge your friends.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/quizzes"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Start a Quiz
        </Link>
        <Link
          to="/leaderboard"
          className="bg-pink-300 text-black-800 px-6 py-3 rounded-lg shadow-md transition"
        >
          View Leaderboard
        </Link>
      </div>
      <footer className="mt-10 text-gray-600 text-sm">
        © 2025 Petit Suisse. All rights reserved.
      </footer>
    </div>
  );
}
export default Home;
