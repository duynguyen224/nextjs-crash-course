import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
    return (
        <div className={articleStyles.grid}>
            {articles.map((item, index) => (
                <ArticleItem article={item} key={index}/>
            ))}
        </div>
    );
}

export default ArticleList;
