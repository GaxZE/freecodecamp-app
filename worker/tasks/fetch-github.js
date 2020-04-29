const fetch = require("node-fetch");

const baseUrl = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log("got:", jobs.length, "jobs");
    onPage++;
  }

  console.log("got:", allJobs.length, "Jobs Total");
}

module.exports = fetchGithub;
