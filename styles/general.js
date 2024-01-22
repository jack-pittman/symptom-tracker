// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.fadedBlue,
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Futura",
  },

  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // marginTop: 5,
  },

  blueScrollView: {
    backgroundColor: Colors.fadedBlue,
    // flex: 1,
  },
  centeredScrollView: {
    backgroundColor: Colors.satinBlue,
    // flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 25,
    // color: "#E9F9FF",
    color: 'white',
    fontWeight: "bold",
    marginTop: 0,
  },
  subtitleGray: {
    fontSize: 25,
    // color: "#E9F9FF",
    color: Colors.darkGray,
    fontWeight: "bold",
    marginTop: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.fadedBlue,
    paddingVertical: 10,
    marginBottom: 0,
    flex: 0,

    height: 50,
  },
  footerImage: {
    width: 50,
    resizeMode: 'contain',
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.satinBlue,

    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    padding: 10,

    borderRadius: 20,
  },
  transparentPickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: Colors.satinBlue,

    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    padding: 10,

    borderRadius: 20,
  },
  notFoundHeader: {
    fontSize: 25,
    // color: "#E9F9FF",
    color: Colors.arcticWhite,
    fontWeight: "bold",
    marginTop: 0,

    // width: '60%',
  },
  notFoundBody: {
    fontSize: 25,

    color: Colors.darkGray,
    fontWeight: "bold",
    marginTop: 50,
    marginRight: 30,
    marginLeft: 30,
  },
  notFoundImage: {
    width: 100,
    height: 100,
  }
});
export default styles;
