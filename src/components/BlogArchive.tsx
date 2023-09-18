import React from "react";
import postDataType from "../types/postDataType";
import BlogItem from "./BlogItem";

interface BlogArchiveProps {
    postsData: {
        node: postDataType;
    }[]
};

const BlogArchive: React.FC<BlogArchiveProps> = ({ postsData }) => {

    return (
        <div>
            <ul>
                {postsData.map((postData, index) => (
                    <BlogItem key={ index } postData={ postData.node } />
                ))}
            </ul>
        </div>
    );
};

export default BlogArchive;
