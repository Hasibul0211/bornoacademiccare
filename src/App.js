import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Author from './components/Author/Author';
import OverView from './components/OverView/OverView';
import StudentDetails from './components/StudentDetails/StudentDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='home/' element={<Home></Home>} >
          <Route index element={<OverView></OverView>} />
          <Route path='author' element={<Author></Author>}></Route>
          {/* <Route path='overview' element={<OverView></OverView>}></Route> */}
          <Route path='student-details' element={<StudentDetails></StudentDetails>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
