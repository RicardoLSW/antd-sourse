export default {
  singular: true,
  antd: {},
  dva: {},
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "Dashboard/Analysis" },
            { path: "/dashboard/monitor", component: "Dashboard/Monitor" },
            { path: "/dashboard/workplace", component: "Dashboard/Workplace" }
          ]
        },
        {
          path: "/card-demo",
          component: "./CardDemo"
        },
        {
          path: "/tabs-demo",
          component: "./TabsDemo"
        },
        {
          path: "/tree-demo",
          component: "./TreeDemo"
        },
        {
          path: "/puzzle-cards",
          component: "./PuzzleCards"
        }
      ]
    }
  ]
};
