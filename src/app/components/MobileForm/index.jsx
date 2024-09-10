"use client";

import styles from "./style.module.scss";
import React, { useState } from "react";

const MobileForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    // Remove all non-numeric characters from the input value
    const cleaned = event.target.value.replace(/\D/g, "");

    const len = cleaned.length;

    // Format the cleaned phone number using regular expressions

    let normValue = `${cleaned.substring(0, 3)}${
      cleaned.length > 3 ? "-" : ""
    }${cleaned.substring(3, 6)}${
      cleaned.length > 6 ? "-" : ""
    }${cleaned.substring(6, 10)}`;
    setPhoneNumber(normValue);
  };

  return (
    <form
      action="https://public.herotofu.com/v1/87551ea0-0334-11ef-a9e0-3721c124b74c"
      method="post"
      accept-charset="UTF-8"
      className={styles.body}
    >
      <div className={styles.contCont}>
        <div className={styles.phone}>
          <a href="tel:+7209685664">720-968-5664</a>
        </div>
        <div className={styles.mail}>
          <a href="mailto:info@servaldesigns.com">info@servaldesigns.com</a>
        </div>
      </div>
      <div className={styles.cont}>
        <div className={styles.spacer}></div>
        <div className={styles.left}>
          <div className={styles.section}>
            <label for="name" className={styles.label}>
              Name
            </label>
            <input
              name="Name"
              id="name"
              type="text"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.section}>
            <label for="email" className={styles.label}>
              Email
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.section}>
            <label for="phone" className={styles.label}>
              Phone
            </label>
            <input
              name="Phone"
              id="phone"
              type="phone"
              required
              value={phoneNumber}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.sectionR}>
            <label for="message" className={styles.label}>
              Message
            </label>
            <textarea
              name="Message"
              id="message"
              type="area"
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.submitCont}>
          <input type="submit" value="Submit" className={styles.submit}></input>
        </div>
      </div>
    </form>
  );
};
export default MobileForm;
