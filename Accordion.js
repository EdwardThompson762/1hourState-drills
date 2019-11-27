import React from "react";

import React from "react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  state = {
    currentTabIndex: 0
  };
  /* not showing all the methods */
  renderContent() {
    const currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
        {/* only show content when the tabs array has length */}
  {this.props.tabs.length && (
    <div className='content'>
      {currentTab.content}
    </div>
  )}
</div>
  }
  /* not showing all the methods */
  handleButtonClick(index) {
    console.log('button clicked!', { index })
  }
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      
      <button key={index}>
        {tab.name}
      </button>
      
    )
    )
    return (
      <div>
        {buttons}
      </div>
    )
    

export default Accordion;