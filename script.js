function firstLast6(array){
    if(array[0]==6||array[array.length-1]==6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    if(array[0]==2||array[0]==3){
        return true;
    }
    if(array[1]==2||array[1]==3){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    if(array[0]==2&&array[1]==3){
            return [2,0,array[2]];
        }
    if(array[1]==2&&array[2]==3){
        return [array[0], 2, 0];
    }else{
        return [array[0],array[1],array[2]];
    }
}

function countYZ(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] == 'y' || string[i]=='z'){
            if((string[i + 1]==' ')||i==(string.length-1)){
                count++;
            }
        }
        if (string[i] == 'Y' || string[i]=='Z'){
            if((string[i + 1]==' ')||i==(string.length-1)){
                count++;
            }
        }
    }
    return count;
}

function endOther(a,b){
    var str1=a;
    str1=str1.toLowerCase();
    var str2=b;
    str2=str2.toLowerCase();
    if(str1.length>=str2.length){
        for(i=1;i<=str2.length;i++){
            if(str1[str1.length-i]!=str2[str2.length-i]){
                return false;
            }
        }

    }
    if(str2.length>str1.length){
        for (i = 1; i <= str1.length; i++) {
            if (str2[str2.length - i] != str1[str1.length - i]) {
                return false;
            }
        }
    }
    return true;
}

function starOut(string){
    var newString='';
    for(var i=0;i<string.length;i++){
        if(string[i]!='*'){
            if(string[i-1]!='*'){
                if(string[i+1]!='*'){
                    newString+=string[i];
                }
            }
        }
    }
    return newString;
}

function getSandwich(string){
    var first=0;
    var second=0;
    for(var i=string.length-1; i>=0; i--){
        if(string[i]=='d'&&string[i-1]=='a'&&string[i-2]=='e'&&string[i-3]=='r'&&string[i-4]=='b'){
            first=i+1;
        }
    }
    for(var j=0; j<string.length; j++){
        if(string[j]=='b'&&string[j+1]=='r'&&string[j+2]=='e'&&string[j+3]=='a'&&string[j+4]=='d'){
            second=j;
        }
    }
    return string.slice(first, second);
}

function canBalance(array){
    var leftSum=0;
    var rightSum=0;
    var i=0;
    var j=0;
    var total=0;
    for(var z=0;z<array.length;z++){
        total+=array[z];
    }
    while(true){
        if(leftSum>rightSum){
            rightSum+=array[array.length-1-i];
            i++;
        }
        if(leftSum+rightSum==total){
            break;
        }
        if(leftSum<rightSum){
            leftSum+=array[j];
            j++;

        }
        if(leftSum+rightSum==total){
            break;
        }
        if(leftSum==rightSum){
            rightSum+=array[array.length-i-1];
            if(leftSum+rightSum==total){
                break;
            }
            leftSum+=array[j];
            j++;
            i++;
        }
        if(leftSum+rightSum==total){
            break;
        }
    }
    if(leftSum==rightSum){
        return true;
    }else{
        return false;
    }
}

function countClumps(array){
    var clumps = 0;
    for(i=0;i<array.length;i++){
        if(array[i]==array[i+1]&&array[i]!=array[i-1]){
            clumps+=1;
        }
    }
    return clumps;
}

function evenlySpaced(a,b,c){
    if(a-b==b-c||a-c==c-b||b-c==c-a||b-a==a-c||c-a==a-b||c-b==b-a){
        return true;
    }else{
        return false;
    }
}




function tester() {
    document.getElementById("output").innerHTML += firstLast6([1,2,6]);
    document.getElementById("output").innerHTML += has23([2,7]);
    document.getElementById("output").innerHTML += fix23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ('Yzyzy kekjl yez');
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1,1,1,2,1]);
    document.getElementById("output").innerHTML += countClumps([1,2,3,3,2,1]);
    document.getElementById("output").innerHTML += evenlySpaced(5,3,1);
}
