//using filter also to remove duplicates
const numbers = [1,2,3,4,1,3,5,6,1,3];
const solution = numbers.filter((item, index) => numbers.indexOf(item) === index);
console.log(solution);
//usando Filter tambien elimino duplicados:
const compliance = ["PCI-DSS", "NIST CSF", "Sox", "ISO27001", "OWASP TOP 10", "Sox", "ISO27001"];
const complianceCorrected = compliance.filter((item,index) => compliance.indexOf(item) === index);
console.log(complianceCorrected);
//otro ejemplo de filter:
const openSourceTools = ["Nmap","Vega","Spiderfoot","OWASP ZAP", "Nikto","Nmap", "Vega"];
const openSourceToolsVersion = openSourceTools.filter((item,index) => openSourceTools.indexOf(item) === index);
console.log(openSourceToolsVersion)
//otro ejemplo de filter
const industriesMoreAffected = ["Healthcare", "Banks", "Government", "Supermarkets", "Entertainment", "Banks", "Healthcare"];
const industriesMoreAffectedVersion = industriesMoreAffected.filter((item, index) => industriesMoreAffected.indexOf(item) === index);
console.log(industriesMoreAffectedVersion);