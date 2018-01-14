import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Forms from './demo/Forms'
import './App.scss'
@connect(
  state => ({
    ...state
  }),
  {}
)
class AppContainer extends React.Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Forms} exact path='/demo-forms' />
        </Switch>
      </div>
    )
  }
}
export default withRouter(AppContainer)
