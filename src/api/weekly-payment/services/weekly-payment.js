'use strict';

/**
 * weekly-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekly-payment.weekly-payment');
