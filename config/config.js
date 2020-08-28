export default {
  singular: true,
  antd: {},
  dva: {},
  mock: {},
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
  ],
  proxy: {
      '/dev': {
          target: 'http://127.0.0.1:8000',
              changeOrigin: true,
            },
    },
};
