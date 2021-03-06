import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import CheckOut from "./components/CheckOut/CheckOut";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Singup from "./components/Singup/Singup";

// set context auth user
export const UserAuth = createContext();

function App() {
	const [loginUser, setLoginUser] = useState({});
	return (
		<>
			<UserAuth.Provider value={[loginUser, setLoginUser]}>
				<Navbar />
				<Toaster />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route
						path='checkout/:id'
						element={
							<RequireAuth>
								<CheckOut />
							</RequireAuth>
						}
					/>
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</UserAuth.Provider>
		</>
	);
}

export default App;
