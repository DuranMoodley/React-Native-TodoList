import React, { useRef } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity ,FlatList , TouchableWithoutFeedback} from 'react-native-gesture-handler';

const List = (props) => {

    const { list } = props;
    const { onPressItem } = props;
    const { setToggleCheckBox } = props;
    const swipeableRef = useRef(null);

    const ListItemLeft = ({ onPress }) => {
      return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image style={{width:35,height:30}} source={require('../../assets/complete.png') }></Image>
          <Text style={{color:'black',fontSize:12}}>Complete</Text>
        </View>
      </TouchableWithoutFeedback> 
      )
    }

    const ListItemRight = ({ onPress }) => {
      return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container,{backgroundColor:'red'}]}>
          <Image style={{width:35,height:30}} source={require('../../assets/delete.png') }></Image>
          <Text style={{color:'white',fontSize:12}}>Delete</Text>
        </View>
      </TouchableWithoutFeedback> 
      )
    }

    ListEmpty = () => {
      return (        
        //View to show when list is empty
        <View style={[{marginTop:5}]}>
        <Text style={{ textAlign: 'center' }}>{ 'No Todo Items'}</Text>
        </View>
        );
      };

    return(
      <View>
        <FlatList
          data={list}
          ListEmptyComponent={ListEmpty}
          renderItem={({ item, index }) => (
            <Swipeable
              ref={swipeableRef}
              renderLeftActions={() => (<ListItemLeft onPress={() => setToggleCheckBox(item)} />)}  
              renderRightActions={() => (<ListItemRight onPress={() => onPressItem(item)} />)}       
            >
            <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
                  <Text style={{marginTop:5}}>{item.text}</Text>
              </TouchableOpacity>
            </Swipeable>
          )}
          keyExtractor={(item) => item.text}
        /> 
      </View>
      )

}

export default List;

const styles = StyleSheet.create({
    item: {
      flex:1,
      flexDirection:'row',
      backgroundColor: 'whitesmoke',
      marginBottom: 5,
      padding: 15,
    },
      container: {
        backgroundColor: 'lightgreen',
        width: 70,
        height:60,
        justifyContent: "center",
        alignItems: "center",
      },
  })