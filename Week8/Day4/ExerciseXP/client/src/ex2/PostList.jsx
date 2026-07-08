import posts from "./posts.json";

function PostList() {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default PostList;