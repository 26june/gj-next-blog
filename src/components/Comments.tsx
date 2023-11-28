export default async function Comments({ postSlug }: { postSlug: string }) {
  const WEBSITE_URL = "http://localhost:3000";

  let comments = [];

  try {
    const commentsResult = await fetch(
      `${WEBSITE_URL}/api/comments/${postSlug}`,
      { next: { revalidate: 5 } }
    );
    const response = await commentsResult.json();
    console.log(response);
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h2>Comments</h2>
      <h3>Leave a comment below...</h3>

      <form
        action={`/api/comments/${postSlug}`}
        method="POST"
        className="flex flex-col w-[25vw]"
      >
        <label htmlFor="username">Name</label>
        <input type="text" name="username" className="text-black" />

        <label htmlFor="content">Your Comment</label>
        <textarea
          name="content"
          cols={30}
          rows={10}
          className="text-black"
        ></textarea>

        <input type="submit" value={"Send Comment"} />
      </form>

      {comments.map(
        (comment: { id: string; username: string; content: string }) => {
          return (
            <li key={comment.id}>
              {comment.username} says...
              <br />
              {comment.content}
            </li>
          );
        }
      )}
    </div>
  );
}
