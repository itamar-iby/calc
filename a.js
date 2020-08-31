function pushButton(buttonValue)
{
     if (buttonValue == 'C')
     {
          document.getElementById('screen').value = '';
     }
     else
     {
          document.getElementById('screen').value += buttonValue;
     }
}
function calculate(equation)
{
     var answer = eval(equation);
     document.getElementById('screen').value = answer;
}