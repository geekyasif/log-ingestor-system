const { faker } = require("@faker-js/faker");

module.exports = function generateRandomLog() {
  return {
    level: faker.helpers.arrayElement(["info", "warning", "error"]),
    message: faker.lorem.sentence(),
    resourceId: faker.internet.domainWord(),
    timestamp: faker.date.recent().toISOString(),
    traceId: faker.string.uuid(),
    spanId: faker.string.uuid(),
    commit: faker.string.alphanumeric(),
    metadata: {
      parentResourceId: faker.internet.domainWord(),
    },
  };
};
