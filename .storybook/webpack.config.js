const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

    module.exports = ({ config }) => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                  presets:[
                      ["@babel/preset-env", 
                      { "targets": {
                        "esmodules": true
                      }  
                    
                      }]
                  ],
                  plugins:[
                      '@babel/plugin-proposal-class-properties',
                      ['@babel/plugin-proposal-decorators',{decoratorsBeforeExport: true}],
                      "@babel/plugin-transform-typescript"
                  ]
              },
              
            },
          ],
        });
        config.module.rules.push({
          test: /\.stories\.ts?/,
          loaders: [{
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {parser: 'typescript'}
          }],
          enforce: 'pre'
        });
      
    config.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig({ config, transpilePackages: ['lit-html', 'lit-element', '@open-wc'] });
};