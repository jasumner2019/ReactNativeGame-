import React, { Component } from 'react'
import { ScrollView, View, Image } from "react-native"


class MainPage extends Component {
    
    render() {
        return (
            <ScrollView>
                <View>
                    <View>
                        <Image source={require("../images/controlroom.jpeg")} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default MainPage