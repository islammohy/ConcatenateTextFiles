# ConcatenateTextFiles

Concatenate Text Files in a specific path into one file called `output.txt` in the same folder.

## Installation

You may need to install the necessary dependencies:

```bash
npm install fs
```

## Usage

Make sure to replace `/path/to/folder` with the actual path to the folder containing your text files.

To run the app, use the following command:

```bash
node app.js
```

The application will read all the text files in the specified folder, concatenate their contents, and save the resulting text into `output.txt` within the same folder.

## Troubleshooting

If your system doesn't recognize the `npm` command, which is used for managing Node.js packages, follow these steps:

1. **Install Node.js:** First, make sure you have Node.js installed on your system. You can download it from the [official website](https://nodejs.org/).

2. **Check Node.js Installation:** After installation, open a new terminal window and type `node -v` to check if Node.js is installed properly. It should print the version number of Node.js. If it doesn't, there might be an issue with the installation.

3. **Check npm Installation:** Similarly, you can check if npm is installed by typing `npm -v` in the terminal. It should print the version number of npm. If it doesn't, npm might not have been installed properly.

4. **Restart Terminal/Command Prompt:** Sometimes, after installing Node.js, you might need to restart your terminal or command prompt for the changes to take effect.

5. **Check Path Environment Variable:** Ensure that the directory where npm is installed is added to your system's PATH environment variable. This allows your system to locate npm when you type the command in the terminal.

6. **Reinstall Node.js/npm:** If none of the above steps work, you might want to consider reinstalling Node.js/npm to ensure a clean installation.

Once npm is recognized by your system, you should be able to use it to manage packages like `fs` with `npm install fs`.