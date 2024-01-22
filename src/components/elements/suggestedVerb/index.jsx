import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export default function TodoItem({ name, onPress }) {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.listItem}>{name}</Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        
    },
    listItem: {
        padding: 10,
        color: '#000',
        fontSize: 15,
        textAlign: 'center'
    }
})