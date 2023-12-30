import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";



export default function ApiPage() {

    //loading state
    const [loading, setLoading] = useState(false)

    //data state
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        //maintain loading state
        setLoading(true);

        async function getDataFromApi() {
            const apiResponse = await fetch('https://dummyjson.com/users')
            const finalData = await apiResponse.json()
            if (finalData) {
                setApiData(
                    finalData.users.map(
                        (userItem) =>
                            `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
                    )
                );

                setLoading(false);
            }
        }

        getDataFromApi();

    }, []);

    console.log(loading, 'loading');
    if(loading){
        return (
            <ActivityIndicator color={'red'} size="large"/>
        )
    }

    return (
        <View>
            <Text>Api Data</Text>
            <View>
                <FlatList
                    data={apiData}
                    renderItem={(itemData) => <Text>{itemData.item}</Text>}
                />
            </View>
        </View>
    )

}