import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    // Generate Fake Data
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions?.map((profile) => (
        <Story
          key={profile.login.uuid}
          img={profile.picture.thumbnail}
          username={profile.login.username}
        />
      ))}
    </div>
  );
}
