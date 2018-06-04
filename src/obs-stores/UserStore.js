class UserStore {

  state = {};
  handlers = new Set();

  notify() {
    for (const handler of this.handlers) {
      handler(this.state);
    }
  }

  setState(updates) {
    Object.assign(this.state, updates);
    this.notify();
  }

  subscribe(handler) {
    this.handlers.add(handler);
    handler(this.state);
    return {
      remove: () => {
        this.handlers.delete(handler);
      },
    };
  }
}

export default new UserStore();
