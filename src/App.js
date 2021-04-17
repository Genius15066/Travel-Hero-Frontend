import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import Booking from "./components/BookingPage/Booking/Booking";
import Review from "./components/BookingPage/Review/Review";
import BookingList from "./components/BookingPage/BookingList/BookingList";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService/AddService";

function App() {
  return (
    <div> 
        <Router>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/booking">
              <Booking/>
            </Route>
            <Route path="/booking/review">
              <Review/>
            </Route>
            <Route path="/booking/book">
              <Booking/>
            </Route>
            <Route path="/booking/bookinglist">
              <BookingList/>
            </Route>


            <Route exact path="/admin">
              <OrderList/>
            </Route>
            <Route path="/admin/orderList">
              <OrderList/>
            </Route>
            <Route path="/admin/addService">
              <AddService/>
            </Route>
            <Route path="/booking/bookinglist">
              <BookingList/>
            </Route>
            <Route path="/booking/bookinglist">
              <BookingList/>
            </Route>

          </Switch>
        </Router>   
    </div>
  );
}

export default App;
