import './styles.css';
import { Repo } from '../../queries/repo/types';

type CardProps = {
  repo: Repo
  addToFavorites: (id: number) => void;
};

const Card = ({ repo, addToFavorites }: CardProps) => {
  const handleCompleteTodo = () => {
    addToFavorites(repo.id)
  };

  return (
    <div className='card'>
      <h2>{repo.name}</h2>
      <div className='card-buttons'>
        <button onClick={handleCompleteTodo}>Favoritar</button>
      </div>
    </div>
  );
};

export default Card;
