#!/usr/bin/env node

import { select, outro, isCancel } from "@clack/prompts";
import chalk from "chalk";
import boxen from "boxen";
import open from "open";
import clear from "clear";

clear();

const data = {
  name: chalk.green.bold("        Sahil A"),
  handle: chalk.white("@sahilium"),
  work: chalk.white("Developer"),
  website: chalk.white.bold("https://sahil.im/"),
  blog: chalk.gray("https://sahil.im/blog/"),
  github: chalk.gray("https://github.com/") + chalk.green("sahilium"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("nonomino"),
  npx: chalk.red("npx") + " " + chalk.white("sahilium"),
};

const label = (s) => chalk.white.bold(s.padStart(12));

const card = boxen(
  [
    `${data.name} / ${data.handle}`,
    "",
    `${label("Work:")}  ${data.work}`,
    `${label("Website:")}  ${data.website}`,
    `${label("Blog:")}  ${data.blog}`,
    `${label("GitHub:")}  ${data.github}`,
    `${label("LinkedIn:")}  ${data.linkedin}`,
    "",
    `${label("Card:")}  ${data.npx}`,
    "",
    chalk.italic("I'm curious, enthusiastic and a student most of the time."),
    chalk.italic("The rest of the time I write code that others can read."),
  ].join("\n"),
  {
    padding: 1,
    margin: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(card);
console.log(
  chalk.cyanBright(
    "Tip: use ↑ ↓ and Enter · Esc to quit · cmd/ctrl + click links\n"
  )
);

const action = await select({
  message: "What do you want to do?",
  options: [
    {
      label: `Send me an ${chalk.green.bold("email")}`,
      value: "email",
    },
    {
      label: "Just quit",
      value: "quit",
    },
  ],
});

if (isCancel(action) || action === "quit") {
  outro("Ok, bye.");
  process.exit(0);
}

if (action === "email") {
  await open("mailto:contact@sahil.im");
  outro("Done, see you soon.");
}