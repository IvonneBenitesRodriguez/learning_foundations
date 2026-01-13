//Examples of the usage of regex in cybersecurity:
// How to detect a SQL injection using i pattern ( it does not matter the case)
// const sqlPattern = /(select|union|drop|insert|delete)/i;
// console.log(sqlPattern.test("SELECT * FROM users"));
// console.log(sqlPattern.test("select * from users"));
// console.log(sqlPattern.test("sELect * from uSeRs"));
// console.log(sqlPattern.test("UNION SELECT password"));
// console.log(sqlPattern.test("drop table users"));
// console.log(sqlPattern.test("insert users"));
// console.log(sqlPattern.test("delete users"));
//how to find a specific IP from a server's log:
// for this exercise we will use m multi-line flag 
// This exercise has several multi-lines therefore we use m flag
// this is a log with multi-lines(\n)
const serverLogs = "192.68.1.1 - Login successful\n10.0.0.5 - Access Denied\n192.168.1.100 - Unauthorized attempt";
// we have identified that IP 10.0.0.5 belongs to a black List 
// We want to know if this IP have attempted to enter to the server
// Therefore, we want to get the IP 10.0.0.5 and if it is at the start of a line
// For it we use \. because . in regex means any character 
// Therefore we use \. to get the real point of the IP 
const blackListedIP = /^10\.0\.0\.5/m;
// to get the output:
console.log(blackListedIP.test(serverLogs));
