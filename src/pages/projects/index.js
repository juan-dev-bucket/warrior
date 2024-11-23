import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image'

export default function Projects({ data }) {
    const projects = data.projects.nodes
    const contact = data.contact
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects</h1>
                <p>Projects & websites  I've created</p>
                <div className={styles.projects}>
                    {projects.map((project) => (
                        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                        <div>
                            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`query ProjectQuery {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
        }
      }
      id
    }
  }
    contact: site{
        siteMetadata{
            contact
        }
    }
}`