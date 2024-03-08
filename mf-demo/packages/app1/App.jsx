import React from 'react';
import Button from './src/Button';
import Logo from 'comp/Logo';
import _ from 'lodash';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        app1 lodash的版本号：{_.VERSION}
        <Button />
        <Logo></Logo>
      </div>
    );
  }
}
