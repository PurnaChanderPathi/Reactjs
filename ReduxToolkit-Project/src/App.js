import './App.css';
import DashBoard from './Component/DashBoard';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from './Component/RootLayout';
import Cart from './Component/CartGo';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  )
  
  )
  
    return (
      <div className='App' >
     <RouterProvider router={router}/>
      </div>
    );
  }

export default App;
