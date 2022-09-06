/**
 * ActionSheet
 * @module 🔗:src/components/public/resources/ActionSheet
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version app.carchaze.com@0.1.0
 * @description Action Sheet Component
 *
 */

import React from "react";
import { actionSheet } from "../../../../utils";
import { observer } from "mobx-react";
import { colors, effects, typography } from "../../../../theme";
import { motion } from "framer-motion";

const ActionSheet = observer(() => {
	const [showStatus, setShowStatus] = React.useState(false);

	const BackView = () => {
		return (
			<motion.div
				className="action_sheet--backContainer"
				initial={{ opacity: actionSheet._show ? 0 : 1 }}
				animate={{ opacity: actionSheet._show ? 1 : 0 }}
				transition={{ duration: 0.1 }}
			>
				<div
					style={{ height: "100%", width: "100%" }}
					onClick={() => {
						!actionSheet._disabledBackClose && actionSheet.close();
					}}
				/>
			</motion.div>
		);
	};

	React.useEffect(() => {
		if (actionSheet._show === true) {
			setShowStatus(true);
			// ActionOpeningAnimation();
		} else {
			setTimeout(() => {
				setShowStatus(false);
			}, 400);
			// ActionClosingAnimation();
		}
	}, [actionSheet._show]);

	if (showStatus) {
		return (
			<>
				<BackView />
				<motion.div
					className="action_sheet--frontContainer user-select-none"
					initial={{
						opacity: actionSheet._show ? 0 : 1,
						y: actionSheet._show ? 200 : 0,
					}}
					animate={{
						opacity: actionSheet._show ? 1 : 0,
						y: actionSheet._show ? 0 : 200,
					}}
					transition={{ type: "spring" }}
				>
					<div className="action_sheet--topContainerButton">
						{actionSheet._title || actionSheet._desc ? (
							<div className="action_sheet--titleBarContainer">
								{actionSheet._title ? (
									<p className="action_sheet--titleBar">
										{actionSheet._title}
									</p>
								) : (
									<></>
								)}
								{actionSheet._desc ? (
									<p className="action_sheet--description">
										{actionSheet._desc}
									</p>
								) : (
									<></>
								)}
							</div>
						) : (
							<></>
						)}
						{actionSheet._data?.map((item, index) => (
							<React.Fragment key={index + "_"}>
								<div
									onClick={() => item.onPress()}
									className="action_sheet--buttons"
									style={{
										...{
											border: "none",
											borderBottomStyle: "solid",
											borderBottomWidth:
												actionSheet._data.length ===
												index + 1
													? 0
													: 0.5,
											borderBottomColor:
												colors.action_sheet_border_color,
											justifyContent:
												item.align === "center"
													? "center"
													: item.align === "right"
													? "flex-end"
													: "flex-start",
										},
									}}
								>
									{item.customComponent ? (
										item.customComponent
									) : (
										<>
											{item.customIcon
												? item.customIcon
												: item.icon && (
														<i
															className={`${item.icon} action_sheet--ionicon`}
														></i>
												  )}
											<p
												className="action_sheet--text"
												style={{
													...{
														textAlign: item.align,
														color:
															item.color ||
															colors.info,
													},
												}}
											>
												{item.title}
											</p>
										</>
									)}
								</div>
							</React.Fragment>
						))}
					</div>

					{actionSheet._cancelButton && (
						<div className="action_sheet--cancelButtonContainer">
							<div
								onClick={() => actionSheet.close()}
								className="action_sheet--cancelButton action_sheet--buttons"
							>
								<p
									className="action_sheet--text action_sheet--cancelButtonText"
									style={{
										...{
											color:
												actionSheet._cancelButtonColor ||
												"red",
										},
									}}
								>
									{actionSheet._cancelButtonText}
								</p>
							</div>
						</div>
					)}
				</motion.div>
			</>
		);
	} else {
		return <></>;
	}
});

export default ActionSheet;
