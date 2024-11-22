import "./style.css";
import { Link } from "react-router-dom";

type TOPIC_TYPE = {
  title: string;
  image: string;
  slug: string;
};

type PROP_TYPE = {
  data: TOPIC_TYPE;
};

const Topic = ({ data }: PROP_TYPE) => {
  return (
    <Link to={`/topics/${data.slug}`} className="topic-box">
      <img src={data.image} alt={data.title} className="topic-image" />
      <h4 className="topic-title">{data.title}</h4>
    </Link>
  );
};

export default Topic;
