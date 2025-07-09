import { Link } from 'react-router-dom';

const PostList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <div key={post._id} className="border p-2 mb-2">
        <h2>{post.title}</h2>
        <Link to={`/post/${post._id}`}>Read more</Link>
      </div>
    ))}
  </div>
);

export default PostList;
