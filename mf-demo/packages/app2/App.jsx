import React from 'react';
import Button from 'comp/Button';
import Logo from './src/Logo';
import _ from 'lodash';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        app2 lodash的版本号：{_.VERSION}
        <Button type="warning" />
        <Logo></Logo>
      </div>
    );
  }
}
