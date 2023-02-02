import { projects } from "../data";
const ProjectDetail = ({ id }) => {
  const element = projects.find((project) => project.id == id);
  if (!element) return null;
  return `<h1> ${element.name}</h1>
  `;
};

export default ProjectDetail;
