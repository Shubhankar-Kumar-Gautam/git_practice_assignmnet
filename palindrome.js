let str ="naman"
let rev = ""
let flag=false
for(let i=str.length-1; i>=0; i--)
{ 
 rev+=str[i]
if(rev==str)
{
 flag=true;
}
}
if(flag==true)
{
 console.log("Yes")
}
else
{
  console.log("No")
} 