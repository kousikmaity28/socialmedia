import './App.css'
import { Route,Routes } from 'react-router-dom'
import SigninForm from './_auth/froms/SigninForm'
import Home from './_root/pages/Home'
import SignupForm from './_auth/froms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {

  return (
    <>
    <main className="flex h-screen">
      <Routes>
        {/* public routs */}
        <Route element={<AuthLayout/>}>
          <Route path='sign-in' element={<SigninForm/>}/>
          <Route path='sign-up' element={<SignupForm/>}/>
        </Route>

        {/* privet routes */}
        <Route element={<RootLayout/>}>
          <Route index element={ <Home/>}/>
        </Route>
        
      </Routes>
    </main>
    
    </>
  )
}

export default App
