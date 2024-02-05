import { useQuery } from '@tanstack/react-query';
import api from '../../services/api';
import { Repo } from './types';

const getRepos = async () => {
  const { data } = await api.get<Repo[]>('/users/ThalesDFerreira/repos');
  return data;
};

const useFetchRepos = () => {
  return useQuery({
    queryKey: ['repos'],
    queryFn: () => getRepos(),
  });
};

export default useFetchRepos;
