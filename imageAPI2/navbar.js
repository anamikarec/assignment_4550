const navbar = ()=>{
    return `
    <ul>
        <li><a href="fashion.html">Fashion</a></li>
        <li><a href="nature.html">Nature</a></li> 
            <li><a href="film.html">Film</a></li> 
            <li><a href="people.html">People</a></li> 
            <li><a href="tech.html">Technology</a></li>
    </ul>
    `
}

const display = ()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        const search = document.getElementById('search').value;
        console.log(search);
        const data = getData(search);
        // createCards(data);
    })
   
}

async function getData(search){
    const res =await fetch(`https://api.unsplash.com/photos?query=${search}&client_id=Q3ei_t3rI-r2KmlIyxD3jwrRFazFH1oMMKaK1K5XYP4`)
    .then((res)=>{
        res = res.json();
        return res;
    })
    .then((res)=>{
        createCards(res,search);
        return res;
    // console.log(res);
    })
}

var cont = document.createElement('div');
document.body.append(cont);
cont.id = "cont";
// cont.style.display = "flex";
// cont.style.flexBasis="30%"
// cont.style.flexDirection = "row";
// cont.style.flexWrap = "wrap";
// cont.style.justifyContent = "spaceBetween";
const createCards = (data,search) => {
    console.log(data);
    // const cont = document.getElementById('cont');
    cont.innerHTML = "";
    
     for(let i = 0; i < data.length; i++) {
        var res = data[i];
        var div = document.createElement('div');
        var img = document.createElement('img');
        // var p = document.createElement('p');

        // console.log(res.id);
        img.src = `${res.urls.full}`;
        img.style.height = "500px";
        // img.style.width = "400px";
        img.style.width = "90%"
        img.style.margin = "5%"
        img.style.border = "1px solid grey"

        // p.textContent =   `Catagory :` + data;
        div.append(img);
        div.style.border = "10px solid grey";
        div.addEventListener("click",()=>{
            alert(`Image Catagory : ${search}\nImageId : ${res.id}\nImage Description : ${res.description}`);
        })
        // div.style.float = "left";
        cont.append(div);
    }
    document.body.append(cont);
    document.body.style.backgroundColor = "cornsilk";
    document.body.style.padding = "10px";
    document.body.style.margin = "10px";
    return cont;
}
export {navbar, display};