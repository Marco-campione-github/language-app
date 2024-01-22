import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import SuggestedVerb from "../../elements/suggestedVerb";


export default function VerbPage() {

    const [inputTextValue, setInputTextValue] = useState('');
    const [filteredVerbs, setFilteredVerbs] = useState([]);

    const verbs = ['Run', 'Jump', 'Swim', 'jack'];

    function handleOnChangeText(enteredText) {
        setInputTextValue(enteredText)

        const filtered = verbs.filter((verb) =>
            verb.toLowerCase().includes(enteredText.toLowerCase())
        );
        setFilteredVerbs(filtered);
    }

    return (
        <View style={styles.inputContainer}>

            <TextInput
                onChangeText={handleOnChangeText}
                style={styles.input}
                placeholder="Search for a verb here"
                value={inputTextValue}
            />
            <FlatList
                style={styles.suggestedList}
                data={filteredVerbs}
                renderItem={(itemData) =>
                    <SuggestedVerb
                        name={itemData.item}
                        onPress={() => {console.log('Hello');}}
                    />

                } />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: '70%',
    },
    inputContainer: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    suggestedList: {
        width: '70%'
    }
})