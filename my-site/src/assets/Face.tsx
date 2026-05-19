import "../styles.css";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Easing,
} from 'react-native';
import test from "./Tony.png";

const RotateFace = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ["0deg", "10deg", "0deg", "-10deg", "0deg"],
  });
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 2,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.in(Easing.linear),
        }),
        Animated.timing(rotateAnim, {
          toValue: 4,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.in(Easing.linear),
        }),
      ])
    ).start();
  }, [rotateAnim]);
  //);
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          transform: [{ rotate }],
        }}
      >
        <img src={test} style={{ transform: "scale(30%)" }}></img>
      </Animated.View>
    </SafeAreaView>
  );
};

export default function Face() {
  return <RotateFace />;
}
