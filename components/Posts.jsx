import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "grabba32",
    userImg: "https://i.imgur.com/bXQ0yOj.jpg",
    img: "https://i.imgur.com/bXQ0yOj.jpg",
    caption: "This is GREAT!!",
  },
  {
    id: "124",
    username: "crank2",
    userImg: "https://i.imgur.com/bXQ0yOj.jpg",
    img: "https://i.imgur.com/bXQ0yOj.jpg",
    caption: "This is super GREAT!!",
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
