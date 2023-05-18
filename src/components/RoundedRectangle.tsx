import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';

interface RoundedRectangleProps {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  style?: ViewStyle;
  text?: string;
  textColor?: string;
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  style,
  text,
  textColor = 'black',
}) => {
  return (
    <View
      style={[
        styles.rectangle,
        {width, height, borderRadius, backgroundColor},
        style,
      ]}>
      {text && <Text style={[styles.text, {color: textColor}]}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    // Common styles for the rounded rectangle
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Styles for the text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundedRectangle;
