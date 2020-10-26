'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  oss: { enable: true,
    package: 'egg-oss',
  },
};
