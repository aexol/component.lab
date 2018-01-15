import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Live from './ui/Live'
let mockCss = `padding:15px 40px
textTransform:uppercase
fontSize:12
fontFamily:Helvetica
fontWeight:100
background:#68E
borderRadius:4
color:white
`
@connect(
  state => ({
    valid: state.valid
  }),
  {
    // Put actions here
  }
)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      css: mockCss,
      text: 'Text'
    }
  }
  live = (live) =>{
    console.log(live)
  }
  css = () => {
    console.log(this.state.css.split("\n"))
    let ret = this.state.css.split("\n").filter(a=>a).map(a=> a.split(":")).reduce((a,b)=>{
      a[b[0]] = isNaN(b[1])?b[1]:parseFloat(b[1])
      return a 
    },{})
    console.log(ret)
    return ret
  }
  render() {
    this.css()
    return (
      <div className='Home'>
        <div className="Left">
          <div className="UpperMenu">
            <div className="LabComponentName">
              ans-social/button
            </div>
            <Live toggle={this.live} />
          </div>
          <textarea value={this.state.css} onChange={(e) => { this.setState({ css: e.target.value }) }} />
        </div>
        <div className="Right">
          <div style={this.css()} className='Component'>
            {this.state.text}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
