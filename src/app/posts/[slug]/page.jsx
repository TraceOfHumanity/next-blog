import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

// const getUser = async (userEmail) => {
//   const res = await fetch(`http://localhost:3000/api/users/${userEmail}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  // console.log(data.userEmail);
  // console.log(data);
  const user = await prisma.user.findUnique({
    where: { email: data.userEmail },
  });
  // console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={user.image ? user.image : "/bg.jpg"}
                alt=""
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{user.name}</span>
              <span className={styles.date}>
                {data.createdAt?.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img ? data.img : "/bg.jpg"}
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          >
            {data?.desc}
          </div>
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
