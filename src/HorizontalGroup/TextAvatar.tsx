import React from "react";
import { PureComponent } from "react";
import { Text, View } from "react-native";
import { getInitialName } from "src/utils";
import type { faceModel } from "src/utils/model";
import styles from "./styles";

interface TextAvatarProps {
  circleSize: number;
  face: faceModel
}
export class TextAvatar extends PureComponent<TextAvatarProps, {}> {
  generateColor = () => {
    const avatarColors = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#FF9800",
      "#FF5722"
    ];
    const randomColor = Math.floor(Math.random() * avatarColors.length);
    return avatarColors[randomColor];
  };

  render() {
    const { circleSize, face } = this.props;
    const innerCircleSize = circleSize * 2;
    const name = getInitialName(face.fullName ? face.fullName : '');

    return <View
      style={[
        styles.textAvatarView,
        {
          width: innerCircleSize,
          height: innerCircleSize,
          borderRadius: circleSize,
          backgroundColor: this.generateColor()
        }
      ]}
    >
      <Text style={styles.textAvatar}>{name}</Text>
    </View>
  }
}