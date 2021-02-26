import { resolve } from "path";
import { promises as fsp, writeFile } from "fs";

const { readdir } = fsp;

const IGNORED_DIRECTORIES = ["node_modules", ".gitbook", ".git", "scripts"];

const INCLUDED_FILE_TYPES = [".md"];

const currentPath = process.cwd();

const INDENT = "  ";
const NEW_LINE = "\r\n";
const SUMMARY_FILE_NAME = "/SUMMARY.md";
const README_FILE_NAME = "/README.md";

const getIndentString = (size: number) =>
  [...new Array(size - 1)].reduce((acc) => `${acc}${INDENT}`, "");

const getFiles = async (dir) => {
  const dirents = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? !IGNORED_DIRECTORIES.includes(dirent.name)
          ? [res, ...(await getFiles(res))]
          : undefined
        : INCLUDED_FILE_TYPES.some((type) => res.includes(type))
        ? res
        : undefined;
    })
  );

  return files
    .flatMap((f) => f)
    .filter((f) => f !== undefined && !f.includes(SUMMARY_FILE_NAME))
    .map((f) => f.replace(currentPath, ""));
};

const toPascalCase = (string) => {
  return `${string}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w+)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, "g"), "")
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

const prettyFileName = (fileName: string) =>
  fileName.replace('.md', ' ').split('-').map(toPascalCase).join(' ');

const createMarkdownDirectory = (files: string[]) =>
  files.map((f, pos, arr) => {
    const splitFilePath = f.split("/");
    const totalIndents = splitFilePath.length;
    const file = splitFilePath[splitFilePath.length - 1];

    const isDirectory = !f.includes(".");
    if(isDirectory){
      console.log(`${f}${README_FILE_NAME}`)
    }
    const isDirectoryAndHasREADME =
      isDirectory && arr.includes(`${f}${README_FILE_NAME}`);
    const isREADME = f.includes(README_FILE_NAME);

    const indents = getIndentString(Number(totalIndents));
    const displayName = prettyFileName(file);
    const link = isDirectoryAndHasREADME ? `.${f}${README_FILE_NAME}` : `.${f}`;

    return isREADME
      ? ''
      : isDirectory && !isDirectoryAndHasREADME
      ? `${indents}- ${displayName}${NEW_LINE}`
      : `${indents}- [${displayName}](${link})${NEW_LINE}`;
  }).join('');

const writeToFile = async (data: string) => await writeFile(`${currentPath}${SUMMARY_FILE_NAME}`, data, () => {});

const run = async () => {
  console.log(currentPath);
  const files = await getFiles(currentPath);
  const md = createMarkdownDirectory(files);
  console.log(md);
  writeToFile(md)
};

run();
