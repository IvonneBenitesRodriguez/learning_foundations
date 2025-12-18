#### Creating Arrays from Strings:
Arrays can be created using <strong>the split() function on a string </strong>.<br/>
Example:<br/>
var sentence = "the quick brown dog jumped over the lazy cat";<br/>
var words = sentence.split(" ");<br/>
for (var i = 0; i < words.length; i++){ <br/>
    console.log("word" + i + ":" + words[i]); <br/>
} <br/>
the output wil be : <br/>
word 0: the <br/>
word 1: quick <br/>
word 2: brown <br/>
word 3 : dog <br/>
word 4 : jumped <br/>
word 5: over  <br/>
word 6: the <br/>
word 7: lazy <br/>
word 8 : cat <br/>