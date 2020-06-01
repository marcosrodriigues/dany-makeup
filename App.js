import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/Routes';

const GOLD = '#d2ae6c'
const BLACK = '#000000';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
}