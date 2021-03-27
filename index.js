//takeANumber adds a person to the line, and handles multiple people being added
function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}
