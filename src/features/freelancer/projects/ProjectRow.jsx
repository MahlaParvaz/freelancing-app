import { useState } from 'react';
import Table from '../../../ui/Table';
import truncateText from '../../../utils/truncateText';
import { toPersianNumbersWithComma } from '../../../utils/toPersianNumbersWithComma';
import toLocalDateShort from '../../../utils/toLocalDateShort';
import { MdAssignmentAdd } from 'react-icons/md';
import CreateProposal from '../../proposals/CreateProposal';
import Modal from '../../../ui/Modal';

const projectStatus = {
  OPEN: {
    label: 'باز',
    className: 'badge--success',
  },
  CLOSED: {
    label: 'بسته',
    className: 'badge--danger',
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
