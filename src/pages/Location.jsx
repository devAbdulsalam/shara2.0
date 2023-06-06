import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Location = () => {
  const position = [11.8948389, 8.5364136]
  const locations = [
		{
			id: 0,
			tittle: 'kano',
			street: [
				{
					name: 'TRN',
					latitude: '11.963045600000001',
					longitude: '8.55034210353827',
				},
				{ name: 'NSR', latitude: '12.0001383', longitude: '8.5226245' },
				{ name: 'MIJ', latitude: '12.17485215', longitude: '8.65940249296704' },
				{
					name: 'UGG',
					latitude: '12.08420585',
					longitude: '8.631911307617772',
				},
			],
		},
	];
	return (
		<div className="mt-16">
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				zoomOffset={-1}
				style={{ height: '400px', width: '100%' }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Location;
