import style from "./style.module.scss";

export function Attribution() {
  return (
    <div className={style.attribution}>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a href="https://github.com/guilherme-araujo">
        Guilherme Fernandes de Araújo
      </a>
      .
    </div>
  );
}
