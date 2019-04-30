/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import Routes from "./src/Routes";
import * as dbfunctions from "./src/dbfunctions/create";
import * as getDbfunctions from "./src/dbfunctions/getData";
import * as updateDbfunctions from "./src/dbfunctions/updateData";

export default class App extends Component {
	state = {
		title: "",
		subtitle: "",
		body: "",
		blog: ""
	};

	componentDidMount() {
		
	}

	render() {
		return <Routes />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		justifyContent: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
