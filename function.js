const youRock=function(name){
    return "You rock "+name;

};

const square =function(num)
{
    return num *num;
};
const cube =function(num)
{
    return num *num*num;
};
const toTheFourth =function(num)
{
    return num *num*num*num;
};

const calculator =function(num1,num2,operation)
{
    if(num1 || num2 ==="")
    {
        return "calculator only accepts numbers";
    }
    else {
        if(operation==="+")
        {
            return num1+num2;
        }
        if(operation==="-")
        {
            return num1-num2;
        }
        if(operation==="/")
        {
            return num1/num2;
        }
        if(operation==="*")
        {
            return num1*num2;
        }else{
            return "calculator can only add, subtract, divide, or multiply";
        }

    }
  
}
calculator(1, 2, "+") // should return 3 
calculator(1, 2, "-") // should return -1
calculator(1, 2, "/") // should return .5
calculator(1, 2, "*") // should return 2
calculator(1, 2, "something else") // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add")

const findFactor= function(num,factor="")
{
    if(num%3 == 0)
    {
       factor= factor+"Pling";
    }if(num%5==0)
    {
        factor+= "Plang";
    }if(num%7==0)
    {
       factor+= "Plong";
        
    }
    if(factor==="")
    {
        factor= num;
        
    }
    return factor;
};
const findFizz = function(num){
if(num % 3===0)
{
    return "Fizz";
}if(num % 5===0)
{
   return "buzz";
} if(num % 5 === 0 && num % 3 === 0) 
{
    return "FizzBuzz";
}else {
   return num;
}
};


const findFizz = function(num){
    let output = '';
    
    output += num % 3 === 0 ? 'Fizz' : '';
    output += num % 5 === 0 ? 'Buzz' : '';
    
    return output ? output : num;
    };


