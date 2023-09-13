//  Variables(Degiskenler)
const menu = [
  {
    id: 1,
    title: "Margherita pizza",
    category: "Italy",
    price: 18.99,
    img:
      "https://st5.depositphotos.com/10614052/65772/i/600/depositphotos_657723872-stock-photo-board-tasty-pizza-margarita-white.jpg",
    desc: `Neapolitan pizza ingredients include tomato, mozzarella, basil and olive oil.`,
  },
  {
    id: 2,
    title: "Onion Soup",
    category: "France",
    price: 13.99,
    img:
      "https://www.simplyrecipes.com/thmb/7Ki7BcwR-4znJ5tuchu2d9DE5o4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-French-Onion-Soup-LEAD-04-c1d3c0e12e2c4a3995bb35d082815f2d.jpg",
    desc: `Made from onion and beef broth, served with croutons and melted cheese. `,
  },
  {
    id: 3,
    title: "Fettuccine Alfredo",
    category: "Italy",
    price: 16.99,
    img:
      "https://www.allrecipes.com/thmb/9aWCdbfttLcsW2dFQWwVQBGJM3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-236973-CreamyAlfredoSauce-0238-4x3-1-01e7091f47ae452d991abe32cbed5921.jpg",
    desc: `Pasta with ingredients of mushrooms, chicken breast, cream and basil mixed with parmesan.`,
  },
  {
    id: 4,
    title: "Königsberger Klopse",
    category: "Germany",
    price: 22.99,
    img:
      "https://st4.depositphotos.com/3765293/40178/i/600/depositphotos_401784520-stock-photo-koenigsberger-klopse-boiled-meatballs-white.jpg",
    desc: `German meatball specialty with capers and creamy white sauce `,
  },
  {
    id: 5,
    title: "Labskaus",
    category: "Germany",
    price: 18.99,
    img:
      "https://st.depositphotos.com/7691758/52351/i/600/depositphotos_523515136-stock-photo-labskaus-corned-beef-mashed-potatoes.jpg",
    desc: `The main ingredients are salted meat or corned beef, potatoes and onions, and optional beetroot ,pickled cucumber ingredients can also be added.`,
  },
  {
    id: 6,
    title: "Ratatouille",
    category: "France",
    price: 16.99,
    img:
      "https://st2.depositphotos.com/3278179/9084/i/450/depositphotos_90841292-stock-photo-vegetable-ratatouille-baked-in-cast.jpg",
    desc: `It is preferred alongside meat, grilled or roasted, and can also be eaten alone as a vegetable stew.`,
  },
  {
    id: 7,
    title: "Bruschetta",
    category: "Italy",
    price: 10.99,
    img:
      "https://cdn.create.vista.com/api/media/small/201613106/stock-photo-bread-sandwiches-cheese-baked-tomatoes-dark-wooden-table",
    desc: `It is served with toasted bread slices enriched with tomato sauce, mozzarella and basil products.`,
  },
  {
    id: 8,
    title: "Brezel (German Bagel)",
    category: "Germany",
    price: 6.99,
    img:
      "https://st2.depositphotos.com/22628872/45019/i/600/depositphotos_450191072-stock-photo-baked-pretzels-with-sea-salt.jpg",
    desc: `It can be served on a type of bagel made from wheat dough, optionally with cinnamon sugar or hazelnuts.`,
  },
  {
    id: 9,
    title: "Duck Confit",
    category: "France",
    price: 25.99,
    img:
      "https://st4.depositphotos.com/2208212/23031/i/600/depositphotos_230314630-stock-photo-duck-legs-confit-boiled-potatoes.jpg",
    desc: `Duck legs cooked in their own fat on low heat are served with potatoes, a piece of butter and green salad.`,
  },
  {
    id: 10,
    title: "Ricotta Cheese Ravioli",
    category: "Italy",
    price: 16.99,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/ispanakli_ve_ricotta_peynirli_ravioli-1a187adc-d458-43a2-a52f-da186513c63c.jpg",
    desc: `It is prepared with meat or cheese. It is usually served with pesto sauce or tomato sauce.`,
  },
  {
    id: 11,
    title: "Macaron",
    category: "France",
    price: 10.99,
    img:
      "https://st2.depositphotos.com/4135663/7084/i/600/depositphotos_70849227-stock-photo-row-of-macaroons-on-black.jpg",
    desc: `Chocolate,
    raspberry,
    coffee,
    Apricot,
    pistachio,
    vanilla,
    Lemon,
    Caramel macarons are available.`,
  },
  {
    id: 12,
    title: "Tiramisu ",
    category: "Italy",
    price: 14.99,
    img:
      "https://st2.depositphotos.com/1000389/42731/i/600/depositphotos_427318840-stock-photo-traditional-italian-tiramisu-square-dessert.jpg",
    desc: `Mascarpone cheese and chocolate are used as the main material, it is served by sprinkling cocoa on it.`,
  },
  {
    id: 13,
    title: "Chocolate Souffle",
    category: "France",
    price: 12.99,
    img:
      "https://static9.depositphotos.com/1027198/1145/i/600/depositphotos_11459758-stock-photo-chocolate-souffle-with-berries-fruits.jpg",
    desc: `Can be served with powdered sugar, whipped cream or fresh raspberries.`,
  },
  {
    id: 14,
    title: "Croissant",
    category: "France",
    price: 11.99,
    img:
      "https://st2.depositphotos.com/1024979/43324/i/600/depositphotos_433247728-stock-photo-freshly-baked-butter-croissant-studio.jpg",
    desc: `With plain butter, chocolate, almond, peanut butter, pumpkin, apple, ham, salmon
    varieties are available.`,
  },
  {
    id: 15,
    title: "Berliner(German Muffin)",
    category: "Germany",
    price: 10.99,
    img:
      "https://st4.depositphotos.com/19157714/22380/i/600/depositphotos_223803122-stock-photo-german-donuts-krapfen-berliner-filled.jpg",
    desc: `Chocolate, strawberry, forest fruit and raspberry varieties are available.
    It is served with powdered sugar sprinkled on top.`,
  },
  {
    id: 16,
    title: "Gourmet Mushroom Risotto",
    category: "Italy",
    price: 16.99,
    img:
      "https://st2.depositphotos.com/5895016/10270/i/600/depositphotos_102704364-stock-photo-delicious-mushroom-risotto.jpg",
    desc: `Served with a piece of butter and Parmesan.`,
  },
  {
    id: 17,
    title: "Panna cotta",
    category: "Italy",
    price: 13.99,
    img:
      "https://st.depositphotos.com/1262401/2544/i/600/depositphotos_25441499-stock-photo-tasty-panna-cotta.jpg",
    desc: `Served with seasonal fruits`,
  },

];
//  Selectors(Seciciler)
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
//We used the reduce method to create an array of categories within the menu object.
//(Menu nesnesi icindeki kategorilerden olusan bir dizi olusturmak icin reduce metodu kullandim)

const categoryArray= menu.reduce(
  (values,item)=>
    {
      if(!values.includes(item.category))
      values.push(item.category);
      
      return values;
    }
    ,["All"]);


// Structure to bring the category buttons
//(Kategori butonlarını getirecek yapı)
const categoryList = () => {
  const categoryBtn = categoryArray.map((category) =>{
    return `<button class="btn btn-item btn-outline-dark" data-id=${category}>${category}</button>`;
  }).join("");

  btnContainer.innerHTML = categoryBtn;

  const filterBtns = document.querySelectorAll(".btn-item");
  console.log(filterBtns)
  
  filterBtns.forEach((btn) => {
    btn.addEventListener("click",(e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);

      // Filter menu items based on the selected category(Secilen kategoriye gore menü ogelerini filtreleyin)
      const menucategory = menu.filter((menuItem) => {
        // If the category information coming from the array (menuItem.category) and the category information coming when we click with the mouse are equal
       //(Diziden (menuItem.category) gelen kategori bilgisi ile fareye tıkladığımızda gelen kategori bilgisi eşitse)
        if (menuItem.category === category)
            return menuItem;//Return menuItem information to menuCateGory variable.(menuItem bilgisini menuCateGory değişkenine döndür)
      });
      if(category === "All")
        menuLoad(menu)
      else                     // If not equal, add the menuCategory variable to the parameter of the menuLoad function and run it.
        menuLoad(menucategory);// (Esit degilse menuLoad fonksiyonunun parametresine menuCategory degiskinini ekle ve calistir)
    })
  })

}

//A change can be made in a displayMenu file consisting of html elements by using the menuItems information map method.
//(menuItems bilgisini map methodunu kullanarak html elementlerinden olusan yapiya displayMenu adinda bir degiskene atadik)
const menuLoad = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  }).join("");
  section.innerHTML = displayMenu;
};

menuLoad(menu);// When the page opens, give the menu string as a parameter to the function and run it. (Sayfa acildiginda fonksiyona menu dizisini parametre olarak ver ve calistir)
categoryList();// Bring all category buttons when the page is opened. (Sayfa acildiginda tum  category buttonlarini getir)