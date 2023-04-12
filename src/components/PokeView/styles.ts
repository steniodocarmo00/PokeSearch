import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 120,
        backgroundColor: '#C7CCDB',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30    

    },
    name:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A324B',
        marginLeft: 10
    },
    pokephoto:{
        width: 80,
        height: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    }
})