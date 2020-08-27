export default {
  singular: true,
  antd: {},
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "card-demo",
          component: "./CardDemo"
        },
        {
          path: "tabs-demo",
          component: "./TabsDemo"
        },
        {
          path: "tree-demo",
          component: "./TreeDemo"
        }
      ]
    }
  ]
};
