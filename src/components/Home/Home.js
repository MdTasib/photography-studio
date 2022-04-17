import React from "react";
import Archivements from "../Archivements/Archivements";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<Archivements />
		</div>
	);
};

export default Home;
