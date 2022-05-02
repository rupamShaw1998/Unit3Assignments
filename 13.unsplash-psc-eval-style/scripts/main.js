
async function makeAPIcall(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch(err) {
        console.log("Error:", err);
    }
}

function appendPictures(data,parent){
    data.forEach(ele => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.urls.small;

        let p = document.createElement("p");
        p.innerText = ele.user.name;

        div.append(img, p);
        div.onclick = () => {
            localStorage.setItem("clicked_item", JSON.stringify(ele));
            window.location.href = "info.html";
        }
        parent.append(div);
    });
}

export {makeAPIcall, appendPictures};