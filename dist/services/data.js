"use strict";
// export async function encrypted(message: any){
//     try{
//         const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
//         let encryptedData = cipher.update(message, "utf-8", "hex");
//         encryptedData += cipher.final("hex");
//         console.log("Encrypted message: " + encryptedData);
//         return encryptedData
//         // encrypted(message)
//     }
//     catch(err){
//         console.log("encrypt error", err);
//     }
// }
// export async function decrypted(){
//     try{
//         const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
// let decryptedData = decipher.update(encrypted("hello@123"), "hex", "utf-8");
// console.log("my decryptedData is",decryptedData);
// decryptedData += decipher.final("utf8");
// console.log("Decrypted message: " + decryptedData);
//     }
//     catch(err){
//         console.log("decrypt error", err);
//     }
// }
