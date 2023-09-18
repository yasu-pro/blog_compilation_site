import * as React from "react"
import { PageProps, graphql, HeadFC } from "gatsby"
import postDataType from "../types/postDataType"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogArchive from "../components/BlogArchive"

interface WpPostData {
  allWpPost: {
    edges: {
      node: postDataType;
    }[]
  }
}

const IndexPage: React.FC<PageProps<WpPostData>> = ({ data }) => {
  const postsData = data.allWpPost.edges;

  return (
    <Layout>
      <BlogArchive postsData={ postsData } />
    </Layout>
  )
}

export const Head: HeadFC<WpPostData> = () => <Seo />

export default IndexPage;

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          title
          link
          date(formatString: "YYYY年MM月DD日")
          slug
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              link
            }
          }
        }
      }
    }
  }
`
