document.getElementById("demo").innerHTML="Hello World";
document.write("Hello World");
document.write(2+3);
console.log(2+3);
// windows.alert(2+3);

{
var x=5;
var y=10;
document.write("<br>"+ (x>y));

} 
{
    var n="RAJEHA";
    var s="ASMITA";
    document.write("<br>"+ (n===s));
}
{ 
    let x = 25;
    x++;
    //  document.write("" + ((x != y) ? "Rajeha" : "Pratima"));
    document.write("<br>"+ x); 
}
{ 
    let x = 25;
    x--;
    document.write("<br>"+ x);
}
{
    let a=100;
    let b=200;
    document.write("<br>" + (a>b? "Hi I am Ram":"Hi I am Doctor"));
    
} 
// control statement if
{
    let x=10;
    let y=20;
    if(x>y){
        document.write("<br"+ "x is greater" );
    }
}
// control statement if else
{
    let x=10;
    let y=20;
    if(x>y){
        document.write("<br"+ "x is greater" );
    }
    else{
        document.write("<br> y is greater" );
    }
}
// control statement if else if
{
    let a=100;
    let b=400;
    let c=300;
    if(a>b && a>c)
        {
        document.write("<br> a is greater" +a);
    }
    else if (b>c && b>a){
        document.write("<br> b is greater"+b );
    }
    else{
        document.write("<br> c is greater"+c);
    }
}
// nested loop
{
let a=100;
    let b=400;
    let c=300;
    if (a<b){
        if(b<c){
            document.write("<br> b is greater" + b);
        }
        else{
            document.write("<br> c is greater" + c);
        }
    }
        else{
            document.write("<br> a is greater" + a);
        }

}
// for,while,do-while loop
{
    for(x=1; x<=10; x++)
        {
            document.write("<br>" +x);
        }
}
{
    let x=1;
    do{
        document.write("<br>" +x);
        x++;
    }
    while(x<=10);
}
{
    let x=1;
    while(x<=10)
        {
        document.write("<br>" +x);
        x++;
    }
}
// switch statement
{
    let day;
    switch(new Date().getDay()){
        case 0:
        day="Sunday";
        break;
        case 1:
        day="Monday";
        break;
        case 2:
        day="Tuesday";
        break;
        case 3:
        day="Wednesday";
        break;
        case 4:
        day="Thursday";
        break;
        case 5:
        day="Friday";
        break;
        case 6:
        day="Saturday";
        break;
    }
    document.write("<br>" + day);
}
{
    let x = document.getElementById("css");
    x.style.color = "red";
    x.style.backgroundcolor = "gray";
    x.style.padding = "1rem";

}
{
    document.getElementById("info").style.cssText="color:red; background-color:green; padding:1rem";

}
{
    var x = "car";
    var x ={
        brand:"The name of brand is TATA",
        price:"Its price is affordable. Only 54K",
        color:"Many people refer combination of black&white",
    }
    document.write("<br>" + x.brand + x.price + x.color); 
}
