const inquirer = require("inquirer");
const fs = require("fs");

const CURRENT_DIR = process.cwd();

async function createDirectoryContents(templatePath, newPath) {
  const files = fs.readdirSync(templatePath);

  [...files].forEach((file) => {
    const filePath = `${templatePath}/${file}`;
    const stats = fs.statSync(filePath);
    const pathToCopied = `${CURRENT_DIR}/${newPath}/${file}`;

    if (stats.isFile()) {
      const content = fs.readFileSync(filePath, "utf8");
      fs.writeFileSync(pathToCopied, content, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(pathToCopied);
      createDirectoryContents(filePath, `${newPath}/${file}`);
    }
  });
}

async function main() {
  const CHOICES = fs.readdirSync(`${__dirname}/templates`);

  const QUESTIONS = [
    {
      name: "project-choice",
      type: "list",
      message: "What project template would you like to generate?",
      choices: CHOICES,
    },
    {
      name: "project-name",
      type: "input",
      message: "Project name:",
      validate: function (input) {
        if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
        else
          return "Project name may only include letters, numbers, underscores and hashes.";
      },
    },
  ];

  const answers = await inquirer.prompt(QUESTIONS);

  /**mkdir and create directory*/
  const projectChoice = answers["project-choice"];
  const projectName = answers["project-name"];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  console.log("Template Path", templatePath);

  const pathToCreate = `${CURRENT_DIR}/${projectName}`;

  if (fs.existsSync(pathToCreate)) {
    console.log("Path already exists");
    return;
  }

  await fs.mkdirSync(`${CURRENT_DIR}/${projectName}`, { recursive: true });

  createDirectoryContents(templatePath, projectName);

  console.log("Answers", answers);
}

try {
  main();
} catch (error) {
  console.log(error);
}
