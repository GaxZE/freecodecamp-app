const CronJob = require("cron").CronJob;

const fetchGithub = require("./tasks/fetch-github");

// Fetch github jobs
new CronJob("*/60 * * * * *", fetchGithub(), null, true, "Europe/London");
