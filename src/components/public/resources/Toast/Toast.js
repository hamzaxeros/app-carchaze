/**
 * Toast
 * @module 🔗:src/components/public/resources/Toast
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version 0.1.0
 * @description Toast Component
 *
 */

import React from "react";
import { observer } from "mobx-react";
import { motion } from "framer-motion";

import { toast } from "../../../../utils";
import { useEffect } from "react";

const Toast = observer(() => {
	useEffect(() => {
		if (toast.message) {
			setTimeout(() => {
				toast.remove();
			}, toast.timeout);
		}
	});
	if (toast.message) {
		return (
      <motion.div
        className="toast--main_container"
				initial={{
					opacity: toast.message ? 0 : 1,
					y: toast.message ? 50 : 0,
				}}
				transition={{ type: "spring" }}
				animate={{
					opacity: toast.message ? 1 : 0,
					y: toast.message ? 0 : 50,
				}}
			>
				<div className="toast--container">
					<p className="toast--text">{toast.message}</p>
				</div>
			</motion.div>
		);
	} else {
		return <></>;
	}
});

export default Toast;
