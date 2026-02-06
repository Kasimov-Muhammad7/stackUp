import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
