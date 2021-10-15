const navbar = ()=>{
    return `
    <nav>
    <div id="navBarUp">
        <div><img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" height="40px" width="40px"></div>
        <div><input type="text" placeholder="Search photos for high-resolution" id="search"></div>
        <div><button type="submit" id="btn">Search</button></div>
        <div><img src="https://www.w3schools.com/howto/img_avatar.png" height="40px" width="40px"class="icon"></div>
    </div>
    <ul>
        <li><a href="">Fashion</a></li>
        <li><a href="">Nature</a></li> 
            <li><a href="">Film</a></li> 
            <li><a href="">People</a></li> 
            <li><a href="">Technology</a></li>
    </ul>
</nav>
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
        createCards(res);
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
const createCards = data => {
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