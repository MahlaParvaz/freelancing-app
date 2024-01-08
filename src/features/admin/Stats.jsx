import { HiOutlineViewGrid, HiCurrencyDollar, HiUser } from 'react-icons/hi';
import Stat from '../../ui/Stat';

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
