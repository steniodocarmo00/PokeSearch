import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props ={
    name: string;
    src: string;
}

export function PokeView({name, src}: Props){
    return(
    <View style={styles.container}>
        <Text style={styles.name}>
            {name}
        </Text>

        <Image 
            style={styles.pokephoto} 
            source={{uri:src}}
        />
    </View>
    )
}