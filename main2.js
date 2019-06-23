var input = document.getElementById("input");
var output = document.getElementById("output");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meters" && resultTypeValue === "kilometers"){
        result.value = Number(input.value) * 0.001;
    
    }else if(inputTypeValue === "meters" && resultTypeValue === "miles"){
        result.value = Number(input.value) * 0.0006;
    
    }else if(inputTypeValue === "meters" && resultTypeValue === "meters"){
        result.value = input.value;

    }

    if(inputTypeValue === "kilometers" && resultTypeValue === "meters"){
        result.value = Number(input.value) * 1000;
    
    }else if(inputTypeValue === "kilometers" && resultTypeValue === "miles"){
        result.value = Number(input.value) * 0.6;
    
    }else if(inputTypeValue === "kilometers" && resultTypeValue === "kilometers"){
        result.value = input.value;

    }

    if(inputTypeValue === "miles" && resultTypeValue === "meters"){
        result.value = Number(input.value) * 1609;
    
    }else if(inputTypeValue === "miles" && resultTypeValue === "kilometers"){
        result.value = Number(input.value) * 1.6;
    
    }else if(inputTypeValue === "miles" && resultTypeValue === "miles"){
        result.value = input.value;

    }

    if(inputTypeValue === "kilograms" && resultTypeValue === "grams"){
        result.value = Number(input.value) * 1000;
    
    }else if(inputTypeValue === "kilograms" && resultTypeValue === "pounds"){
        result.value = Number(input.value) * 2.2;
    
    }else if(inputTypeValue === "kilograms" && resultTypeValue === "kilograms"){
        result.value = input.value;

    }

    if(inputTypeValue === "grams" && resultTypeValue === "kilograms"){
        result.value = Number(input.value) * 0.001;
    
    }else if(inputTypeValue === "grams" && resultTypeValue === "pounds"){
        result.value = Number(input.value) * 0.002;
    
    }else if(inputTypeValue === "grams" && resultTypeValue === "grams"){
        result.value = input.value;

    }

    if(inputTypeValue === "pounds" && resultTypeValue === "kilograms"){
        result.value = Number(input.value) * 0.45;
    
    }else if(inputTypeValue === "pounds" && resultTypeValue === "grams"){
        result.value = Number(input.value) * 453;
    
    }else if(inputTypeValue === "pounds" && resultTypeValue === "pounds"){
        result.value = input.value;

    }

    if(inputTypeValue === "mg" && resultTypeValue === "ton"){
        result.value = Number(input.value) * 1;
    
    }else if(inputTypeValue === "mg" && resultTypeValue === "kilograms"){
        result.value = Number(input.value) * 1000;
    
    }else if(inputTypeValue === "mg" && resultTypeValue === "mg"){
        result.value = input.value;

    }


}