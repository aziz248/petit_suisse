import { useState } from "react";
import { Quiz } from "./QuizChild";

export function QuizApp() {
  const [selectedLevel, setSelectedLevel] = useState<
    "Beginner" | "Intermediate" | "Advanced" | null
  >(null);

  const handleComplete = (score: number) => {
    console.log(`Quiz complete! Score: ${score}`);
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-pink-600">Quiz App</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Select Your Level
      </h2>
      <div className="flex flex-col gap-4 mb-8">
        <button
          onClick={() => setSelectedLevel("Beginner")}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-colors w-full"
        >
          Beginner
        </button>
        <button
          onClick={() => setSelectedLevel("Intermediate")}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-colors w-full"
        >
          Intermediate
        </button>
        <button
          onClick={() => setSelectedLevel("Advanced")}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-colors w-full"
        >
          Advanced
        </button>
      </div>
      {selectedLevel && (
        <div className="w-full max-w-2xl">
          <Quiz onComplete={handleComplete} level={selectedLevel} />
        </div>
      )}
    </div>
  );
}
