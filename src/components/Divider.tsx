import React from 'react';
import {View, StyleSheet} from 'react-native';

interface HorizontalLineDividerProps {
  color: string;
  thickness: number;
  style?: any;
}

const HorizontalLineDivider: React.FC<HorizontalLineDividerProps> = ({
  color,
  thickness,
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {backgroundColor: color, height: thickness},
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    // width: '100%',
    marginLeft: 30,
    marginRight: 30,
  },
});

export default HorizontalLineDivider;
