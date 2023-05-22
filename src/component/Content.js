import { useEffect, useState } from 'react';

function Content(props) {
  const [content, setContent] = useState(undefined);

  useEffect(()=>{
    let path = window.location.pathname.split('/');
    let category = path[1];
    let id = path[2];
  
    fetch(`http://gabojago.shop/api/${category}/posts/${id}`)
    .then(response => response.json())
    .then(response => setContent(response))
  }, [])
  
  return (
    <div>
      {content?.title}
      {content?.content}
      {content?.nickname}
      {content?.review}
    </div>
  );
}

export default Content;
