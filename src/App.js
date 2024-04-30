
import './App.css';

import {  HeaderComponent } from './header/header';
import { LoginComponent } from './login/login';
import { Registration } from './regi/registation';





import ReviewForm from './screen/screen';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { SampleComponet } from './sample/sample';




function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/signup" element={<Registration></Registration>}></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/review" element={<ReviewForm></ReviewForm>}></Route>
            <Route path="/" element={<SampleComponet></SampleComponet>}></Route>

            
  </Routes>
  </BrowserRouter>
  );
}

export default App;
