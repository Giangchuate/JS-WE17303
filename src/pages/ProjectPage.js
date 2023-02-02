import ProjectList from "../components/ProjectList";
import { projects } from "../data";

const ProjectPage = () => {
  return `
    <div>${ProjectList(projects)}</div>
  `;
};

export default ProjectPage;
