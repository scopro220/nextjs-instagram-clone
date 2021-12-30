import { useEffect, useState } from "react";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.login.uuid}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.picture.thumbnail}
            alt={profile.login.username}
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.login.username}</h2>
            <h3 className="text-xs text-gray-400">
              Lives in {profile.location.country}
            </h3>
          </div>
          <button className="text-blue-400 text-xs">Follow</button>
        </div>
      ))}
    </div>
  );
}
