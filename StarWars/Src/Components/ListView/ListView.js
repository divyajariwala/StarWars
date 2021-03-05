import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ListView = (props) => {

    return (
        <View>
            <Text>{props.data.item.title}</Text>
            <Text>{props.data.item.episode_id}</Text>
            <Text>{props.data.item.opening_crawl}</Text>
            <Text>{props.data.item.director}</Text>
            <Text>{props.data.item.producer}</Text>
            <Text>{props.data.item.release_date}</Text>
            <TouchableOpacity onPress={props.changeLayout} activeOpacity={0.8}>
                <Text>
                    Charcater Section
            </Text>
            </TouchableOpacity>
            <View style={{ height: props.expanded ? null : 0, overflow: 'hidden' }}>
                <Text style={styles.text}>
                    {props.data.item.characters}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: 'black',
        padding: 10
    },


});
export default ListView
