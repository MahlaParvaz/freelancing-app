import useOwnerProjects from './useOwnerProjects.';

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();
  return <div>ProjectTable</div>;
}

export default ProjectTable;
