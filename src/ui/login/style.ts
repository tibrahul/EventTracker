import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52673A",
  },
  welcometTitleContainer: {
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'bold'
  },
  mainContainer: {
    flexGrow: 1,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    borderColor: "#52673A",
    justifyContent: 'space-between'
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
    color: "#000",
    borderWidth: 1,
    borderColor: '#52673A',
    borderRadius: 10,
    marginTop: 10
  }
})