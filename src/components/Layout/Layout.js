import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    toggleSideDrawerHandler = () => {
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer closed={this.closeSideDrawerHandler} open={this.state.showSideDrawer} />
        <main className='Content'>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
