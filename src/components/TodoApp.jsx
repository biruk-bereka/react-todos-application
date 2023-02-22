import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Layout from './Layout';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);
export default TodoApp;
