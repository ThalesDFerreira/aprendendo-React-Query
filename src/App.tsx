import './App.css';
import useFetchRepos from './queries/repo';
import Card from './components/Card';

function App() {
  const { data } = useFetchRepos();
  console.log(data);

  return (
    <div className='App'>
      {data?.map((repo) => (
        <Card key={repo.id} repo={repo} addToFavorites={() => {}} />
      ))}
    </div>
  );
}

export default App;
