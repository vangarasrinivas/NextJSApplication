import React from "react";
import Navbar from "../components/Navbar";
import sampleImg from "../../public/images/pineapple.jpg";
import avatar from "../../public/images/img_avatar.png";
import Image from "next/image";
import styles from "../../styles/taskscss.module.css";

const index = () => {
  return (
    <>
      <Navbar />
      <Image src={sampleImg} alt="plant" width="280" height="300" />
      <br />
      <div className={styles.flex}>
        <div className={styles.width}>
          <h4>Fade in Text</h4>
          <div className={styles.container1}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image1}
            />

            <div className={styles.overlay1}>
              <div className={styles.text1}>Hello World</div>
            </div>
          </div>
        </div>

        <div className={styles.width}>
          <h4>Fade in Box</h4>
          <div className={styles.container2}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image2}
            />

            <div className={styles.middle2}>
              <div className={styles.text2}>Srinu</div>
            </div>
          </div>
        </div>
        <div className={styles.width}>
          <h4>Slide in (top):</h4>
          <div className={styles.container3}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image3}
            />

            <div className={styles.overlay3}>
              <div className={styles.text3}>Srinu</div>
            </div>
          </div>
        </div>
        <div className={styles.width}>
          <h4>Slide in (Bottom):</h4>
          <div className={styles.container4}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image4}
            />

            <div className={styles.overlay4}>
              <div className={styles.text4}>Srinu</div>
            </div>
          </div>
        </div>
        <div className={styles.width}>
          <h4>Slide in (Left):</h4>
          <div className={styles.container5}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image5}
            />

            <div className={styles.overlay5}>
              <div className={styles.text5}>Srinu</div>
            </div>
          </div>
        </div>
        <div className={styles.width}>
          <h4>Slide in (Right):</h4>
          <div className={styles.container6}>
            <Image
              src={avatar}
              alt="plant"
              width="100"
              height="100"
              className={styles.image6}
            />
            <div className={styles.overlay6}>
              <div className={styles.text6}>Srinu</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
