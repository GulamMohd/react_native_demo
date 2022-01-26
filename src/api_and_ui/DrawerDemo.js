import * as React from 'react';
import { Drawer } from 'react-native-paper';

const DrawerDemo = () => {
  const [active, setActive] = React.useState('');


  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="Facebook"
        icon="facebook"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Google"
        icon="google"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default DrawerDemo;