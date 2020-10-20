import React, { useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Animated, Text } from 'react-native';

function TextToggler() {

    const [status, setStatus] = useState('discover');
    const [togglerWidth, setTogglerWidth] = useState(0)

    const posAnim = useRef(new Animated.Value(4)).current;

    const moveRight = () => {
        Animated.timing(posAnim, {
            useNativeDriver: false,
            toValue: togglerWidth / 2,
            duration: 150
        }).start();
    };

    const moveLeft = () => {
        Animated.timing(posAnim, {
            useNativeDriver: false,
            toValue: 4,
            duration: 150
        }).start();
    };

    const _onToggle = (value: string) => {
        setStatus(value)
        if (value == 'nearby') {
            moveRight()
        } else {
            moveLeft()
        }
    }

    const _onLayout = ({ nativeEvent: { layout: { width } } }) => {
        setTogglerWidth(width)
    }

    return (
        <View style={styles.toggleContainer} onLayout={_onLayout}>
            <Animated.View style={[styles.togglerSelector, { left: posAnim }]}>
            </Animated.View>
            <Pressable style={styles.toggleOption} onPress={() => _onToggle('discover')}>
                <Text style={[styles.toggleOptionText, status == 'discover' && styles.selectedOption]}>
                    Discover
                </Text>
            </Pressable>
            <Pressable style={styles.toggleOption} onPress={() => _onToggle('nearby')}>
                <Text style={[styles.toggleOptionText, status == 'nearby' && styles.selectedOption]}>
                    Nearby
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    togglerSelector: {
        backgroundColor: "#ffffff",
        borderRadius: 14,
        position: "absolute",
        top: 4,
        left: 4,
        width: "49%",
        bottom: 4,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
            height: 4,
            width: 4
        },
    },
    toggleOption: {
        elevation: 2,
        width: "50%",
        height: 22,
        justifyContent: "center"
    },
    selectedOption: {
        color: "#2a2a2a",
    },
    toggleOptionText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "700",
        textTransform: "uppercase",
        textAlign: "center",
    },
    toggleContainer: {
        backgroundColor: "#949494",
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
            height: 4,
            width: 4
        },
        borderRadius: 14,
        position: "relative",
        flexDirection: "row",
        width: 225,
        padding: 3,
        alignSelf: "center",
        marginTop: 21
    },
})

export default TextToggler