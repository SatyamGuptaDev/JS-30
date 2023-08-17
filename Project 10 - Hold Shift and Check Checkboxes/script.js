const item = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let l = checkboxes.length;
let lastChecked = [];
lastChecked.push(-1);



checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', function(event) {
        if(event.shiftKey && this.checked){
            if(lastChecked[lastChecked.length - 1] == -1){
                for(var j=0; j<=index; j++){
                    checkboxes[j].checked = true;
                }
            }
            else if(index > lastChecked[lastChecked.length - 1]){
                for(var j=lastChecked[lastChecked.length - 1]; j<=index; j++){
                    checkboxes[j].checked = true;
                }
            }
            else if(index<lastChecked[lastChecked.length - 1]){
                for(var j=index; j<=lastChecked[lastChecked.length - 1]; j++){
                    checkboxes[j].checked = true;
 
                }
            }
        }

        if (checkbox.checked) {
            lastChecked.push(index);
        } else if(index == lastChecked[lastChecked.length - 1]){
            lastChecked.pop();
        }
    });
});









