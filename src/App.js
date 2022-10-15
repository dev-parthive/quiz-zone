import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Questions from './Components/Questions/Questions';
import Statics from './Components/Statics/Statics';
import Topic from './Components/Topics/Topic';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        loader: async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topic></Topic>
      },
      {
        path: '/:id',
        loader: async ({params}) =>{
          return  fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <Questions></Questions>
      },
      {path: '/statics',
      element: <Statics></Statics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },{
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router
      }></RouterProvider>
      
    </div>
  );
}

export default App;
