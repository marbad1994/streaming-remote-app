import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ButtonIcon from '@components/atoms/ButtonIcon';
import { keyCommand, IpContext } from '@src/utils';
   
const RemoteButton = ({keyStroke, iconName, IconLib}) => {
  const {ipAddress} = React.useContext(IpContext);
  return (
    <TouchableOpacity
      style={styles.remoteButton}
      onPress={() => keyCommand(keyStroke, ipAddress)}
    >
      <ButtonIcon IconLib={IconLib} iconName={iconName} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  remoteButton: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#3e3e3e',
    borderRadius: '50%',
    display: 'flex',
    width: 100,
    height: 100,
  },
});

export default RemoteButton;
