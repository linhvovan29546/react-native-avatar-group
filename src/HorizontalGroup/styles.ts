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
    fontWeight: '500',
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
  overflowLabel: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: -1,
    marginLeft: 3,
  }
})