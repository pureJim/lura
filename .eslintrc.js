module.exports = {
  root: true, // // 告诉eslint找当前配置文件不能往父级查找
  env: {
    // 全局环境
    browser: true,
    es2021: true, // 例子：这样设置之后，就支持新的 ES6 全局变量和类型
    node: true, // 例子：这样设置之后，就支持新的 node 全局变量和类型
  },
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: {
    'no-console': 'error',
  },
};
