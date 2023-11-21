
document.querySelector("#btnSearchl").addEventListener("click", function(){
    debugger
    console.log('Butona bastım');
    var input=document.querySelector('#search').value;
    FetchIslemleri(input)
});

// FetchIslemleri('Turkey')
function FetchIslemleri(country) {
    fetch('https://restcountries.com/v3.1/name/' + country)
    .then((response) => response.json())
    .then((data) => {
        if(data?.status){ // todo: hata yakalama


            //todo: if else ,ü switch case
            // for, foreach, index değeri
        }
        oneDeger(data[0]);
        const neighbors = data[0].borders.toString();
        Komsular(neighbors);
    });
}

function oneDeger(data) {

    var deger = document.querySelector('#article');
    deger.innerHTML='';
    var resim = `
    <div class="col-3" id="resim">
    <h4 id="ortala">Ülke</h4>
    <img src="${data.flags.png}" id='resim'>

    
</div>
<div class="col-9" id="resim2">
    <h4 id="ortala">Ülke Bilgileri</h4>
    <ul>
        <li>
            <h6>Başkenti</h6>
            <p>${data.capital[0]}</p>
        </li>
        <li>
            <h6>Konuşulan Diller</h6>
            <p>${Object.values(data.languages)}</p>
        </li>
        <li>
            <h6>Komşuları</h6>
            <p>${data.borders}<p>
        </li>
        
    </ul>
</div>
    `;

    deger.insertAdjacentHTML('beforeend', resim);
}

// function Komsular(deger) {
//     console.log(deger);
// }