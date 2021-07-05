module.exports = {
  apps : [{
    name: 'immosol',
    script: 'app.js',
    instances: 'max',
    autorestart: true,
    watch: true,
    env:{
      NODE_ENV: 'development',
    },
    env_production:{
      NODE_ENV: 'production'
    }
  }],
};
