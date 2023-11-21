//* for ile tılanılan elementi secebiliyoruz. addBtn[i]
const card = document.querySelectorAll(".card-product");
const addBtn = document.querySelectorAll("#addBtn");
const shoppingCard = document.querySelector(".sopping-card");
const shoppingBtn = document.querySelector("#shopping-btn");
const cardContainer = document.querySelector(".card-container");


Url();
// api istek atma
function Url() {
    let newApi = "95f8d5f2e7fa486fa9a6e38f60b67355"
    let baseURL = (`https://newsapi.org/v2/everything?q=apple&from=2023-11-14&to=2023-11-14&sortBy=popularity&apiKey=${newApi}&language=tr`)

    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {

            console.log(data)
            const articles = data.articles;

            articles.forEach(data => {

                const {
                    urlToImage,
                    title,
                    description
                } = data

                product(urlToImage, title,description);

            });

        })

        .catch((err) => console.log(err))
}

// ürün cart olusturma
function product(urlToImage, title, description) {


    let div = document.createElement("div");
    div.className = "card-product"

    let imgDiv = document.createElement("div");
    imgDiv.className = "img";

    let img = document.createElement("img");
    img.className = "image"
    img.src = urlToImage;
    img.alt = "product"

    let textDiv = document.createElement("div");
    textDiv.className = "text-product";

    let h1 = document.createElement("h1");
    h1.className = "text-title";
    h1.textContent = title

    let textP = document.createElement("p");
    textP.className = "text-content";
    textP.textContent = description

    let notificationDiv = document.createElement("div");
    notificationDiv.className = "text-notification"

    let notificationP = document.createElement("p");
    notificationP.className = "price";
    notificationP.textContent = "126.000"

    let a = document.createElement("a");
    a.className = "addBtn";

    let i = document.createElement("i");
    i.className = "shopping fa-solid fa-cart-shopping";





    cardContainer.appendChild(div);
    div.appendChild(imgDiv);
    imgDiv.appendChild(img);
    div.appendChild(textDiv);
    textDiv.appendChild(h1);
    textDiv.appendChild(textP);
    textDiv.appendChild(notificationDiv);
    notificationDiv.appendChild(notificationP);
    notificationDiv.appendChild(a);
    a.appendChild(i);


    let addBtn = div.querySelector('.addBtn');

    // elemnte tıklandıgında yapılacak islemler value'leri gonderme
    addBtn.addEventListener("click", function (e) {
        let image = div.querySelector(".image").src;
        let title = div.querySelector(".text-title").textContent;
        let price = div.querySelector(".price").textContent;
        
        addBtn.classList.add("disabled");
        addBtn.textContent = "eklendi";

        let shoppings = new shopping(image, title, price);
        let ui = new UI();
        //üi class icerisinde addToCart func. gonder degerleri
        ui.addToCart(shoppings);
    
        e.preventDefault();
    });

}


class shopping { //alışveriş öğeleri için bir model oluşturur
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;

    }
}


class UI { //kullanıcı arayüzü ile ilgili işlevleri barındırır
    addToCart(shopping) {
        let div = document.createElement("div");
        div.innerHTML =
            `
        <div class="sopping-list-item">
            <div class="img">
                <img src="${shopping.image}" alt="product">
            </div>
            <div class="text">
                <span>${shopping.title}</span>
            </div>
            <div class="price">
                <span>${shopping.price}</span>
            </div>
            <div class="delete-icon">
                <a href="#" class="btn-delete"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        
        `
        console.log("sucsess")
        
        shoppingCard.appendChild(div);


        //product delete
        div.querySelector('.btn-delete').addEventListener('click', function (e) {
            e.preventDefault();
            div.remove();
        });
    }
}


// product data 
// for (let i = 0; i < card.length; i++) { // card'ların icerisinde don  
//     addBtn[i].addEventListener("click", function (e) { // tıklanılan card alıyor
//         let image = card[i].querySelectorAll(".image")[0].currentSrc
//         let title = card[i].querySelectorAll(".text-title")[0].textContent;
//         let price = card[i].querySelectorAll(".price")[0].textContent;
//         addBtn[i].classList.add("disabled");
//         addBtn[i].textContent = "eklendi"

//         let shoppings = new shopping(image, title, price); //shopping class'nın nesnesi 
//         let ui = new UI();
//         ui.addToCart(shoppings); //UI icerisindeki func. cagırıyoruz.  verileri de shoppingden aldı

//         e.preventDefault()
//     })
// }


//shopping cart open close
function cardToggle() {
    shoppingBtn.addEventListener("click", function (e) {
        shoppingCard.classList.toggle("d-none");
        e.preventDefault()
    })
}

cardToggle(); //= html ekli olan d-none kaldırıyor ekliyor.




//!