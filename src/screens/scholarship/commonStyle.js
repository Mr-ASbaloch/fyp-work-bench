
import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";

export const commonStyle = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20
        
    }
    ,
    button: {
        width: '30%',
        backgroundColor: colors.bgPrimary,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
})