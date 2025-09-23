// screens/MapScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen({ navigation }) {
    const [mapType, setMapType] = useState("standard");
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header con título e icono de menú */}
            <View style={styles.header}>
                <Text style={styles.title}>Mapa con Google Maps 🗺️</Text>
                <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                    <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
            </View>

            {/* Mapa */}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                mapType={mapType}
                initialRegion={{
                    latitude: 41.3874,
                    longitude: 2.1686,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            />

            {/* Botones de mapa */}
            <View style={styles.buttons}>
                <Button title="Vista Normal" onPress={() => setMapType("standard")} />
                <Button title="Vista Satélite" onPress={() => setMapType("satellite")} />
            </View>

            {/* Menú lateral flotante */}
            {menuVisible && (
                <View style={styles.menu}>
                    <Button title="Perfil" onPress={() => {
                        setMenuVisible(false);
                        navigation.navigate('Perfil');
                    }} />
                    <Button title="Ajustes" onPress={() => setMenuVisible(false)} />
                    <Button title="Cerrar Sesión" onPress={() => {
                        setMenuVisible(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    }} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#eee',
    },
    title: { fontSize: 18, fontWeight: 'bold' },
    menuIcon: { fontSize: 24, fontWeight: 'bold' },
    map: {
        width: '100%',
        height: 580, // altura fija
        maxHeight: 600, // altura máxima
        borderRadius: 10,
        margin: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    menu: {
        position: 'absolute',
        top: 60,
        right: 15,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        elevation: 5, // sombra en Android
        shadowColor: '#000', // sombra en iOS
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
});
