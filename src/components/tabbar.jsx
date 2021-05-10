import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "../iconfont/iconfont.css";
import "./tabbar.less";
const tabbarItem = [
  {
    name: "首页",
    path: "/home",
    icon: <i className="iconfont icon-home" />,
  },
  {
    name: "消息",
    path: "/news",
    icon: <i className="iconfont icon-news" />,
  },
  {
    name: "购物车",
    path: "/cart",
    icon: <i className="iconfont icon-cart" />,
  },
  {
    name: "我的",
    path: "/mine",
    icon: <i className="iconfont icon-mine" />,
  },
];
export default class Tabbar extends Component {
  tabbarItem = () => {
    const selected = this.props.location.pathname;
    return tabbarItem.map((item) => {
      return (
        <TabBar.Item
          title={item.name}
          key={item.path}
          icon={item.icon}
          selectedIcon={item.icon}
          selected={selected === item.path}
          onPress={() => {this.props.history.push(item.path)}}/>
      );
    });
  };
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        {this.tabbarItem()}
      </TabBar>
    );
  }
}
