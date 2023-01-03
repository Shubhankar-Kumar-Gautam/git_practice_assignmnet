  let str = naman;
  let rev = "";
 
 for(let i=str.length; i>=0; i++)
{ 
   rev+=str[i]
  if(rev==str)
 {
   flag=true;
 }
 }
if(flag=true)
{
   console.log("Yes")
}
else
{
    console.log("No")
} 