import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
