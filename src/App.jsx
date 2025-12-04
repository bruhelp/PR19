import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <h1>Моё React приложение</h1>
      <Greeting />

      <UserCard
        name="Евгений Булголюбов"
        role="Администратор"
        avatarUrl="https://i.pinimg.com/736x/93/08/19/930819cc7c86fbf88174fb9acfd88338.jpg"
        isOnline={true}
      />

      <TaskList />
    </div>
  );
}

export default App;