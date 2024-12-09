import colors from "@/app/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    forgetContainer: {
        width: "100%",
        alignItems: 'flex-end',
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    errorText: {
        width: "100%",
        color: colors.danger,
        fontSize: 12,
        marginBottom: 5,
    },
    passwordContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    container: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.darkgrey,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: colors.lightgrey,
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: colors.primaryText,
    },
    button: {
        width: '100%',
        height: 45,
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: colors.primaryText,
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        color: colors.lightgrey,
        fontSize: 16,
    },
    linkText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
})

export default styles;