interface postDataType {
    id: string;
    title: string;
    link: string;
    date: string;
    slug: string;
    content: string;
    featuredImage: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
    categories: {
        nodes: {
            name: string;
            link: string;
        }[];
    };
}

export default postDataType;
