import React from "react";
import { AddComment } from "../components/AddComment";
import { Attribution } from "../components/Attribution";
import { CommentBox } from "../components/CommentBox";

import styles from "./main.module.scss";
import data from "../data.json";

export function Main() {
  console.log(data);

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.comments}>
          {data.comments.map((comment, i) => (
            <CommentBox {...comment} key={i} />
          ))}

          <AddComment />
        </div>
      </div>
      <Attribution />
    </>
  );
}
