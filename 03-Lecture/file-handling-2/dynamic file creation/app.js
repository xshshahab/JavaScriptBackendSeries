const fs = require("fs");

const messages = [
  "Online sexual exploitation is a crime — sharing or requesting explicit content without consent is never okay.",
  "Think before you share: once an image is online, control is lost. Protect your privacy and respect others'.",
  "Report any form of online sexual harassment or grooming. Law enforcement takes these crimes seriously.",
  "Using technology to threaten, coerce, or distribute intimate images is a serious offense — consent matters.",
  "Support survivors of online sexual abuse. Listen, believe, and connect them with professional help.",
];

messages.map((msg) => {
  const hold = msg.split(" ")[0];
  console.log(hold);

  fs.writeFile(`${hold}.txt`, msg, (error) => {
    if (error) {
      console.error("ERROR! ", error);
    }
  });
});
