import { Link } from 'react-router-dom';

function Post(props) {
  let content = props.content;
  console.log(content)
  let id = props.id;

  return (
    <div>
      {id}
      <Link to={`/${props.category}/${id}`}>{content.title}</Link>
      {content.nickname}
      {content.review}
    </div>
  );
}

export default Post;
