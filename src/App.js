import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Марья",
  lastName: "Моревна",
};

function getGreeting(user) {
  if (user) {
    return <h1>Здравствуй, {formatName(user)}!</h1>;
  }
  return <h1>Здравствуй, незнакомец.</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>
        <h1>Здравствуй, {formatName(user)}!</h1>
      </h1>
    </div>
  );
}

export default App;
