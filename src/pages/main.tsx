import React from "react";
import { AddComment } from "../components/AddComment";
import { Attribution } from "../components/Attribution";
import { CommentBox } from "../components/CommentBox";

import styles from "./main.module.scss";

export function Main() {
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.comments}>
          <CommentBox />
          <CommentBox replies={true} />

          <AddComment />
        </div>
      </div>
      <Attribution />
    </>
  );
}
