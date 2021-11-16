import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  );
};

export default App;
