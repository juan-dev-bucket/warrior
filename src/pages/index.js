import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css"; 
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
          <div>
              <h2>Design</h2>
              <h3>Hi people</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <Link className={styles.btn} to="/about">More about me</Link>
              <br/>
              <Link className={styles.btn} to="/projects">Portfolio</Link>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }`