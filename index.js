function decodeString(s) {
  const stack = [];
  for (const char of s) {
    if (char !== "]") stack.push(char);
    else {
      let str = "";
      while (stack.length && stack[stack.length - 1] !== "[")
        str = stack.pop() + str;
      stack.pop();
      let num = "";
      while (stack.length && !isNaN(stack[stack.length - 1]))
        num = stack.pop() + num;
      stack.push(str.repeat(parseInt(num)));
    }
  }
  return stack.join("");
}
