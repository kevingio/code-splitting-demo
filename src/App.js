import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import BigVendor from './components/BigVendor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='big-vendor' element={<BigVendor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
