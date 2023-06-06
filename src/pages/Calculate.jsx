import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	plasticWRate,
	metalWRate,
	generalWRate,
	organicWRate,
	NonRWRate,
} from '../Data';

const Calculate = () => {
	const navigate = useNavigate();
	const [plasticWaste, setPlasticWaste] = useState('0');
	const [metalWaste, setMetalWaste] = useState('0');
	const [organicWaste, setOrganicWaste] = useState('0');
	const [generalWaste, setGeneralWaste] = useState('0');
	const [nonRMaterialWaste, setNRMaterialWaste] = useState('0');
	const [alert, setAlert] = useState('invisible');
	const [total, setTotal] = useState(null);
	const [totalKg, setTotalKg] = useState(null);
	const [payment, setPayment] = useState(false);
	// const [active, setActive] = useState(false)
	// const showDesc = id =>{
	//   if(active === id){
	//      return setActive(null)
	//   }
	//     setActive(id)
	// }

	const clearValue = () => {
		window.location.reload();
	};
	const calculateTotal = () => {
		const GeneralWprice = Number(generalWaste) * generalWRate;
		const OrganicWprice = Number(organicWaste) * organicWRate;
		const PlasticWprice = Number(plasticWaste) * plasticWRate;
		const MetalWprice = Number(metalWaste) * metalWRate;
		const NonRecycleWprice = Number(nonRMaterialWaste) * NonRWRate;
		setTotal(
			PlasticWprice +
				MetalWprice +
				OrganicWprice +
				GeneralWprice -
				NonRecycleWprice
		);
		// //Total Kg of waste
		setTotalKg(
			Number(metalWaste) +
				Number(plasticWaste) +
				Number(organicWaste) +
				Number(nonRMaterialWaste)
		);
		if (total === 0) {
			setAlert('visible');
			setTimeout(() => {
				setAlert('invisible');
			}, 2000);
		} else {
			setPayment(true);
		}
	};

	const handlePay = () => {
		if (total < 0) {
			navigate(`/pay/${total.toString().substring(1)}`);
		}
	};
	const closePayment = () => {
		setPayment(false);
	};
	return (
		<div>
			<div className="mt-14 py-8 mx-2 relative">
				<div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden justify-around p-0 mx-auto min-w-sm lg:w-10/12">
					<div className="mx-auto">
						<h2 className="text-2xl font-semibold text-gray-700 text-center p">
							Select Your Waste
						</h2>
						<p className="text-sm text-gray-600 text-center">
							Green total balance means you would be paid and red means you are
							to pay us for the service renderd
						</p>
					</div>
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-hidden">
								<table className="min-w-full">
									<thead className="bg-gray-300 border-b">
										<tr>
											<th
												scope="col"
												className="text-sm md:text-xl font-medium text-gray-900 px-6 py-4 text-left"
											>
												Waste
											</th>
											<th
												scope="col"
												className="text-sm md:text-xl font-medium text-gray-900 px-6 py-4 text-left"
											>
												&#8358;/1kg
											</th>
											<th
												scope="col"
												className="text-sm md:text-xl font-medium text-gray-900 px-6 py-4 text-center"
											>
												Kg
											</th>
											<th
												scope="col"
												className="text-sm md:text-xl font-medium text-gray-900 px-6 py-4 text-center"
											>
												<span className="hidden md:inline-block">Amount</span>
												Earn
											</th>
										</tr>
									</thead>
									<tbody>
										<tr
											htmlFor="metal"
											className="transition duration-300 ease-in-out hover:bg-green-200 border-b bg-green-100 border-green-200"
										>
											<td className="text-sm md:text-xl font-semiblod text-gray-900  px-6 py-4 whitespace-nowrap">
												Metal
											</td>
											<td className="text-sm md:text-xl font-light text-gray-900 px-6 py-4 whitespace-nowrap">
												{metalWRate}&#8358;
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
												<input
													type="number"
													id="metal"
													className="text-lg w-20 text-center md:max-w-56 font-normal text-gray-500 bg-gray-50 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
													value={metalWaste}
													onChange={(e) => setMetalWaste(e.target.value)}
												/>
											</td>
											<td className="text-sm md:text-xl font-bold text-gray-900  px-6 py-4 whitespace-nowrap text-center">
												&#8358;{Number(metalWaste) * metalWRate}
											</td>
										</tr>
										<tr
											htmlFor="plastic"
											className="transition duration-300 ease-in-out hover:bg-gray-200 border-b bg-gray-100 border-gray-200"
										>
											<td className="text-sm md:text-xl font-semiblod text-gray-900  px-6 py-4 whitespace-nowrap">
												Plastic
											</td>
											<td className="text-sm md:text-xl font-light text-gray-900 px-6 py-4 whitespace-nowrap">
												{plasticWRate}&#8358;
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
												<input
													type="number"
													id="metal"
													className="text-lg w-20 text-center md:max-w-56 font-normal text-gray-500 bg-gray-50 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
													value={plasticWaste}
													onChange={(e) => setPlasticWaste(e.target.value)}
												/>
											</td>
											<td className="text-sm md:text-xl font-bold text-gray-900  px-6 py-4 whitespace-nowrap text-center">
												&#8358;{Number(plasticWaste) * plasticWRate}
											</td>
										</tr>
										<tr className="transition duration-300 ease-in-out hover:bg-green-200 border-b bg-green-100 border-green-200">
											<td className="text-sm md:text-xl font-semiblod text-gray-900  px-6 py-4 whitespace-nowrap">
												Organic
											</td>
											<td className="text-sm md:text-xl font-light text-gray-900 px-6 py-4 whitespace-nowrap">
												{organicWRate}&#8358;
											</td>
											<td className="text-sm text-gray-900 font-light md:px-6 px-4 py-4 whitespace-nowrap text-center">
												<input
													type="number"
													id="metal"
													className="text-lg w-20 text-center md:max-w-56 font-normal text-gray-500 bg-gray-50 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
													value={organicWaste}
													onChange={(e) => setOrganicWaste(e.target.value)}
												/>
											</td>
											<td className="text-sm md:text-xl font-bold text-gray-900  px-6 py-4 whitespace-nowrap text-center">
												&#8358;{Number(organicWaste) * organicWRate}
											</td>
										</tr>
										<tr className="transition duration-300 ease-in-out hover:bg-gray-200 border-b bg-gray-100 border-gray-200">
											<td className="text-sm md:text-xl font-semiblod text-gray-900  px-6 py-4 whitespace-nowrap">
												Papers
											</td>
											<td className="text-sm md:text-xl font-light text-gray-900 px-6 py-4 whitespace-nowrap">
												{generalWRate}&#8358;
											</td>
											<td className="text-sm text-gray-900 font-light md:px-6 px-4 py-4 whitespace-nowrap text-center">
												<input
													type="number"
													id="paper"
													className="text-lg w-20 text-center md:max-w-56 font-normal text-gray-500 bg-gray-50 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
													value={generalWaste}
													onChange={(e) => setGeneralWaste(e.target.value)}
												/>
											</td>
											<td className="text-sm md:text-xl font-bold text-gray-900  px-6 py-4 whitespace-nowrap text-center">
												&#8358;{Number(generalWaste) * generalWRate}
											</td>
										</tr>
										<tr className="transition duration-300 ease-in-out hover:bg-red-200 border-b bg-red-100 border-red-200">
											<td className="text-sm md:text-xl font-semiblod text-gray-900  px-6 py-4 whitespace-nowrap">
												Non Recyclable
											</td>
											<td className="text-sm md:text-xl font-light text-gray-900 px-6 py-4 whitespace-nowrap">
												{organicWRate}&#8358;
											</td>
											<td className="text-sm text-gray-900 font-light md:px-6 px-4 py-4 whitespace-nowrap text-center">
												<input
													type="number"
													id="metal"
													className="text-lg w-20 text-center md:max-w-56 font-normal text-gray-500 bg-gray-50 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
													value={nonRMaterialWaste}
													onChange={(e) => setNRMaterialWaste(e.target.value)}
												/>
											</td>
											<td className="text-sm md:text-xl font-bold text-gray-900  px-6 py-4 whitespace-nowrap text-center">
												&#8358;{Number(nonRMaterialWaste) * NonRWRate}
											</td>
										</tr>
										<tr className="transition duration-300 ease-in-out hover:bg-gray-100 border-b bg-blue-100 border-blue-200">
											<td
												className="px-6 py-4 whitespace-nowrap text-sm md:text-xl font-medium text-gray-900 cursor-pointer"
												onClick={calculateTotal}
											>
												Total Waste
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												.
											</td>
											<td className="text-sm md:text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap text-center">
												{totalKg} Kg
											</td>
											<td
												className={`text-sm md:text-xl font-bold text-gray-900 px-6 py-4 whitespace-nowrap text-center ${
													total >= 0 ? 'text-green-500 ' : 'text-red-500'
												}`}
											>
												{total >= 0 ? (
													<p className="">
														{' '}
														EARN : <span className="">{total}&#8358;</span>{' '}
													</p>
												) : (
													<p className="">
														{' '}
														PAY :{' '}
														<span className="">
															{total.toString().substring(1)}&#8358;
														</span>
													</p>
												)}
											</td>
										</tr>
									</tbody>
								</table>
								<p>{alert}</p>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						{payment ? (
							<div
								className={`${
									total >= 0 ? 'text-green-500 ' : 'text-red-500'
								} py-3 text-center text-lg font-semibold`}
							>
								{total >= 0 ? (
									<>You Earn {total}&#8358; for your waste</>
								) : (
									<>
										You are to pay {total.toString().substring(1)}&#8358; for
										your waste
									</>
								)}
							</div>
						) : (
							''
						)}
					</div>
					{/* buttons */}
					<div className="p-5 w-full mx-auto flex justify-around">
						<a href="./dashboard">
							<button className="bg-red-600 text-white min-w-36 font-bold py-3 px-12 hover:bg-red-500 rounded-md">
								Cancle
							</button>
						</a>
						<button
							onClick={calculateTotal}
							className={`${
								payment ? 'hidden' : ''
							} bg-blue-600 min-w-36 text-white font-bold py-3 px-10 hover:bg-blue-500 rounded-md`}
						>
							Calculate
						</button>
						<button
							onClick={clearValue}
							className={`${
								total >= 0 ? '' : 'hidden'
							} bg-blue-600 min-w-36 text-white font-bold py-3 px-10 hover:bg-blue-500 rounded-md`}
						>
							Clear
						</button>
						{total >= 0 ? (
							<button
								onClick={() => navigate('/receive')}
								className="bg-blue-600 min-w-32 text-white font-bold py-2 px-8 hover:bg-blue-500 rounded-md"
							>
								Receive
							</button>
						) : (
							<button
								onClick={handlePay}
								className="bg-blue-600 min-w-32 text-white font-bold py-2 px-16 hover:bg-blue-500 rounded-md"
							>
								Pay
							</button>
						)}
					</div>
				</div>
				<div className="md:hidden">
					{payment ? (
						<div className="bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex place-items-center duration-500">
							<div className="text-center text-lg bg-green-50 w-11/12 p-4 mx-auto rounded-md shadow-md">
								<h5 className="font-semibold text-2xl mt-2">Total Waste</h5>
								<div
									className={`text-3xl ml-3 font-bold pt-3 ${
										total >= 0 ? 'text-green-500 ' : 'text-red-500'
									}`}
								>
									{total >= 0 ? (
										<p className="">
											EARN : <span className="">{total}&#8358;</span>
										</p>
									) : (
										<p className="">
											PAY :{' '}
											<span className="">
												{total.toString().substring(1)}&#8358;
											</span>
										</p>
									)}
								</div>
								{total >= 0 ? (
									<p className="py-3 text-lg">
										You Earn {total}&#8358; for your waste
									</p>
								) : (
									<p className="py-3 text-lg">
										You are to pay {total.toString().substring(1)}&#8358; for
										your waste
									</p>
								)}
								<button
									className="bg-red-500 px-8 min-w-32 text-white py-2 mt-2 mx-2 font-bold hover:bg-red-400 rounded-md"
									onClick={closePayment}
								>
									Cancel
								</button>
								{total >= 0 ? (
									<button
										onClick={() => navigate('/receive')}
										className="bg-blue-600 min-w-32 text-white font-bold py-2 px-8 hover:bg-blue-500 rounded-md"
									>
										Receive
									</button>
								) : (
									<button
										onClick={handlePay}
										className="bg-blue-600 min-w-32 text-white font-bold py-2 px-16 hover:bg-blue-500 rounded-md"
									>
										Pay
									</button>
								)}
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Calculate;
