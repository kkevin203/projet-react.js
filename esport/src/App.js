import './App.css';
import Button from './Button';
import FormInput from './component/formInput';

function App() {
  return (
    <div className="App">
      <FormInput
      label="prénom"
      placeholder="Votre prénom"
      color="purple"
       />
    </div>
  );
}

export default App;
