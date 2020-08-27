import React from "react";
import { Tree } from "antd";

class TreeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: []
    };
  }

  onExpand = expandedKeys => {
    this.setState({ expandedKeys });
  };

  onSelect = selectedKeys => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key)
      });
    } else {
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  };

  render() {
    const { TreeNode } = Tree;
    return (
      <Tree
        expandedKeys={this.state.expandedKeys}
        selectedKeys={[]}
        onExpand={this.onExpand}
        onSelect={this.onSelect}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf" key="0-0-0" />
          <TreeNode title="leaf" key="0-0-1" />
        </TreeNode>
      </Tree>
    );
  }
}

export default TreeDemo;
