import { useEffect, useState } from "react";
import { Trophy, Award, Medal } from "lucide-react";
import { supabase } from "../lib/supabase";

interface LeaderboardUser {
  id: string;
  username: string;
  total_score: number;
}

export function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        // Fetch data from the leader_board table
        const { data, error } = await supabase
          .from("leader_board")
          .select("*")
          .limit(10);

        if (error) throw error;
        if (data && data.length > 0) {
          setUsers(data);
        } else {
          setUsers([]);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-8">Error: {error}</div>;
  }

  if (users.length === 0) {
    return (
      <div className="text-center p-8">No users found in the leaderboard.</div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
        <Trophy className="w-6 h-6" />
        Leaderboard
      </h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 rounded-lg bg-pink-50"
          >
            <div className="flex items-center gap-4">
              {index === 0 && <Trophy className="w-6 h-6 text-yellow-500" />}
              {index === 1 && <Award className="w-6 h-6 text-gray-400" />}
              {index === 2 && <Medal className="w-6 h-6 text-amber-600" />}
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-sm text-pink-600">
                  Score: {user.total_score}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-pink-600">Rank {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
