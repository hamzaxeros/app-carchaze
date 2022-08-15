import { platform } from "./../utils";
const isIos = platform.OS() === "iOS";

export default {
	default: {
		touchable_opacity: 0.7,
		popup_shadow: {
			shadowColor: isIos ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,6)",
			shadowOffset: {
				width: 0,
				height: 12,
			},
			shadowOpacity: 0.48,
			shadowRadius: 16.0,
			elevation: 24,
		},
	},
};
