//Mad Lib Generator

//Event Listeners
document.getElementById('btn').addEventListener('click', displayBtn)

//Event Functions
function displayBtn() {
    // Read the Input Fields
    let word = document.getElementById('input').value;
    let word1 = document.getElementById('input1').value; 
    let word2 = document.getElementById('input2').value;
    let word3 = document.getElementById('input3').value;
    let word4 = document.getElementById('input4').value;
    


    //Create mad lib message
    let madlibMessage = '"There are too many' + ' ' + word + ' ' + word1 + ' on this ' + word2 + ' airplane!"' + 'I screamed.' + '"Somebody has to ' + word3 + ' on the ' + word4 + ' to solve this puzzle.'
    alert(madlibMessage)

    //Output mad lib message
    document.getElementById('message').innerHTML = madlibMessage;
}

function clearMessage() {
    document.getElementById('message').style.visibility = "hidden";
}