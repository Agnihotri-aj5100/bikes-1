import React from "react";
import Slider from "../component/global/glide-slider";
import "./rider.css";

const slides = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3484/09ee/a70020f8016bccb42b9729d34cd2bd2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZt97Z1H6y7qUaBmlb1FOsKtzpgf0BAraZ280l~ZeUtonWr0BbMmeawxGNkutZeE3V2RtBu6emcSG9uAVp-FPP1gOTmxWAcwC9GojsE6DxeGWaDNVw31Gq0OK2YZZ5Cl-yleFNOJHq7jHWtbclIH5mntf9n01xhuDp~mEfJn7is-YogFtgMG77VBt0vJ6Xl~vcVA~Yo73mSFJtXcki7Vualf0PqUeChLmYMQsE09GfbnqvX0zRHRzW6~T8rrye~TKKIQNmL62Em5k7AhqJoko~3Nu4Q2hkaIvIHPPZeVTvSWFo9Cqimsu6ejls7250nRLZ7FAd37R7lCG64CqAWCGg__",
    heading: "“A beautful piece of engineering”",
    paragraph:
      "“Porta in sociis nibh turpis velit. Vitae ac in quis vel. At pretium fusce scelerisque penatibus adipis vert ctum. Vitae at ultrices euismod urna.”",
    circleImage: require("../assest/fnd.png"),
    name: "Sanjay Agnihotri, Mumbai",
    circleText: "Co-founder - Arsan",
    star: 1,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3484/09ee/a70020f8016bccb42b9729d34cd2bd2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZt97Z1H6y7qUaBmlb1FOsKtzpgf0BAraZ280l~ZeUtonWr0BbMmeawxGNkutZeE3V2RtBu6emcSG9uAVp-FPP1gOTmxWAcwC9GojsE6DxeGWaDNVw31Gq0OK2YZZ5Cl-yleFNOJHq7jHWtbclIH5mntf9n01xhuDp~mEfJn7is-YogFtgMG77VBt0vJ6Xl~vcVA~Yo73mSFJtXcki7Vualf0PqUeChLmYMQsE09GfbnqvX0zRHRzW6~T8rrye~TKKIQNmL62Em5k7AhqJoko~3Nu4Q2hkaIvIHPPZeVTvSWFo9Cqimsu6ejls7250nRLZ7FAd37R7lCG64CqAWCGg__",
    heading: "“A beautful piece of engineering”",

    paragraph:
      "“Porta in sociis nibh turpis velit. Vitae ac in quis vel. At pretium fusce scelerisque penatibus adipis vert ctum. Vitae at ultrices euismod urna.”",
    circleImage: require("../assest/fnd.png"),
    star: 4,
    name: "Sanjay Agnihotri, Mumbai",
    circleText: "Co-founder - Arsan",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3484/09ee/a70020f8016bccb42b9729d34cd2bd2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZt97Z1H6y7qUaBmlb1FOsKtzpgf0BAraZ280l~ZeUtonWr0BbMmeawxGNkutZeE3V2RtBu6emcSG9uAVp-FPP1gOTmxWAcwC9GojsE6DxeGWaDNVw31Gq0OK2YZZ5Cl-yleFNOJHq7jHWtbclIH5mntf9n01xhuDp~mEfJn7is-YogFtgMG77VBt0vJ6Xl~vcVA~Yo73mSFJtXcki7Vualf0PqUeChLmYMQsE09GfbnqvX0zRHRzW6~T8rrye~TKKIQNmL62Em5k7AhqJoko~3Nu4Q2hkaIvIHPPZeVTvSWFo9Cqimsu6ejls7250nRLZ7FAd37R7lCG64CqAWCGg__",
    heading: "“A beautful piece of engineering”",

    paragraph:
      "“Porta in sociis nibh turpis velit. Vitae ac in quis vel. At pretium fusce scelerisque penatibus adipis vert ctum. Vitae at ultrices euismod urna.”",
    circleImage: require("../assest/fnd.png"),

    star: 4,
    name: "Sanjay Agnihotri, Mumbai",
    circleText: "Co-founder - Arsan",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3484/09ee/a70020f8016bccb42b9729d34cd2bd2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZt97Z1H6y7qUaBmlb1FOsKtzpgf0BAraZ280l~ZeUtonWr0BbMmeawxGNkutZeE3V2RtBu6emcSG9uAVp-FPP1gOTmxWAcwC9GojsE6DxeGWaDNVw31Gq0OK2YZZ5Cl-yleFNOJHq7jHWtbclIH5mntf9n01xhuDp~mEfJn7is-YogFtgMG77VBt0vJ6Xl~vcVA~Yo73mSFJtXcki7Vualf0PqUeChLmYMQsE09GfbnqvX0zRHRzW6~T8rrye~TKKIQNmL62Em5k7AhqJoko~3Nu4Q2hkaIvIHPPZeVTvSWFo9Cqimsu6ejls7250nRLZ7FAd37R7lCG64CqAWCGg__",
    heading: "“A beautful piece of engineering”",

    paragraph:
      "“Porta in sociis nibh turpis velit. Vitae ac in quis vel. At pretium fusce scelerisque penatibus adipis vert ctum. Vitae at ultrices euismod urna.”",
    circleImage: require("../assest/fnd.png"),

    star: 4,
    name: "Sanjay Agnihotri, Mumbai",
    circleText: "Co-founder - Arsan",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3484/09ee/a70020f8016bccb42b9729d34cd2bd2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZt97Z1H6y7qUaBmlb1FOsKtzpgf0BAraZ280l~ZeUtonWr0BbMmeawxGNkutZeE3V2RtBu6emcSG9uAVp-FPP1gOTmxWAcwC9GojsE6DxeGWaDNVw31Gq0OK2YZZ5Cl-yleFNOJHq7jHWtbclIH5mntf9n01xhuDp~mEfJn7is-YogFtgMG77VBt0vJ6Xl~vcVA~Yo73mSFJtXcki7Vualf0PqUeChLmYMQsE09GfbnqvX0zRHRzW6~T8rrye~TKKIQNmL62Em5k7AhqJoko~3Nu4Q2hkaIvIHPPZeVTvSWFo9Cqimsu6ejls7250nRLZ7FAd37R7lCG64CqAWCGg__",
    heading: "“A beautful piece of engineering”",

    paragraph:
      "“Porta in sociis nibh turpis velit. Vitae ac in quis vel. At pretium fusce scelerisque penatibus adipis vert ctum. Vitae at ultrices euismod urna.”",
    circleImage: require("../assest/fnd.png"),

    star: 4,
    name: "Sanjay Agnihotri, Mumbai",
    circleText: "Co-founder - Arsan",
  },
];

const RiderSlider = () => {
  return (
    <div className="main-box">
      <Slider slides={slides} />
    </div>
  );
};

export default RiderSlider;
