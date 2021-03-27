//takeANumber adds a person to the line, and handles multiple people being added
function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

/*nowServing returns "There is nobody waiting to be served!" if there is no one on line,
and an anouncement about who it's serving if the line shifts*/
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var currentlyServing = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentlyServing}.` 
  }
}
