import { useState, useEffect } from 'react';
import Post from './Post'

function PostList(props) {
  const [page, setPage] = useState(0);
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
    
    fetch(`http://gabojago.shop/api/${props.category}/posts?page=${page}&size=10`)
    .then(response => response.json())
    .then(response => {
      let contents = response.content;
      let array = [];
      let id;

      console.log(contents);

      contents.forEach(content => {
        if(content.articleId){
          id = content.articleId;
        }
        else{
          id = content.id;
        }
        
        array.push(<Post
          key={id}
          id={id} 
          content={content}
          category={props.category}>
          </Post>)
      });

      setContents(array);
    })
  }, [page, props.category]);

  return (
    <div>
      {contents}
    </div>
  );
}

export default PostList;
