import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Divider from '../Divider/Divider';
const ListView = (props) => {
    var someText = props.data.item.opening_crawl.replace(/(\r\n|\n|\r)/gm, "");
    // {str.split(',').map((step)=> <Text>{step}{",\n"}</Text>)}
    return (
        <View style={{
            marginVertical: 4,
            // marginHorizontal: 4,
            width: '95%',
            alignSelf: 'center',
            flex: 1
        }}>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text>{props.data.item.release_date}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.movietext}>{props.data.item.title}</Text>
                <Text style={styles.movietext}>{props.data.item.episode_id}</Text>
            </View>

            <Text style={styles.directortext}>{props.data.item.director}</Text>
            <Text style={styles.directortext}>{props.data.item.producer}</Text>

            <View style={{ width: '90%' }}>
                <Text style={styles.craltext}>{someText}</Text>
            </View>
            <TouchableOpacity onPress={props.changeLayout} activeOpacity={0.8} >
                <Text style={styles.characterssection}>
                    Charcaters
            </Text>
            </TouchableOpacity>
            <View style={{ height: props.expanded ? null : 0, overflow: 'hidden' }}>
                <Text style={styles.text}>
                    {props.data.item.characters}{",\n"}
                </Text>
            </View>
            <Divider />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
        padding: 10
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movietext: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    craltext: {
        fontSize: 14,
        width: '100%',

        marginTop: 2
    },
    directortext: {
        fontSize: 16,
        marginTop: 2
    },
    characterssection: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'

    }


});
export default ListView
