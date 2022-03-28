import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  circleImage: {
    borderWidth: 2,
    borderColor: 'white'
  },
  textAvatarView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  textAvatar: {
    color: 'white',
    fontSize: 18,
    letterSpacing: -1,
    marginLeft: 3,
  },
  overflow: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  overflowCircleType: {
    backgroundColor: 'gray',
    borderColor: 'white',
    borderWidth: 2,
  },
  overflowLabel: {
    color: 'white',
    fontSize: 18,
    letterSpacing: -1,
    textAlign: 'center',
    marginHorizontal: 3,
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})