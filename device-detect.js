(function () {

    // 已經在手機版，不要再次跳轉
    if (window.location.pathname.includes("/mobile/")) {
        return;
    }

    // 取得目前頁面名稱
    // 如果網址最後是 /，代表首頁，要當成 index.html
    const path = window.location.pathname;

    const page =
        path.endsWith("/")
            ? "index.html"
            : path.split("/").pop();

    // 電腦版頁面 → 對應手機版頁面
    const mobilePages = {

        "index.html": "mobile/index.html",

        "help.html": "mobile/help.html",

        "all-foods.html": "mobile/all-foods.html",

        "dessert.html": "mobile/dessert.html",

        "fruit.html": "mobile/fruit.html",

        "rice.html": "mobile/rice.html",

        "noodles.html": "mobile/noodles.html",

        "mantou.html": "mobile/mantou.html",

        "bao.html": "mobile/bao.html",

        "seafood.html": "mobile/seafood.html",

        "vegetable.html": "mobile/vegetable.html"

    };

    // 螢幕寬度 768px 以下 → 跳到手機版
    if (
        window.innerWidth <= 768 &&
        mobilePages[page]
    ) {

        window.location.href = mobilePages[page];

    }

})();