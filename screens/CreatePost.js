import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

export default class CreatePost extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Create Post Screen</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        aliginSelf: "center",
        color: 'blue',
        fontFamily: 'jokerman',
        marginTop: 30

    }
})