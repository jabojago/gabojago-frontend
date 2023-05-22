import { useState, useEffect } from 'react';
import Post from './Post'

function Qna(props) {
  const [page, setPage] = useState(0);
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
    
    fetch(`http://gabojago.shop/api/qna/posts?page=${page}&size=10`)
    .then(response => response.json())
    .then(response => {
      let contents = response.content;
      let array = [];

      contents.forEach(content => {
        array.push(<Post 
          key={content.articleId} 
          id={content.articleId}
          content={content}
          category='qna'>

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

export default Qna;
