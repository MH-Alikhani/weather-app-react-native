import { Component } from "react";
import propTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";

export default class SearchInput extends Component {
  state = {
    text: "",
  };

  handleChangeText = (text) => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={text}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="always"
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="white"
          onChangeText={this.handleChangeText}
          underlineColorAndroid="transparent"
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }

  static propTypes = {
    onSubmit: propTypes.func.isRequired,
    placeholder: propTypes.string,
  };
  static defaultProps = {
    placeholder: "",
  };
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    borderRadius: 5,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    backgroundColor: "#666",
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
