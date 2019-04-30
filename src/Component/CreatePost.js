import React,{Component} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import * as createDbFunctions from '../dbfunctions/create';
class Routes extends Component{

    state={
        data:{
            title:'',
            subtitle:'',
            body:'',

        }
    }

    _onSubmit = ()=>{
        let data={...this.state.data};
        createDbFunctions.makePost(data).then(res=>{
            console.log(res,'the response i get is');
        }).catch(err=>{
            console.log(err,'the is the error');
        })
        console.log(data,'the daata i have is ');
    }
    _onChangeText=(id)=>(val)=>{
        let data={...this.state.data};
        data[id]=val;
        this.setState({data});
    }
    render(){
        console.log(this.props,"the crage post");
        return(
            <View style={{paddingHorizontal:"4%",paddingVertical:"2%"}}>
                <View style={{borderBottomColor:"#bbb",borderBottomWidth:2,marginVertical:8}}>
                    <Text>Title</Text>
                    <TextInput onChangeText={this._onChangeText("title")} />
                </View>
                <View style={{borderBottomColor:"#bbb",borderBottomWidth:2,marginVertical:8}}>
                    <Text>Subtitle</Text>
                    <TextInput onChangeText={this._onChangeText('subtitle')} />
                </View>
                <View style={{borderBottomColor:"#bbb",borderBottomWidth:2,marginVertical:8}}>
                    <Text>Body</Text>
                    <TextInput onChangeText={this._onChangeText('body')} />
                </View>
                <View>
                    <Button title="Submit" onPress={this._onSubmit} />
                </View>
            </View>
        )
    }
};

export default Routes;