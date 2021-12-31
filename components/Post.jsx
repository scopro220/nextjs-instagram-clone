import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Moment from "react-moment";

export default function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="rounded-full h-12 w-12 border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt={username} className="object-cover w-full" />

      <div className="flex justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt={comment.data().username}
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Input Box */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 mr-3" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  );
}
