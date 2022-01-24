import style from "./style.module.scss";

export function AddComment() {
  return (
    <div className={style.addComment}>
      <img src="images/avatars/image-juliusomo.png" alt="" />
      <textarea
        placeholder="Add a comment..."
        name="newcomment"
        id="newcommet"
        rows={4}
        cols={54}
      ></textarea>
      <button>Send</button>
    </div>
  );
}
