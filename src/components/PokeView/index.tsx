import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props ={
    name: string;
    src: string;
    id: string;
}

export function PokeView({name, src, id}: Props){
    return(
    <View style={styles.container}>
        <Text style={styles.name}>
            #{id} {name}
        </Text>

        <Image 
            style={styles.pokephoto} 
            source={{uri:src}}
        />
    </View>
    )
}