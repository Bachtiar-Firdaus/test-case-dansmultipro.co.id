const { AbilityBuilder, Ability } = require("@casl/ability");

const policies = {
  user(user, { can }) {
    can("view", "Product");
  },
  admin(user, { can }) {
    can("manage", "all");
  },
};

function policyFor(user) {
  let builder = new AbilityBuilder();
  if (policies[user.role]) {
    policies[user.role](user, builder);
  }
  return new Ability(builder.rules);
}

module.exports = { policyFor };
