import ProposalsTable from '../features/Project/ProposalsTable';
import useProject from '../features/Project/useProject';
import ProjectHeader from '../features/project/ProjectHeader';

import Loading from '../ui/Loading';

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}
export default Project;
