import { useQuery } from '@tanstack/react-query';
import api from '../../services/api';

const getRepos = async () => {
  const { data } = await api.get('/users/ThalesDFerreira/repos');
  return data;
};

const useFetchRepos = () => {
  return useQuery(['repos'], getRepos);
};

export default useFetchRepos;