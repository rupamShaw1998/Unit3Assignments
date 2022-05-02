import navbar from "./navbar.js";

import { getData, appnedData } from "./scripts/showdata.js";

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML=navbar();

let url = "https://fakestoreapi.com/products/category/jewellery";
let res = await getData(url);

let parent = document.getElementById("data");
appendData(res, parent);