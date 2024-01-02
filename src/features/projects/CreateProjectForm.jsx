import { useState } from 'react';
import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
import { TagsInput } from 'react-tag-input-component';
import RHFSelect from '../../ui/RHFSelect';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from '../../hooks/useCategories';
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: 'عنوان ضروری است',
          minLength: {
            value: 10,
            message: 'حداقل 10 کاراکتر را وارد کنید',
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: 'توضیحات ضروری است',
          minLength: {
            value: 15,
            message: 'حداقل 15 کاراکتر را وارد کنید',
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: 'بودجه ضروری است',
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <lable className="mb-2 block text-secondary-700">تگ</lable>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
