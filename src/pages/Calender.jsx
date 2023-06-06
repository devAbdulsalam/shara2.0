import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

const events = [
	{ title: 'Start project', date: '2023-06-05' },
	{ title: 'Discuss ideas', date: '2023-06-06' },
	{ title: 'Start building', date: '2023-06-07' },
	{ title: 'Test product', date: '2023-06-08' },
	{ title: 'Make nessarry correction', date: '2023-06-09' },
	{ title: 'Review project', date: '2023-06-10' },
	{ title: 'Submit project', date: '2023-06-11' },
];

const Calendar = () => {
	const handleDateClick = (arg) => {
		// bind with an arrow function
        alert(arg.dateStr);
        console.log(arg);
	};
	return (
		<div className="p-1 mt-8 mx-2 py-10 h-screen relative">
			<h3 className="text-center text-2xl font-semibold m-4">Calendar</h3>
			<div>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={events}
					dateClick={handleDateClick}
					eventContent={renderEventContent}
				/>
			</div>
		</div>
	);
};
export default Calendar;

function renderEventContent(eventInfo) {
	console.log(eventInfo);
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
