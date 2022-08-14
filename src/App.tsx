import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Routs from './routes/Routes';
import './styles/style.scss';

const store = setupStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routs />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
