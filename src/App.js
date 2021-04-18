import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import Booking from "./components/BookingPage/Booking/Booking";
import Review from "./components/BookingPage/Review/Review";
import BookingList from "./components/BookingPage/BookingList/BookingList";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService/AddService";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route path="/booking/review">
            <Review />
          </Route>
          <Route path="/booking/book/:id">
            <Booking />
          </Route>
          <Route path="/booking/bookinglist">
            <BookingList />
          </Route>


          <Route exact path="/admin">
            <OrderList />
          </Route>
          <Route path="/admin/orderList">
            <OrderList />
          </Route>
          <Route path="/admin/addService">
            <AddService />
          </Route>
          <Route path="/admin/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="/booking/bookinglist">
            <BookingList />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
