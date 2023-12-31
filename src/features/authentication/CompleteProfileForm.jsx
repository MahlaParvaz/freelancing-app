import toast from 'react-hot-toast';
import RadioInput from '../../ui/RadioInput';
import TextField from '../../ui/TextField';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
function CompleteProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (!user.status !== 2) {
        navigate('/');
        toast('پروفایل شما در انتظار تایید است', { icon: '👏' });
        return;
      }
      if (user.role === 'OWNER') return navigate('/owner');
      if (user.role === 'FREELANCER') return navigate('/freelancer');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="ایمیل"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex item-center  justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role === 'OWNER'}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              id="FREELANCER"
              name="role"
              checked={role === 'FREELANCER'}
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
