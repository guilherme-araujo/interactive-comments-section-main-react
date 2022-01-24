import style from "./style.module.scss";

type CommentBoxProps = {
  replies?: boolean;
};

export function CommentBox({ replies }: CommentBoxProps) {
  return (
    <>
      <div className={style.commentBox}>
        <div className={style.votes}>
          <button className="up">
            <img src="images/icon-plus.svg" alt="" />
          </button>
          <div className="votes">5</div>
          <button className="down">
            <img src="images/icon-minus.svg" alt="" />
          </button>
        </div>
        <div className={style.commentMain}>
          <div className={style.topLine}>
            <div className={style.user}>
              <img
                src="images/avatars/image-amyrobson.png"
                alt="amy robson"
                className="useravatar"
              />
              <p>amyrobson</p>
            </div>
            <div className={style.commentTime}>1 month ago</div>
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
          <div className={style.commentText}>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </div>
        </div>
      </div>
      {replies ? (
        <div className={style.replyWrapper}>
          <div className={style.replyDivider}></div>
          <div className={style.comments}>
            <CommentBox />
            <CommentBox />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
