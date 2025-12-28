### String Access
For <strong>accessing characters</strong> you need to use <strong> .chartAt(index)</strong><br/><br/>
Example:<br/><br/>
dog.chartAt(1); // output: o <br/><br/>
<strong>To access several characters:</strong><br/>
Please use <strong>.substring(startIndex,endIndex);</strong><br/>
<strong>It wil return characters between the specified indexes.</strong><br/><br/>
Example:<br/><br/>
'Youtube'.substring(1,2); //output: o<br/>
'Youtube'.substring(3,7); //output: 'tube'<br/><br/>
Note:<br/><br/>
If you do not pass a second parameter, the request will return the whole entire string from the start index.<br/><br/>
Example:<br/><br/>
'Youtube'.substring(1);//output: 'outube'<br/>
<br/>
In relation to <strong>cybersecurity</strong>:<br/><br/>
We use .chartAt( ) to clear data and analize attacks. It is used to validate if a field as an user name field only has letters and not dangerous symbols as "<" or " >".<br/>