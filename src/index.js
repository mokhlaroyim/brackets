module.exports = function check(str, bracketsConfig) {
  let opening = [], closing = []
  for(let i=0; i<bracketsConfig.length; i++){
    opening[i] = bracketsConfig[i][0]
    closing[i] = bracketsConfig[i][1]
  }
  let stack = [];
  for(let i=0; i<str.length; i++){
    let char = stack[stack.length-1];
    
    if(opening.includes(str[i]) && closing.includes(str[i])){
        if(char === str[i]){
            stack.pop();
        }else{
            stack.push(str[i])
        }
    } else if(opening.includes(str[i]) ){
      stack.push(str[i]);
    } else if(closing.includes(str[i])){
      let check = closing.indexOf(str[i])
      if(char == opening[check])
        stack.pop()
      else {
          return false
      }
    } else{
      return false
    };
  }
  return stack.length ? false : true;
}