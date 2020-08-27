import React from "react";
import { Tabs } from "antd";

class TabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeKey: '2',
    };
  }

  onTabChange = (activeKey) => {
      this.setState({activeKey});
  }

  render() {
    const { TabPane } = Tabs;

    return (
      <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    );
  }
}
export default TabsDemo;
