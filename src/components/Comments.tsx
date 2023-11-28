export default async function Comments({ postSlug }: { postSlug: string }) {
  return (
    <div>
      <h2>Comments</h2>
      <h3>Leave a comment below...</h3>

      <form action={`/api/comments/${postSlug}`} method="POST">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your Comment</label>
        <textarea name="comment" cols={30} rows={10}></textarea>

        <input type="submit" value={"Send Comment"} />
      </form>
    </div>
  );
}
