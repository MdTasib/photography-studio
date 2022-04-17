import React from "react";
import icon1 from "../../assets/icon/customer.png";
import icon2 from "../../assets/icon/cemera.png";
import icon3 from "../../assets/icon/trophy.png";
import icon4 from "../../assets/icon/video-camera.png";

const Archivements = () => {
	const archivements = [
		{
			id: 1,
			img: icon1,
			title: "Happy Customers",
			count: "965",
		},
		{
			id: 2,
			img: icon2,
			title: "Photo Sessions",
			count: "5k+",
		},
		{
			id: 3,
			img: icon4,
			title: "video Sessions",
			count: "2k+",
		},
		{
			id: 4,
			img: icon3,
			title: "Archive Photographs",
			count: "30k+",
		},
	];
	return (
		<div className='bg-light py-5'>
			<div className='container'>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-4'>
					{archivements.map(achive => (
						<div key={achive.id} className='col'>
							<div className='card bg-light text-center border-0 h-100'>
								<img
									style={{ width: "70px" }}
									src={achive.img}
									className='card-img-top mx-auto'
									alt='...'
								/>
								<div className='card-body'>
									<h5 className='card-title'>{achive.count}</h5>
									<p className='card-text'>{achive.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Archivements;
