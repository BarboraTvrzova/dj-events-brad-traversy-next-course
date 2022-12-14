import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About DJ events">
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events</p>
      <p>VErsion: 1.0.0.</p>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default AboutPage;
