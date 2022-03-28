import React from "react";
import { PureComponent } from "react";
import { Animated, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { faceModel, showType } from "../utils/model";
import styles from "./styles";
import { TextAvatar } from "./TextAvatar";
interface CircleProps {
  circleSize: number;
  face: faceModel;
  faces: faceModel[];
  imageStyle?: ViewStyle;
  offset: number;
  type: showType;
  index: number;
  numFaces?: number;
  randomColor?: boolean;
}
export class Circle extends PureComponent<CircleProps, {}> {

  getContainerStyle = (faces: faceModel[], index: number) => {
    if (faces.length > 1) {
      if (index === 0) {
        return styles.topLeft;
      } else if (index == 1) {
        if (faces.length == 2) {
          return styles.bottomRight;
        } else {
          return styles.topRight;
        }
      } else if (index === 2) {
        return styles.bottomLeft;
      } else {
        return
      }
    } else {
      return
    }
  };

  getSize = (faces: faceModel[], defaultSize: number) => {
    if (faces.length < 2) {
      return defaultSize * 2;
    } else if (faces.length == 2) {
      return defaultSize * 1.4;
    } else {
      return defaultSize * 1.2;
    }
  };

  _renderHorizontal = () => {
    const { faces, imageStyle, circleSize, face, randomColor } = this.props;
    const innerCircleSize = circleSize * 2
    const marginRight = faces.length < 4 ? 3 : -(circleSize / 1.5);

    return (
      <Animated.View style={{ marginRight: marginRight }}>
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
          : <TextAvatar
            randomColor={randomColor}
            circleSize={circleSize}
            face={face} />}
      </Animated.View>
    )
  };

  _renderCircle = () => {
    const { faces, imageStyle, circleSize, face, index, } = this.props;
    const numFaces = 3;
    const innerCircleSize = this.getSize(faces, circleSize);
    const containerStyle: ViewStyle | undefined = this.getContainerStyle(faces, index);

    if (index < numFaces) {
      return (
        <Animated.View style={containerStyle}>
          {face.imageUrl
            ? <FastImage
              style={[
                styles.circleImage,
                {
                  width: innerCircleSize,
                  height: innerCircleSize,
                  borderRadius: innerCircleSize / 2
                },
                imageStyle
              ]}
              source={{ uri: face.imageUrl }}
              resizeMode={FastImage.resizeMode.cover}
            />
            : <TextAvatar circleSize={innerCircleSize / 2} face={face} />}
        </Animated.View>
      );
    } else {
      return null;
    }

  }

  render() {
    const { type } = this.props;

    return (
      <>
        {type === showType.horizontal ? this._renderHorizontal() : this._renderCircle()}
      </>
    )
  }
}