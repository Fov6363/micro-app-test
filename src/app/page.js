"use client";
import React from "react";
import styles from "./page.module.css";
import microApp from "@micro-zoe/micro-app";
microApp.start();


export default function Home() {
  const ref = React.useRef();
  const [isShow, setIsShow] = React.useState(false);
  const onClick = () => {
    setIsShow(!isShow);
    ref.current.blur();
  };
  if (isShow) {
    let dd = document.createElement("div");
    dd.innerHTML = "hello" + Date.now();
    document.body.appendChild(dd);
  }
  return (
    <main className={styles.main}>
      <micro-app name="test" url="http://test.local.com/stt2/index.html"></micro-app>

      <button onClick={onClick} ref={ref}>
        Click Me!
      </button>
    </main>
  );
}
