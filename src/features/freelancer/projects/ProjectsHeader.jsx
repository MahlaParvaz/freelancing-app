import FilterDropDown from '../../../ui/FilterDropDown';
import useCategories from '../../../hooks/useCategories';
import Filter from '../../../ui/Filter';

const sortOptions = [
  { label: 'مرتب سازی (جدیدترین)', value: 'latest' },
  { label: 'مرتب سازی(قدیمی ترین )', value: 'earliest' },
];
const statusOptions = [
  {
    label: 'همه',
    value: 'ALL',
  },
  {
    label: 'باز',
    value: 'OPEN',
  },
  {
    label: 'بسته',
    value: 'CLOSED',
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: 'ALL', label: 'دسته بندی (همه)' },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;
