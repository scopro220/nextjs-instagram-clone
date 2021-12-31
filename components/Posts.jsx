import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "123",
//     username: "grabba32",
//     userImg: "https://i.imgur.com/bXQ0yOj.jpg",
//     img: "https://i.imgur.com/bXQ0yOj.jpg",
//     caption: "This is GREAT!!",
//   },
//   {
//     id: "124",
//     username: "crank2",
//     userImg: "https://i.imgur.com/bXQ0yOj.jpg",
//     img: "https://i.imgur.com/bXQ0yOj.jpg",
//     caption: "This is super GREAT!!",
//   },
// ];

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
