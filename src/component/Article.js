import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'
import { async } from 'q';

function Article(props) {
  const [page, setPage] = useState(0);
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
    console.log(props);
    fetch(`http://gabojago.shop/api/articles/posts?page=${page}&size=10`)
    .then(response => response.json())
    .then(response => {
      let contents = response.content;
      let array = [];

      contents.forEach(content => {
        array.push(<Post 
          key={content.articleId}
          id={content.articleId}
          content={content}
          category='articles'>

          </Post>)
      });

      setContents(array);
    })
  }, [page]);

  return (
    <div>
      {contents}
    </div>
  );
}

export default Article;
