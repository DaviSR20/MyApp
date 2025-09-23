// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Usuario 👤</Text>
            <Button title="Cerrar sesión (falso)"
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }], // vuelve al login y borra la pila
                    });
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
