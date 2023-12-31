import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

export default function TodoItem({ name, onPress }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.listItem}>{name}</Text>
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/icons8-trash-512.png')}
                />
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
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5
    },
    listItem: {
        borderRadius: 1,
        borderColor: 'red',
        padding: 20,
        marginBottom: 20,
        color: '#fff',
        fontSize: 20
    },
    deleteButton: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10
    }

})