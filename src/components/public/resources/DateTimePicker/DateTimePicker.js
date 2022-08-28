/**
 * DateTimePicker
 * @module 🔗:src/components/public/resources/DateTimePicker.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description React Date & Time picker
 *
 */

import React, { useState } from "react";
import ReactPickyDateTime from "react-picky-date-time";
import Modal from "./../Modal/Modal";
import { datetimeManager } from "./dateTimePicker.manager";
import { observer } from "mobx-react";

/**
 * @typedef {object} DateTimeIProps
 */

// /**
//  *
//  * @param {DateTimeIProps} props
//  * @returns
//  */
const DateTimePicker = (props) => {
	//? States
	const [startDate, setStartDate] = useState({
		date: "30",
		month: "01",
		year: "2000",
		hour: "03",
		minute: "10",
		second: "40",
		meridiem: "PM",
	});

	//? Refs

	//? Auto Runner

	//? Variables

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			<Modal
				contentClassName="date_picky_calendar-container"
				isOpen={datetimeManager._status}
				autoCloseEnable
			>
				<ReactPickyDateTime
					size="xs" // 'xs', 's', 'm', 'l'
					mode={0} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
					locale={`en-us`} // 'en-us' or 'zh-cn'; default is en-us
					show={datetimeManager._status} //default is false
					onClose={datetimeManager.close}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default DateTimePicker;
