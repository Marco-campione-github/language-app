import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    FlatList,
    Pressable
} from "react-native"
import { useState } from "react"
import TodoItem from "../../elements/todoItem"

export default function HomePage() {

    // useState for the text value
    const [inputTextValue, setInputTextValue] = useState('')
    const [listOfNotes, setListOfNotes] = useState([])

    /**
     * function: handleOnChangeText
     * description: gets called every time the TextInput value changes
     * parameters: enteredText
     */
    function handleOnChangeText(enteredText) {
        setInputTextValue(enteredText)
    }

    /**
     * function: handleOnPressButton
     * description: gets called every the Add Note button get pushed
     * parameters: -
     */
    function handleOnPressButton() {
        setListOfNotes(currentNotes => [...currentNotes, inputTextValue])
        setInputTextValue('')
    }

    function handleRemoveItem(currentIndex) {
        let cpyListOfNotes = [...listOfNotes]
        cpyListOfNotes = cpyListOfNotes.filter((_, index) => currentIndex !== index)
        setListOfNotes(cpyListOfNotes)
    }

    return (
        <View style={styles.container}>
            {/* to render input along with button*/}
            < View style={styles.inputContainer} >
                <TextInput
                    onChangeText={handleOnChangeText}
                    style={styles.input}
                    placeholder="Add Your Note Here"
                    value={inputTextValue}
                />
                <Button onPress={handleOnPressButton} color={'#000'} title="Add Note" />
            </View>

            {/* to render all the notes that we created*/}
            < View style={styles.listContainer} >
                <FlatList
                    data={listOfNotes}
                    renderItem={(itemData) => <TodoItem
                        name={itemData.item}
                        onPress={() => handleRemoveItem(itemData.index)}
                    />
                    }
                />
            </View >
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        flex: 1
    },
    listContainer: {
        paddingTop: 30,
        flex: 5
    }
})