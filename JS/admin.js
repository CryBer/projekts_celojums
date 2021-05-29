const POP_UP = document.getElementById("popup");
/*vairāki celojumi*/
let celojumi = [];

document.getElementById("pievienot_celojumu").addEventListener("click", () => {
    POP_UP.style.display = "block";
})

document.getElementById("pievienot_poga").addEventListener("click", () => {
    POP_UP.style.display = "none";
    console.log(popup_valsts_src.value);
    console.log(popup_datums_src.value);
    console.log(popup_cena_src.value);
    console.log(popup_apraksts_src.value);

    /*Viens celojums*/
    let celojums = { valsts: popup_valsts_src.value, datums: popup_datums_src.value, cena: popup_cena_src.value, apraksts: popup_apraksts_src.value };
    /* valsts.value = ""; */
    console.log(celojumi);
    celojumi.push(celojums);

})

function render() {
    let bibleoteka = documents.getElementById("bibleoteka");
}