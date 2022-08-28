/**
 * Modal
 * @module 🔗:src/components/public/resources/Modal/Modal.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version carchaze.com@0.2.0
 * @description Modal sheet using for pages or any other component
 *
 */

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

/**
 * @typedef {object} ModalIProps
 * @property {string} [backClassName]
 * @property {string} [contentClassName]
 * @property {React.HTMLProps} [backContainerProps]
 * @property {React.HTMLProps} [contentContainerProps]
 * @property {React.ReactNode} [children]
 * @property {()=>void} [onClose]
 * @property {boolean} [autoCloseEnable]
 * @property {boolean} [isOpen]
 */

/**
 *
 * @param {ModalIProps} props
 * @returns
 */
const Modal = (props) => {
	//? Variables
	const {
		backClassName,
		contentClassName,
		backContainerProps,
		contentContainerProps,
		onClose,
		autoCloseEnable = false,
		isOpen=true,
	} = props;

	//? States
	const [statusModal, setStatusModal] = useState(isOpen);

	//? Refs

	//? Auto Runner

	//? Functions
	const _handleCloseModal = () => {
		if (autoCloseEnable) {
			setStatusModal(false);
			return 0;
		}
		onClose && onClose();
	};

	//? Life Cycle

	//? Main Return
	if (!statusModal) return <></>;
	return (
		<div
			{...backContainerProps}
			className={`modal-main_container ${backClassName} ${backContainerProps?.className}`}
		>
			<div
				{...contentContainerProps}
				className={`modal-container ${contentClassName} ${backContainerProps?.className}`}
			>
				<IoClose className="modal-close" onClick={_handleCloseModal} />
				{props?.children}
			</div>
		</div>
	);
};

export default Modal;
