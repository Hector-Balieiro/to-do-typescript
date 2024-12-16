import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes.tsx';
import { DataManipulation } from "./context/context";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataManipulation>
      <RouterProvider router={router}/>
    </DataManipulation>
  </StrictMode>,
)
