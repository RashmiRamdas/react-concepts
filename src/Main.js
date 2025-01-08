import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './Home'
import UseEffectEx from './concepts/01useEffect';
import UseMemoEx from './concepts/02useMemo';
import UseReducerEx from './concepts/03useReducer';
import UseStateEx from './concepts/04useState';
import hocEx from './concepts/05hoc';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={Home}/> */}
      <Route path='/useEffect' component={UseEffectEx}/>
      <Route path='/useMemo' component={UseMemoEx}/>
      <Route path='/useReducer' component={UseReducerEx}/>
      <Route path='/useState' component={UseStateEx}/>
      <Route path='/hoc' component={hocEx}/>
    </Switch>
  </main>
)

export default Main
