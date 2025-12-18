function regexVar(){
     /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    // Defining the start and finish with the same vowel 
    //for the object
    let re = /^([aeiouAEIOU]).*\1$/;
    let texto = "Alaska";
    let texto1="Elefante";
    let texto3="Apple";
    return re;
}
