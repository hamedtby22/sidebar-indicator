import { Routes,Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
//component
import Dashboard from './pages/Dashboard';

//styles
import './App.scss';
import Layout from './Layout/Layout';
import Started from './pages/Started';
import Calendar from './pages/Calendar';
import User from './pages/User';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/started' element={<Started />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/User' element={<User />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
