import { Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Singup from "./components/Singup/Singup";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='checkout/:id' element={<CheckOut />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singup />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
