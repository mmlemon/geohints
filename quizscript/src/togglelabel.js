'use strict';

const proc = () => {
    const countries = document.querySelectorAll(".country");
    var cstr = "";
    const colors = ["rgb(255, 255, 255)", "rgb(0, 0, 0)"];

    for(var i = 0; i < countries.length; i++){
        const country = countries[i];
        country.style.color = colors[0];
        country.style.backgroundColor = colors[0];
        cstr += country.innerHTML;
        country.addEventListener("click", () =>{
            switch(country.style.backgroundColor){
                case colors[0]:
                    country.style.backgroundColor = colors[1];
                break;
                case colors[1]:
                    country.style.backgroundColor = colors[0];
                break;
            }
        });
    }
//    alert(cstr + ", len:" + countries.length);
};

// ページ読み込み後に実行するよう設定
window.addEventListener('load', () => proc(), false);