export default async function Comments({ postSlug }: { postSlug: string }) {
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

        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="comment"
          cols={30}
          rows={10}
          className="text-black"
        ></textarea>

        <input type="submit" value={"Send Comment"} />
      </form>
    </div>
  );
}
