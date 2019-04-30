import {createAppContainer,createStackNavigator} from 'react-navigation';
import React,{Component} from 'react';
import CreatePost from '../src/Component/CreatePost';
import Home from '../src/Component/Home';
import Post from '../src/Component/Post';

const MainNav= createStackNavigator({
    Home:{
        screen:Home
    },
    CreatePost:{
        screen:CreatePost
    },
    Post:{
        screen:({navigation})=><Post navigation={navigation} yeh="ding dong" post={navigation.state.params.post}/>
    }
})

export default  createAppContainer(MainNav);