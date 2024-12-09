import colors from "@/app/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primaryText,
    },
    searchBar: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        elevation: 2,
        width: "20%"
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 3,
        borderColor: colors.primary,
        borderWidth: 1
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        width: "100%",
        color: colors.danger,
        fontSize: 12,
        marginBottom: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#007BFF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    fabText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        marginBottom: 10,
    },
    cardContainer: {
        width: '30%',
        marginBottom: 10,
        marginRight: 10,
    },
});

export default styles;