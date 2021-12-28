import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="rounded-full h-12 w-12 border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      {/* Caption */}
      {/* Comments */}
      {/* Input Box */}
    </div>
  );
}
