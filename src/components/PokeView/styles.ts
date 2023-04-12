import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10

    },
    name:{
        flex: 1,
        fontSize: 20,
        color: '#1F1E25',
        marginLeft: 10
    },
    pokephoto:{
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        alignItems: 'center',
        justifyContent: 'center', 
    }
})