import rewireReactHotLoader from 'react-app-rewire-hot-loader';

export default function (config, env) {
  config = rewireReactHotLoader(config, env);


  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  return config;
}
