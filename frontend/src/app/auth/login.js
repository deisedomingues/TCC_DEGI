import { router, useLocalSearchParams } from "expo-router"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import * as Animatable from "react-native-animatable"

export default function Login() {
const { name } = useLocalSearchParams()

    function back () {
        router.back()
    }
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.Header}>
                <Text style={styles.message}>Bem vindo (a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um Email.."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

            <TouchableOpacity style={styles.button2} onPress={back}>
                <Text>{name}</Text>
                <Text style={styles.buttonTextVolt}>voltar</Text>
            </TouchableOpacity>   

        </View>
 
    )
}{/*método imperativo*/}

const styles = StyleSheet.create ({
    container: { 
        flex: 1, 
        backgroundColor: "#871F78",
    },
    Header: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%",
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title: {
        fontSize: 20,
        marginTop: 25,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#871F78",
        width: "100%",
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    button2: {
        backgroundColor: "#fff",
        width: "25%",
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 14,
        marginLeft: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonTextVolt: {
        color: "#871F78",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 8,
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center",
    },
    registerText: {
        color: "#871F78",
    },
    back: { 
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
})