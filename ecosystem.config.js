module.exports = {
  apps : [{
    name: 'immosol',
    script: './app.js',
    instances: 'max',
    autorestart: true,
    watch: true,
  }],
};
