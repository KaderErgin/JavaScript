//Karanlık Mod Değiştirme fonksiyonu (Dark Mode Toggle function)
function darkMode() {

    //Web sayfası ilk kez açıldığında arka planı beyaz olarak gelir dark mode butona tıklandığında
    //ilk karanlık mod daha sonra tıklandığında ise normal mod butonu gelir iki mod arası geçis yapılabilir

    //(When the web page is opened for the first time, the background is white when the dark mode button is clicked)
    //(When the first dark mode is clicked, the normal mode button appears. You can switch between the two modes)

    let body = document.querySelector("body");
    if (document.querySelector("#buttonTheme").innerHTML == " normal mode") {     //Normal mod renk ayarları(Normal mode color settings)
        document.querySelector("#task").style.backgroundColor = "#fff";           //Değer girişi yapılan metin kutusu rengi(Value entered text box color)
        document.querySelector("#task").style.color = "#333";                     //metin kutusu yazı rengi(text box font color)
        body.style.backgroundColor = "#cacaca";                                   // web sitesi arkaplan(website background)
        document.querySelector("#buttonTheme").innerHTML = " Dark Mode";
        document.querySelector("#buttonTheme").className = "bi bi-moon btn btn-dark mt-3";
    } else if (document.querySelector("#buttonTheme").innerHTML == " Dark Mode")
    {
        document.querySelector("#task").style.backgroundColor = "#333";         //Karanlık mod mode icin yapılan renk ayarları(Color settings for dark mode mode)
        body.style.backgroundColor = "#333";
        document.querySelector("#task").style.color = "#cacaca";
        document.querySelector("#buttonTheme").innerHTML = " normal mode";
        document.querySelector("#buttonTheme").className = "bi bi-sun btn btn-light mt-3";
    }
}

let taskDOM = document.querySelector("#task");  // Inputa girilen değer(Value entered in input)
let listDOM = document.querySelector("#list");  // Listenin tamamı(full list)
let allLiDOM = document.querySelectorAll("li"); // querySelectorAll ile tüm (li) arrayleri tanımlamıs oluruz.(We define all (li) arrays with querySelectorAll)

// Liste elemanını silme fonksiyonu(Function to delete list element)
function removeObject(erase) { 
    erase.remove();             // Liste elemanını siler(Deletes the list element)
    eraseStrorage(erase);       // Liste elemanının içeriğini localStorage'den siler(Deletes the contents of the list element from localStorage)
}

// Liste elemanını işaretleme fonksiyonu(List item marking function)
function markElement(){  
    this.classList.toggle("checked");
}

// listelerdeki kapama tuşu (çarpı simgesi (X)) değişkenini liste elemanı silme eventi ile tanımladık.
//(We have defined the close key (cross symbol (X)) variable in lists with the list element delete event)
let closeButton =`<button 
onclick="removeObject(parentNode)" 
style="padding: 15px;" type="button" 
class="close"
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

// Her bir liste elemanı için hem kapama tuşu(liste elemanı silme olayı) hem de liste elemanı işaretleme eventi tanımladık.
//(For each list element, we have defined both close key(list element deletion event) and list element marking event.)
allLiDOM.forEach(e => {
    e.addEventListener("click", markElement);
    e.innerHTML += `${closeButton}`;
})

// Liste elemanı ekleme fonksiyonu
//(Add list element function)
function newElement() {
    //Herhangi bir değer girisi yapılmassa toast bildirimindeki(You cannot add blanks to the list!) metin ekrana gelir
    //(If no value is entered, the text in the toast notification (You cannot add blanks to the list!) is displayed.)
    if (!taskDOM.value || !taskDOM.value.trim()) {
        console.log("You cannot add blanks to the list!");
        $(".error").toast('show') // toast bildirimi 
      
    }
    else {
        // Değer girişi yapılırsa liste için yeni bir (li) elemanı oluşturduk.
        //(If a value is entered, we have created a new (li) element for the list.)
        let liDOM = document.createElement("li"); 
        
        // (li) elemanını liste(ul) içerisine yerleştirdik.(We placed element (li) in list(ul))
        listDOM.append(liDOM); 
                                
        console.log(`Added to the list. Entered value: ${taskDOM.value}`)
        
        //Toast bildirimindeki(Added to the list) metin ekrana gelir
        //(The text in the toast notification (Added to the list) appears)
        $(".success").toast('show') 
        
        liDOM.innerHTML = `${taskDOM.value}${closeButton}`;
        // (li) elemanının içeriğine inputa girilen değeri ve kapama tuşu tanımladık.
       //We define the value entered into the input and the off button in the content of the (li) element.

        // (li) elemanı için işaretleme fonksiyonu.
        //Marking function for element (li)
        liDOM.addEventListener("click", markElement);
       warehouseSetting()
    }  

    taskDOM.value = ""; // input'u sıfırladık.(we reset the input)
}

// Listeye eklenen elemanını localStorage'ye ekleyen fonksiyon
//(Function that adds list item to localStorage)
function warehouseSetting(){
    let ToDoApp = JSON.parse(localStorage.getItem("ToDoApp"));   // ToDoApp localStronge(lS)'sini array'a çevirip çağırdık. (We converted ToDoApp localStronge(lS) to array and called)
    ToDoApp.push(`${taskDOM.value}`);                           // Inputtaki yazıyı ToDoApp array'ine ekledik. (We added the text from the input to the ToDoApp array)
    localStorage.setItem("ToDoApp", JSON.stringify(ToDoApp));  // ToDoApp'i tekrar string'e çevirip ls'ye yolladık. (We converted ToDoApp back to string and sent it to ls)
}


//Liste elemanının içindeki değerleri localStorage'den sildiğimiz fonksiyon
//(Function where we delete the values ​​inside the list element from localStorage)
function eraseStrorage(erase){
    let ToDoApp = JSON.parse(localStorage.getItem("ToDoApp"));    // ToDoApp ls'sini array'a çevirip çağırdık.(We converted ToDoApp ls to array and called))
    if (ToDoApp.includes(erase.firstChild.textContent) == true) {  // ToDoApp array'i listeye yazdığımız metini içeriyorsa(If the ToDoApp array contains the text we typed into the list)
        let indexbul = ToDoApp.findIndex(e =>                      // Bu metinin indexini bul(Find the index of this text)
            e == erase.firstChild.textContent
            );
        ToDoApp.splice(indexbul, 1);                               // index nosundan kendisini bulup array'den siliyoruz.(We find it from the index number and delete it from the array)
        localStorage.setItem("ToDoApp", JSON.stringify(ToDoApp)); // ToDoApp'i tekrar string'e çevirip ls'ye yolladık.(We converted ToDoApp back to string and sent it to ls)
    } 
}

//Daha önce oluşturulmuş bir localStorage dosyası yoksa oluşturan fonksiyon
//(The function that creates it if there is no localStorage file created before)
function localSelf() {
    let ToDoApp = JSON.parse(localStorage.getItem("ToDoApp"));    // ToDoApp ls'sini array'a çevirip çağırdık.(We converted ToDoApp ls to array and called)
    if (!ToDoApp) {ToDoApp = []};                                 // ToDoApp array'i yoksa oluştur.(Create the ToDoApp array if it doesn't exist)
    localStorage.setItem("ToDoApp", JSON.stringify(ToDoApp));     // ToDoApp'i tekrar string'e çevirip ls'ye yolladık.(We converted ToDoApp back to string and sent it to ls)
}

//Web sayfasını açtığımızda localStorage'de bulunan her elemanı listeye ekleyen fonksiyon
//(The function that adds every element in the localStorage to the list when we open the web page)
function localDOM(){
    let ToDoApp = JSON.parse(localStorage.getItem("ToDoApp"));    // ToDoApp ls'sini array'a çevirip çağırdık.(We converted ToDoApp ls to array and called)
    ToDoApp.forEach((e, index) => {                               // ToDoApp'de kayıtlı her elemanın index'i için(For the index of each element registered in ToDoApp)
        let liDOM = document.createElement("li");                 // liste elemanı oluşturduk.(we created a list element)
        listDOM.append(liDOM);                                    // liste elemanlarını listeye (ul) ekledik.(we added the list elements to the list (ul))
        liDOM.innerHTML = ToDoApp[index]                          // liste elemanlarınına ToDoApp'teki arraylere(to list elements to arrays in ToDoApp)
        liDOM.innerHTML += `${closeButton}`                       // kapama tuşu(off key)
        liDOM.addEventListener("click", markElement);             // işaretleme eventi ekledik.(We have added a markup event)
    })
}
localSelf() // localStorage dosya oluşturuldu(Daha önce olusturulmamışsa).(localStorage file created (if not already created))
localDOM()  // localStorage'de daha önce kaydettiğimiz liste elemanları için DOM ekledik.
           //(We added DOM for list elements we saved earlier in localStorage)
