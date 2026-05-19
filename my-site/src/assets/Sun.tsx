import "../styles.css";
import React, { useEffect, useRef } from "react";
//import LinearGradient from "react-native-linear-gradient";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Easing,
} from "react-native";
import city from "./Background.png";
//pick better colors
export function Sun2() {
  const radius = 200;
  return (
    <View
      style={{
        width: radius,
        height: radius,
        borderRadius: radius / 2,
        backgroundColor: "red",
        zIndex: -3,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -75%)",
      }}
    />
  );
}
export function Sky() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "70%",
        transform: "translate(-50%, -75%)",
        zIndex: -4,
      }}
    >
      <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad3" cx="48%" cy="63%">
            <stop offset="0%" stop-color="red" />
            <stop offset="100%" stop-color="#16058b" />
          </radialGradient>
        </defs>
        <rect
          width="500"
          height="350"
          x="10"
          y="10"
          rx="0"
          ry="0"
          fill="url(#grad3)"
        />
      </svg>
    </div>
  );
}
export function City() {
  return (
    <img
      src={city}
      style={{
        height: 500,
        width: 490,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-49%, -50%)",
        zIndex: -2,
      }}
    ></img>
  );
}
export function CityReflection() {
  return (
    <img
      src={city}
      style={{
        height: 500,
        width: 490,
        position: "absolute",
        left: "50%",
        top: "67%",
        transform: "translate(-49%, -50%) scaleY(-1)", //scaleY(-1)
        zIndex: -1,
        opacity: "50%",
      }}
    ></img>
  );
}
export function Water() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "60%",
        transform: "translate(-50%, -3%)",
        zIndex: -2,
      }}
    >
      <svg height="300" width="500">
        <defs>
          <radialGradient id="grad" cx="50%" cy="0%">
            <stop offset="10%" stop-color="red" />
            <stop offset="100%" stop-color="#16058b" />
          </radialGradient>
        </defs>
        <rect
          width="500"
          height="350"
          x="10"
          y="10"
          rx="0"
          ry="0"
          fill="url(#grad)"
        />
      </svg>
    </div>
  );
}

export default function Sun() {
  return (
    <div>
      <Sky />
      <City />
      <CityReflection />
      <Water />
      <Sun2 />
    </div>
  );
}
