function heyJude(){
  
  const line =  "Na na na na na na na, na na na na, hey Jude.";
  return line.repeat(16);
}

function prohibitedLanguage(username) {
  
  let myRegExp = (\candycorn\,\brusselssprouts\);
  
  return myRegExp.test(username);
 
 
}