const apiFn=async ()=>{
   let res=await fetch('https://icanhazdadjoke.com/slack')
   let data=await res.json();
   console.log(data.attachments[0].text);
}
apiFn()