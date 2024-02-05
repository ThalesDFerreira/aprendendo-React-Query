import './App.css';
import useFetchRepos from './queries/repo';

function App() {
  const { data } = useFetchRepos();
  console.log(data);

  return <div></div>;
}

export default App;
