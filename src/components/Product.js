import React from 'react'
import {
    View,
    Image,
    TouchableOpacity, 
    Text} from 'react-native'

export default class Product extends React.Component{
    render(){
        return(
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{
                backgroundColor:"#f5f5fa",
                height:250,
                width:160,
                borderRadius:20,
                marginTop:this.props.marginTop,
                marginRight:5,
                marginVertical:10
            }}
          >

              <Image
                source={this.props.image}
                style={{
                    height:150,
                    alignSelf:"center",
                    width:150,
                    marginTop:15,
                    marginBottom:15
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  alignSelf:"center",
                  marginTop:15,
              }}>
                  {this.props.title}
              </Text>
 
          </TouchableOpacity>
        )
    }
}