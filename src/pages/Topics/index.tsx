import { Box } from "@mui/material";
import Topic from "../../components/Topic";
import "./style.css";

const topicsData = [
  {
    title: "JavaScript",
    image:
      "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    slug: "123",
  },
  {
    title: "ReactJS",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    slug: "1234",
  },
  {
    title: "HTML 5",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
    slug: "13323",
  },
  {
    title: "CSS 3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
    slug: "14523",
  },
];

const Topics = () => {
  return (
    <Box className="topics-section">
      {topicsData.map((topic) => (
        <Topic data={topic} />
      ))}
    </Box>
  );
};

export default Topics;
