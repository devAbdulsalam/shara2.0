import React from 'react'

const About = () => {
  return (
		<section className="p-10">
			<div className="pt-10 text-center">
				<h1 className="text-2xl font-semibold p-2">About Shara</h1>
				<p>A Clean, Healthy and Wealthy City for All.</p>
				<div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 space-x-4 text-center md:w-10/12 mx-auto">
					<div className="p-2 w-full ">
						<button className=" feature-1 rounded-full text-center text-white text-2xl font-semibold">
							<p className="p-4 px-6">1</p>
						</button>
						<h2 className="text-xl font-bold my-2">
							Sort waste from Households
						</h2>
						<div className="mt-2">
							<p className="leadinig text-justify">
								We have established a scalable, environmentally compliant and
								profitable system for collecting, recycling and processing
								recyclable materials. We employ 20% of our 485 employees from
								lower income communities who are eager to earn an education that
								will allow them to support their families with dignity.
							</p>
						</div>
					</div>
					<div className="p-2 w-full">
						<button className=" feature-2 rounded-full text-center text-white text-2xl font-semibold">
							<p className="p-4 px-6">2</p>
						</button>
						<h2 className="text-xl font-bold my-2">User friendly.</h2>
						<div className="mt-2">
							<p className="leadinig text-justify">
								Popular Products: MSW/Municipal Solid Waste/Recycling
								Services/Medical Waste Disposal /Industrial waste disposal,
								Dangerous radioactive waste disposal.
							</p>
						</div>
					</div>
					<div className="p-2 w-full">
						<button className="feature-3 text-center rounded-full text-white text-2xl font-semibold">
							<p className="p-4 px-6">3</p>
						</button>
						<h2 className="text-xl font-bold my-2">
							A complete waste management solution
						</h2>
						<div className="mt-2">
							<p className="leadinig text-justify">
								Shara is a complete waste management solution for every type of
								establishment. It integrates different options and similar
								activities as transport, collection, donation and
								disposal/recycling in one application.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About