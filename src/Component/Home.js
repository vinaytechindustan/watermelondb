import React, { Component } from "react";
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import * as getDataFunction from "../dbfunctions/getData";
class Home extends Component {
	state = {
		posts: []
	};
	componentDidMount() {
		getDataFunction.getAllPost().then(posts => {
			this.setState({ posts });
			console.log(posts, "the response from server i get is this");
		});
	}

	_onPress = post => () => {
		this.props.navigation.navigate("Post", { post });
    };

    
    
	render() {
		return (
			<View style={{ marginHorizontal: "4%", marginVertical: "2%" }}>
				<ScrollView  showsVerticalScrollIndicator={false}>
					{this.state.posts.map(data => (
						<TouchableOpacity
							style={{ margin: 10,borderWidth:2,borderColor:"#bbb",paddingVertical:20 }}
							key={data.id}
							activeOpacity={1}
							onPress={this._onPress(data)}>
							<View>
								<Text>{data.title}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
                
			</View>
		);
	}
}

export default Home;
