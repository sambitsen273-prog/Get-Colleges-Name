let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let p=document.querySelector("p");
let list=document.querySelector("ul");
btn.addEventListener("click",async () => {
    let inp=document.querySelector("input");
    let country=document.querySelector("input").value;
    if(country===""){
        p.innerText="";
    }
    else{
        const bgUrl = `https://loremflickr.com/1600/900/${country}`;
        document.body.style.backgroundImage = `url('${bgUrl}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        p.innerText="Loading...";
        let res= await getcolleges(country);
        show(res);
        inp.value="";
    }
});
function show(res){
    if(res.length===0){
        document.body.style.backgroundImage =
  "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=1400&h=1400&s=1')";
        p.innerText="Data Not Found!!! Please try again.";
        list.innerText="";
    }
    else{
        document.body.style.backgroundColor="rgba(0,0,0,0.5)";
        list.innerText="";
        p.innerText="";
        for(r of res){
            let li=document.createElement("li");
            li.innerHTML = `<span><b>${r.name}</b></span>`;
            list.appendChild(li);
        }
    }
}
async function getcolleges(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
        return [];
    }
}