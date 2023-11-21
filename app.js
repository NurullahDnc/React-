//* for ile tılanılan elementi secebiliyoruz. addBtn[i]
const shoppingCard = document.querySelector(".sopping-card");
const shoppingBtn = document.querySelector("#shopping-btn");

//alışveriş öğeleri için bir model oluşturur
class shopping {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

//kullanıcı arayüzü ile ilgili işlevleri barındırır
class UI {
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

cardToggle(); //= html ekli olan d-none kaldırıyor ekliyor.

//shopping cart open close
function cardToggle() {
    shoppingBtn.addEventListener("click", function (e) {
        shoppingCard.classList.toggle("d-none");
        e.preventDefault()
    })
}



//!