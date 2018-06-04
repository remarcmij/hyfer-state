import { action, observable } from 'mobx';

export default class UserStore {

  @observable
  name = null;

  @action
  setName(name) {
    this.name = name;
  }
}
