import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/operate';

const App = () => (
  <>
    <Display />
    <ButtonPanel calculate={calculate} />
  </>
);

export default App;
