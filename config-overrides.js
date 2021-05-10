const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = require('./package.json').theme;
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
    }),
    // 如果没有addLessLoader，antdMobile less样式就会加载无效
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
);