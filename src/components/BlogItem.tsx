import React from "react"
import postDataType from "../types/postDataType";
import { useStaticQuery, graphql } from "gatsby"

const BlogItem: React.FC<{ postData: postDataType }> = ({ postData }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    baseURl
                }
            }
        }
    `)

    const createCategoryTag: React.FC<{ categoryArray: string[] }> = ({ categoryArray }) => {
        return (
            categoryArray
                .filter((categoryData) => categoryData !== null)
                .map((categoryData, index) => (
                    <span key={index}>{categoryData}</span>
            ))
        )
    }

    const baseUrl = data.site.siteMetadata.baseURl
    const postUrl = `${baseUrl}${postData.link}`
    const blogTitle = postData.title
    const blogContent = postData.content
    const postDate = postData.date
    const categoryArray: string[] = postData.categories.nodes.map(categoryData => categoryData.name);

    let postThumbnailUrl: string = "/images/example.png";
    if (postData.featuredImage && postData.featuredImage.node.sourceUrl !== null) {
        postThumbnailUrl = postData.featuredImage.node.sourceUrl;
    }
    let postThumbnailAlt: string = "ブログ画像"
    if (postData.featuredImage && postData.featuredImage.node.altText !== null) {
        postThumbnailAlt = postData.featuredImage.node.altText;
    }

    return (
        <li>
            <article>
                <a href={postUrl} target="_blank">
                    <div>
                        <img src={postThumbnailUrl} alt={postThumbnailAlt} />
                    </div>
                    <div>
                        <div>
                            <span>{postDate}</span>
                            <div>
                                {createCategoryTag({ categoryArray })}
                            </div>
                        </div>
                        <div>
                            <h2>{blogTitle}</h2>
                            <p>{blogContent}</p>
                        </div>
                    </div>
                </a>
            </article>
        </li>
    )
}

export default BlogItem
