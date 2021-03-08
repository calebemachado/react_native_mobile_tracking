import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

const NavLink = ({ navigation, text, routeName }) => (
  <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
    <Spacer>
      <Text style={styles.link}>
        {text}
      </Text>
    </Spacer>
  </TouchableOpacity>
);

export default withNavigation(NavLink);
