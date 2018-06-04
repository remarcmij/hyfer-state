# State Management - Observer pattern vs Mobx

## Introduction

The Observable pattern* for managing global application state was chosen in the class 11 project for educational purposes. However, now that the complexity of the application is increasing, all the extra code required for this solution is becoming a burden. Therefore, one of the objectives of the class 13 project is to simplify state management by migrating to mobx.

\*<small>[Wikepedia](https://en.wikipedia.org/wiki/Software_design_pattern): In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design.</small>

## Sample application

This sample application compares the two state management solutions currently implemented in Hyfer:

1. Custom stores based on the Observer Pattern.
2. Mobx stores.

The application consists of these three simple components:

| Component | Description |
|-----------|-------------|
| App  | The top level component. |
| ObsUser | Uses an observable store. |
| MobxUser | Uses a mobx store. |

Both `ObsUser` and `MobxUser` components simply render an `h2` element with the text `Hello, name`, where the value of `name` is obtained from a store.

In the `componentDidMount()` method of the `App` component the `name` values of the stores are dynamically set to `Jim` and `Valerio` respectively. 

When you run the application you should see the following output:

```
Hello, Jim!
Hello, Valerio!
```

The store based on the Observable pattern can be found in `obs-stores/UserStore.js`. This is how most of the stores are currently implemented in Hyfer (however some of the stores do not use ES6 classes). The mobx store can be found in the `mobx-stores` folder.

If you compare the two store types and the two components where these stores are used you can see that a lot of [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) is needed to support the stores based on the Observable pattern. Basically, these stores are used to copy global state from the store to local state in the component whenever a change is made to the global state. Components that use the Observable store must explicitly subscribe and unsubscribe through the `componentDidMount()` and `componentWillUnmount()` life cycle methods.

With the mobx solution there is no need to subscribe and unsubscribe, nor is there a need to maintain local component state. The store implementation is simpler too. There is much less code to write and worry about, which is a _good thing_!

