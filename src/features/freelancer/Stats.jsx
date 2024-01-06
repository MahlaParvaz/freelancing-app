import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from 'react-icons/hi';
import Stat from '../../ui/Stat';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbersWithComma';

function Stats({ proposals }) {
  const numOfProjects = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2).length;
  const balance = proposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={acceptedProposals}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title=" کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
