import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import QuestionPage from './routes/QuestionPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>

        </Route>
        <Route path='/:tower' element={
          <QuestionPage />
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)