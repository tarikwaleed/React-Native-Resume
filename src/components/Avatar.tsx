import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface AvatarProps {
  imageSource: any;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({imageSource, size}) => {
  const avatarSize = size || 100; // Default size is 100

  return (
    <View style={[styles.container, {width: avatarSize, height: avatarSize}]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, // Half the width/height to create a circle
    overflow: 'hidden', // Clip any overflow content
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
