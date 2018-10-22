console.log("start");

function main(){

    var inTxt = document.getElementsByName("inTxt")[0].value;
    console.log(inTxt);
    var textArray = inTxt.toUpperCase().split(" ");
    console.log(textArray);

    var inst = Object.create(null);

    wordCount(inst,textArray);




}


function wordCount(inst, textArray) {
    for (var i in textArray) {
        if (inst[textArray[i]] === undefined) {
            inst[textArray[i]] = 1;
        } else {
            inst[textArray[i]]++;
        }
    }


    /*The object 'inst' looks good in the console, but i cannot get it to print in the output
    box. "toString" doesn't seem to work either*/

    update(inst);

}


function update(output){
    document.getElementsByName("outTxt")[0].value = "Check console";
    console.log(output)

}

