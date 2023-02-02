const ProjectList = (project) => {
  if (!Array.isArray(project) || project.length === 0) return null;
  return `<div>${project
    .map((item) => `<a href="/project/${item.id}"><div>${item.name}</div></a>`)
    .join("")}</div>`;
};

export default ProjectList;
