import React, { PropTypes } from 'react'
import classnames from 'classnames'
import './Live.scss'
class Live extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      power: true
    }
  }
  render() {
    return (
      <div className={classnames({
        Live: true,
        on: this.state.power
      })} onClick={() => {
        let newPower = !this.state.power
        this.setState({
          power: newPower
        })
        this.props.toggle(newPower)
      }}>
        <div className="Switch">
          <div className={classnames({
            Switcher: true
          })}></div>
        </div>
        <div className="LabDesc">
          <div className="Dot"></div>
          <div className="LabLive">live</div>
        </div>
      </div>
    )
  }
}
export default Live