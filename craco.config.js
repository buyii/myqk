const CracoLessPlugin = require('craco-less');
module.exports = {
    devServer: {
        port: 5000, // 端口号
        host: '0.0.0.0',//192.168.0.102
        bonjour: true,
        client: {
            progress: true,
        },
        hot: true
    },
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
};