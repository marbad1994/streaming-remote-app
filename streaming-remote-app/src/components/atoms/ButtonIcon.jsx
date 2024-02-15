import React from 'react';
import { StyleSheet } from 'react-native';

const ButtonIcon = ({IconLib, iconName}) => {
  return (
      <IconLib
        name={iconName}
        size={60}
        color="white"
        style={styles.remoteIcon}
      />
  );
};

const styles = StyleSheet.create({
  remoteIcon: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default ButtonIcon;
