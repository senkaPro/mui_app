import Article from "../types/Article";


const getArticlesApi = () => {
    const data = fetch('/data/articles.json')
        .then(res => res.json())
        .then((data: Article[]) => data);
    return data;
}

export { getArticlesApi }