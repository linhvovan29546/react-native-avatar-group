import React from "react";
import { PureComponent } from "react";
import { Animated, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import type { faceModel } from "../utils/model";
import styles from "./styles";
import { TextAvatar } from "./TextAvatar";
interface CircleProps {
  circleSize: number;
  face: faceModel;
  faces: faceModel[];
  imageStyle: ViewStyle;
  circleStyle?: ViewStyle;
  offset: number;
}
export class Circle extends PureComponent<CircleProps, {}> {
  render() {
    const { faces, imageStyle, circleSize, face, circleStyle } = this.props
    const innerCircleSize = circleSize * 2
    const marginRight = faces.length < 4 ? 3 : -(circleSize / 1.5);

    return (
      <Animated.View
        style={[circleStyle, { marginRight: marginRight }]}
      >
        {face.imageUrl
          ? <FastImage
            style={[
              styles.circleImage,
              {
                width: innerCircleSize,
                height: innerCircleSize,
                borderRadius: circleSize
              },
              imageStyle
            ]}
            source={{ uri: face.imageUrl }}
            resizeMode={FastImage.resizeMode.cover}
          />
          : <TextAvatar circleSize={circleSize} face={face} />}
      </Animated.View>
    )
  }
}