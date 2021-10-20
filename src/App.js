import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Doctors from './components/Doctors/Doctors';
import Faq from './components/FAQ/Faq';
import BlogHome from './components/BlogHome/BlogHome';
import MakeAppointment from './components/MakeAppointment/MakeAppointment';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <BlogHome path="/blog"></BlogHome>

            <Route path="/faq">
              <Faq></Faq>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/doctor/:id">
              <MakeAppointment></MakeAppointment>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
