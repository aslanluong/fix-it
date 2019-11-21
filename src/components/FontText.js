import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export class FontText extends Component {
  render() {
    // <FontText style={react-native style}>Your text here</FontText>

    const {style, children} = this.props;
    return <Text style={[style, {fontFamily: 'lato-regular'}]}>{children}</Text>;
  }
}

export default FontText;
