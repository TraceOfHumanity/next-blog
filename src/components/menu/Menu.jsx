import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>{"what's hot"}</h2>
      <h1>Most popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subTitle}>Chosen by editors</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
