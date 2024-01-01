import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProjectsApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectsApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success('پروژه با موفقیت حذف شد');
      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { removeProject, isDeleting };
}
