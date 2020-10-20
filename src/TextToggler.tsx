import React, { useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Animated, Text } from 'react-native';

export interface Props {
    options: string[];
    containerStyle?: {},
    textStyle?: {},
    onToggle: (value: string) => void
}

const TextToggler: React.FC<Props> = (props) => {

    const [selected, setSelected] = useState(props.options[0]);
    const posAnim = useRef(new Animated.Value(4)).current;
    const [optionsLeft, setOptionsLeft] = useState([])
    const [optionWidth, setOptionWidth] = useState(0)

    const moveTo = (leftPos: number) => {
        Animated.timing(posAnim, {
            useNativeDriver: false,
            toValue: leftPos,
            duration: 150
        }).start();
    };

    const _onToggle = (value: string, index: number) => {
        props.onToggle(value)
        setSelected(value)
        moveTo(optionsLeft[index])
    }

    const _onItemLayout = ({ nativeEvent: { layout } }) => {
        console.log(layout)
        setOptionsLeft([...optionsLeft, layout.x])
        setOptionWidth(layout.width)
    }


    return (
        <View style={props.containerStyle ? props.containerStyle : styles.toggleContainer}>
            {props.options.map((item, index) => (
                <View onLayout={_onItemLayout} key={index} style={styles.toggleOption}>
                    <Pressable onPress={() => _onToggle(item, index)} style={styles.pressable}>
                        <Text style={[props.textStyle ? props.textStyle : styles.toggleOptionText, selected == item && styles.selectedOption]}>
                            {item}
                        </Text>
                    </Pressable>
                </View>
            ))}
            <Animated.View style={[styles.togglerSelector, { left: posAnim, width: optionWidth }]}>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    pressable: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    togglerSelector: {
        backgroundColor: "#ffffff",
        borderRadius: 14,
        position: "absolute",
        top: 4,
        bottom: 4,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
            height: 4,
            width: 4
        },
    },
    toggleOption: {
        height: 22,
        flexBasis: 0,
        alignContent: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    selectedOption: {
        color: "#2a2a2a",
    },
    toggleOptionText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "700",
        textTransform: "uppercase",
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
        // position: "relative",
        flexDirection: "row",
        // width: 225,
        padding: 3,
    },
})

export default TextToggler