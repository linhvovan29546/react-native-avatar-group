import React, { PureComponent } from 'react'
import { View, Text, ViewStyle, ImageStyle } from 'react-native'
import styles from './styles'
import { renderFacePile } from '../utils';
import { Circle } from './Circle';
import type { faceModel } from '../utils/model';


// *** Use component ***
const FACES = [
  {
    id: 0,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
    fullName: 'Kobe Pham'
  },
  {
    id: 1,
    imageUrl: 'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-2.jpg',
    fullName: 'Kobe',
  },
  {
    id: 2,
    imageUrl: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
    fullName: 'Jayne cran'
  },
  {
    id: 3,
    imageUrl: '',//'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-1.jpg',
    fullName: 'Jenifer Nguyen'
  },
  {
    id: 4,
    imageUrl: 'https://hinhnen123.com/wp-content/uploads/2021/12/Top-36-anh-dai-dien-dep-me-ly-khong-xem-hoi-phi-28.jpg',
    fullName: 'Jessica Quacky'
  }
];

// <HorizontalGroupAvatar numFaces={3} faces={FACES} containerStyle={styles.groupAvatarContainer} />

interface HorizontalGroupAvatarProps {
  faces: faceModel[];
  circleSize: number;
  hideOverflow: boolean;
  containerStyle: ViewStyle;
  circleStyle: ViewStyle;
  imageStyle: ImageStyle;
  overflowStyle: ViewStyle;
  overflowLabelStyle: ViewStyle;
  // render: PropTypes.func;
  numFaces: number;
  offset: number
}
export default class HorizontalGroupAvatar extends PureComponent<HorizontalGroupAvatarProps, {}> {

  static defaultProps = {
    faces: FACES,
    circleSize: 20,
    numFaces: 4,
    offset: 1,
    hideOverflow: false,
  }

  _renderOverflowCircle = (overflow: number) => {
    const {
      circleStyle,
      overflowStyle,
      overflowLabelStyle,
      circleSize,
      offset
    } = this.props

    const innerCircleSize = circleSize * 2
    const marginLeft = (circleSize * offset) - (circleSize / 1.2)

    return (
      <View
        style={[
          styles.circleImage,
          circleStyle
        ]}
      >
        <View
          style={[
            styles.overflow,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize,
              marginLeft: -marginLeft
            },
            overflowStyle
          ]}
        >
          <Text
            style={[
              styles.overflowLabel,
              overflowLabelStyle
            ]}
          >
            +{overflow}
          </Text>
        </View>
      </View>
    )
  }

  _renderFace = (face: any, index: number) => {
    const { faces, circleStyle, imageStyle, circleSize, offset } = this.props;
    return (
      <Circle
        key={index}
        face={face}
        circleStyle={circleStyle}
        imageStyle={imageStyle}
        circleSize={circleSize}
        offset={offset}
        faces={faces}
      />
    )
  }

  render() {
    const { faces, numFaces, hideOverflow, containerStyle } = this.props;
    // if (render) return render({ faces, numFaces });
    const { facesToRender, overflow } = renderFacePile(faces, numFaces);
    return (
      <View style={[styles.container, containerStyle]}>
        {Array.isArray(facesToRender) && facesToRender.map(this._renderFace)}
        {overflow > 0 && !hideOverflow && this._renderOverflowCircle(overflow)}
      </View>
    );
  }
}