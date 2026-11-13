import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/archive" element={<Archive />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
