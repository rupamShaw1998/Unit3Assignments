async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch(err) {
        console.log("error:",err);
    }
}

function appendData(data, parent) {
    data.forEach(function (ele) {
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        div.append(img, p);

        parent.append(div);
    });
}

export { getData,appendData};