import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import stores from './mobx-stores';
import userObsStore from './obs-stores/UserStore';
import ObsUser from './components/ObsUser';
import MobxUser from './components/MobxUser';

class App extends Component {

  componentDidMount() {
    userObsStore.setState({ name: 'Jim' });
    stores.userStore.setName('Valerio');
  }

  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <ObsUser />
          <MobxUser />
        </div>
      </Provider>
    );
  }
}

export default App;
