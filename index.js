//takeANumber adds a person to the line, and handles multiple people being added
function takeANumber(currentLine, newName){
  console.log(currentLine)
  currentLine.push(newName);
  console.log(currentLine)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}
