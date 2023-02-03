require("colors");

const { TYPES } = require("./helper");

console.log("asdasd".red);

const { sucess, warn, error } = TYPES;

const logSucess = (message) => {
  const msg = message[sucess];
  console.log(msg);
};
const logWarn = (message) => {
  const msg = message[warn];
  console.log(msg);
};
const logError = (message) => {
  const msg = message[error];
  console.log(msg);
};

const log = () => {
  return {
    sucess: (msg) => logSucess(msg),
    warn: (msg) => logWarn(msg),
    error: (msg) => logError(msg),
  };
};

const logger = log();

logger.sucess("YES !!");
logger.warn("It Okay !!");
logger.error("NO !!");

module.exports = log;
