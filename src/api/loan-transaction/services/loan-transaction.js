'use strict';

/**
 * loan-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loan-transaction.loan-transaction');
