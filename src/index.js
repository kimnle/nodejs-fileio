let defaultEnv = {
    PORT: 3030,
    SOME_DATABASE_URL: "blah blah blah",
    SECURITY_TOKEN: "gkljadglkjglkasdj",
    SECRET_API_KEY: "3847190jkgdhla1895741fdjalk",
    JWT_SECRET_KEY: "some special jwt salt word or phrase"
}

console.log(defaultEnv);

let contentToWrite = "";

// PORT=3030
// SOME_DATABASE_URL=blah blah blah

// ["PORT", "SOME_DATA_BASE_URL", "SECURITY_TOKEN", etc]
Object.keys(defaultEnv).forEach(envKey => {
    // Add a line to contentWrite with the key name and key value
    contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`
});

console.log(contentToWrite);

// Promises-based version of node:fs
const fs = require("node:fs/promises");

async function writeEnvFile() {
    console.log("Before the await");
    try {
        let result = await fs.writeFile("./folder/.env", contentToWrite);
        console.log(result);
    } catch(error) {
        console.log("Error occured writing the file: ", error);
    }

    console.log("After the await");
}
writeEnvFile()

// console.log("Before the promise");

// fs.writeFile(".env", contentToWrite).then(() => {
//     console.log("After the file has been written");
// }).then(() => {
//     console.log("Some other operation that had to wait for file writing to be done");

    // fs.writeFile(".someOtherFile", contentToWrite).then(() => {
    //     console.log("After the file has been written in the 2nd block");

    //     fs.writeFile(".someOtherFile", contentToWrite).then(() => {
    //         console.log("After the file has been written in the 3rd block");
    //     }).catch((error) => {
    //         console.log("Error occured in a deeply-nested promise chain", error);
    //     });
    // }).catch((error) => {
    //     console.log("Error occured in the 2nd promise chain", error);
    // });
// }).catch((error) => {
//     console.log("This error occured: ", error);
// }).finally(() => {
//     console.log("All file writing is done");
// });

// console.log("After the promise");

// const fs = require("node:fs");

// fs.writeFileSync(".env", contentToWrite);
// console.log("File has been written!!");

// console.log("Before the fs callback");

// fs.writeFile(filePath, fileContents, callback);
// fs.writeFile("./folder/.env", contentToWrite, (error) => {
//     if (error) {
//         console.log("File writing had errors!!");
//     } else {
//         console.log("File has been written!!");
//     }

    // console.log("writeFile has reached the callback");

    // console.log("File has been written!!");
// });

// console.log("After the fs callback");