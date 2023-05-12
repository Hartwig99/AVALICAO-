class StarRating {
    constructor(qs) {
        this.ratings = [
            {id: 1, name: "Terrivel"},
            {id: 2, name: "Ruim"},
            {id: 3, name: "OK"},
            {id: 4, name: "Bom"},
            {id: 5, name: "Excellent"}

        ];
        this.ratings = null;
        this.el = document.querySelector(qs);

        this.init();
    }
}