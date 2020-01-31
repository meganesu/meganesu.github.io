import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/';
import styles from './blog.module.css'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt(format: PLAIN)
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <ol className={styles.postList}>
        {
          data.allMarkdownRemark.edges.map(edge => (
            <li className={styles.post}>
              <h2>{ edge.node.frontmatter.title }</h2>
              <p>{ edge.node.frontmatter.date }</p>
              <p>{ edge.node.excerpt }</p>
            </li>
          ))
        }
      </ol>
    </Layout>
  )
}

export default Blog