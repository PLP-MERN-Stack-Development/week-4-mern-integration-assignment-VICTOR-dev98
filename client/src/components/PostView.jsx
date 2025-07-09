const PostView = ({ post }) => (
  <article className="prose">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    {post.featuredImage && <img src={post.featuredImage} alt={post.title} />}
  </article>
);

export default PostView;
