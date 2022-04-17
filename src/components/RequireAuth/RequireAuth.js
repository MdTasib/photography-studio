import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../App";

const RequireAuth = ({ children }) => {
	const [loginUser, setLoginUser] = useContext(UserAuth);
	let location = useLocation();

	if (!loginUser.uid) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
