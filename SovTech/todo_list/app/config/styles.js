import { Platform } from "react-native";

import colors from "./colors";

export default {
	colors,
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
	elevatedListItem: {
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 5,
		overflow: "hidden",
		marginBottom: 5,
	},
};
