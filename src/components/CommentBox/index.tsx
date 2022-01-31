import style from "./style.module.scss";

type CommentBoxProps = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Array<CommentBoxProps>;
};

//export function CommentBox({ comment }: CommentBoxProps) {
export function CommentBox({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  user,
  replies,
}: CommentBoxProps) {
  //const { id, content, createdAt, score, replyingTo, user, replies } = comment;
  return (
    <>
      <div className={style.commentBox}>
        <div className={style.votes}>
          <button className="up">
            <img src="images/icon-plus.svg" alt="" />
          </button>
          <div className="votes">{score}</div>
          <button className="down">
            <img src="images/icon-minus.svg" alt="" />
          </button>
        </div>
        <div className={style.commentMain}>
          <div className={style.topLine}>
            <div className={style.user}>
              <img
                src={user.image.png}
                alt={user.username}
                className="useravatar"
              />
              <p>{user.username}</p>
            </div>
            <div className={style.commentTime}>{createdAt}</div>
            <div className={style.buttonsWrapper}>
              {replies ? (
                <>
                  <button className={style.deleteButton}>
                    <img src="images/icon-delete.svg" alt="" />
                    Delete
                  </button>
                  <button>
                    <img src="images/icon-edit.svg" alt="" />
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <button>
                    <img src="images/icon-reply.svg" alt="" />
                    Reply
                  </button>
                </>
              )}
            </div>
          </div>
          <div className={style.commentText}>{content}</div>
        </div>
      </div>
      {replies && replies.length > 0 ? (
        <div className={style.replyWrapper}>
          <div className={style.replyDivider}></div>
          <div className={style.comments}>
            {replies.map((reply, i) => (
              <CommentBox {...reply} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
