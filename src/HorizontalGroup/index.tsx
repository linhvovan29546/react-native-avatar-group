import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, ViewStyle, ImageStyle } from 'react-native'
import styles from './styles'
import { Circle } from './Circle';
import { faceModel, showType } from '..//utils/model';

export function renderFacePile(faces: faceModel[], numFaces: number) {
  const entities = [...faces.reverse()];
  if (!entities.length) return {
    facesToRender: [],
    overflow: 0
  }

  const facesToRender = entities.slice(0, numFaces)
  const overflow = entities.length - facesToRender.length

  return {
    facesToRender,
    overflow
  }
}
interface HorizontalGroupAvatarProps {
  faces: faceModel[];
  circleSize?: number;
  hideOverflow?: boolean;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  overflowStyle?: ViewStyle;
  overflowLabelStyle?: ViewStyle;
  // render: PropTypes.func;
  numFaces?: number;
  offset?: number;
  render?: any;
  type?: showType;
  actionOnPress?: () => void;
  activeOpacity?: number;
  randomColor?: boolean;
}

export default class GroupAvatar extends PureComponent<HorizontalGroupAvatarProps, {}> {

  static defaultProps = {
    circleSize: 20,
    numFaces: 3,
    offset: 1,
    hideOverflow: false,
    type: showType.horizontal,
    activeOpacity: 1
  }


  _renderOverflowCircle = (overflow: string | number) => {
    const {
      overflowStyle,
      overflowLabelStyle,
      circleSize = 20,
      offset = 1,
      type,
      faces,
      numFaces = 3
    } = this.props;
    if (type === showType.horizontal) {
      const innerCircleSize = circleSize * 2
      const isMargin = faces.length <= numFaces
      const marginLeft = (circleSize * offset) - (circleSize / 1.2)
      return (
        <View
          style={[
            styles.overflow,
            !isMargin && {
              marginLeft: -marginLeft
            },
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize,

            },
            overflowStyle
          ]}
        >
          <Text numberOfLines={1} style={[styles.overflowLabel, overflowLabelStyle]}>+{overflow}</Text>
        </View>
      );
    } else {
      const innerCircleSize = circleSize * 1.2;
      return (
        <View
          style={[
            styles.bottomRight,
            styles.overflowCircleType,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: innerCircleSize / 2,
              justifyContent: 'center'
            },
            overflowStyle
          ]}
        >
          <Text numberOfLines={1} style={[styles.overflowLabel, { fontSize: (innerCircleSize / 2) * 0.95 }, overflowLabelStyle]}>+{overflow}</Text>
        </View>
      );
    }
  }

  _renderFace = (face: faceModel, index: number) => {
    const { faces,
      imageStyle,
      circleSize = 20,
      randomColor,
      offset = 1,
      type = showType.horizontal,
      numFaces = 3 } = this.props;

    return (
      <Circle
        randomColor={randomColor}
        key={face.id || index}
        face={face}
        imageStyle={imageStyle}
        circleSize={circleSize}
        offset={offset}
        faces={faces}
        type={type}
        index={index}
        numFaces={numFaces}
      />
    )
  }

  render() {
    const {
      render,
      faces,
      numFaces = 3,
      hideOverflow,
      containerStyle,
      type,
      circleSize = 20,
      activeOpacity = 1,
      actionOnPress } = this.props;
    if (render) return render({ faces, numFaces });

    const { facesToRender, overflow } = renderFacePile(faces, numFaces);
    const typeContainer: ViewStyle = type === showType.circle ? { position: 'relative', width: circleSize * 2, height: circleSize * 2 } : styles.container
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={actionOnPress}
        style={[typeContainer, containerStyle]}>
        {Array.isArray(facesToRender) && facesToRender.map(this._renderFace)}
        {overflow > 0 && !hideOverflow && this._renderOverflowCircle(overflow)}
      </TouchableOpacity>
    );
  }
}

