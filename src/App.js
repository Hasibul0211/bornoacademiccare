import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Author from './components/Author/Author';
import OverView from './components/OverView/OverView';
import StudentDetails from './components/StudentDetails/StudentDetails';
import AddStudent from './components/AddStudent/AddStudent';
import FeesRecord from './components/FeesRecord/FeesRecord';
import PastFees from './components/PastFees/PastFees';
import AddPayment from './components/AddPayment/AddPayment';
import DebitCredit from './components/DebitCredit/DebitCredit';
import SeeAuthor from './components/Author/SeeAuthor/SeeAuthor';
import SingleStudent from './extraComponent/SingleStudent/SingleStudent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='home/' element={<Home></Home>} >
          <Route index element={<OverView></OverView>} />
          <Route path='author' element={<Author></Author>}></Route>
          <Route path='add-author' element={<SeeAuthor></SeeAuthor>}></Route>
          {/* <Route path='overview' element={<OverView></OverView>}></Route> */}
          <Route path='student-details' element={<StudentDetails></StudentDetails>}></Route>
          <Route path='add-student-info' element={<AddStudent></AddStudent>}></Route>
          <Route path='fees-record' element={<FeesRecord></FeesRecord>}></Route>
          <Route path='past-record' element={<PastFees></PastFees>}></Route>
          <Route path='add-payment' element={<AddPayment></AddPayment>}></Route>
          <Route path='debit-credit' element={<DebitCredit />}></Route>
        </Route>
        <Route path='student-single-detail/:id' element={<SingleStudent />}></Route>

      </Routes>

    </div>
  );
}

export default App;
