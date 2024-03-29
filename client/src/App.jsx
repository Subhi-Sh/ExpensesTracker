import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'


// layouts
import MainLayout from './Layouts/MainLayout'

// components
import Dashboard from "./components/DashBoard";
import Expenses from "./components/Expenses";
import Incomes from "./components/Incomes";
import Categories from './components/Categories';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound/>} element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='expenses' element={<Expenses />} />
      <Route path='incomes' element={<Incomes />} />
      <Route path='categories' element={<Categories />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App