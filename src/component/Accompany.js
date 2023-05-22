import { useState, useEffect } from 'react';
import Post from './Post'

function Accompany(props) {
  const [page, setPage] = useState(0);
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
    
    fetch(`http://gabojago.shop/api/accompany/posts?page=${page}&size=10`)
    .then(response => response.json())
    .then(response => {
      let contents = response.content;
      let array = [];
      console.log(contents);

      contents.forEach(content => {
        array.push(<Post 
          key={content.id}
          id={content.id} 
          content={content}
          category='accompany'>
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

export default Accompany;
