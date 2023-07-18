import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const pathname = router?.pathname.split("/")[1];
  console.log(pathname);

  return (
    <>
      <div className={styles.navbar}>
        <Link className={styles.navbarItem} href="/">
          <h4 className={pathname == "" ? styles.activenavitem : ""}>Home</h4>
        </Link>
        <Link className={styles.navbarItem} href="/blog">
          <h4 className={pathname == "blog" ? styles.activenavitem : ""}>
            Blog
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/products">
          <h4 className={pathname == "products" ? styles.activenavitem : ""}>
            Producs
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/docs">
          <h4 className={pathname == "docs" ? styles.activenavitem : ""}>
            Docs
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/users">
          <h4 className={pathname == "users" ? styles.activenavitem : ""}>
            Users
          </h4>
        </Link>

        <Link className={styles.navbarItem} href="/imageoptimization">
          <h4
            className={
              pathname == "imageoptimization" ? styles.activenavitem : ""
            }
          >
            Image Optimization
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/posts">
          <h4 className={pathname == "posts" ? styles.activenavitem : ""}>
            Posts
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/crud">
          <h4 className={pathname == "crud" ? styles.activenavitem : ""}>
            Firebase CRUD
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/tasks">
          <h4 className={pathname == "tasks" ? styles.activenavitem : ""}>
            Tasks
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/css">
          <h4 className={pathname == "css" ? styles.activenavitem : ""}>
            CSS Tasks
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/dragdrop">
          <h4 className={pathname == "dragdrop" ? styles.activenavitem : ""}>
            Drag Drop
          </h4>
        </Link>
        <Link className={styles.navbarItem} href="/timer">
          <h4 className={pathname == "timer" ? styles.activenavitem : ""}>
           Timer
          </h4>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
