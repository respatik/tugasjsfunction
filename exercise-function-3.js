// converter umur kucing

const catAgeConverter;

catAgeConverter = (year) => {if (year == 1){
    return 15;
} else if (year == 2){
    return 24;
} else if (year >2){
    return 24 + 4 * (year - 2);
} else {
    return "data tidak ditemukan"
}
} 