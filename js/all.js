
//alert("hello world!");

var pastaPrice = 120;
var indexName = '意翔';
var discount = 0.9;
var totalPrice = pastaPrice * discount;

document.getElementById('title1').textContent = '修改過的標題一';
document.getElementById('price').textContent = pastaPrice;
document.getElementById('myName').textContent = indexName;

//var Left = 13 % 5;

console.log(totalPrice);
//console.log(Left);

document.getElementById('calculator').onclick = function () {
    var hamPrice = 59;
    var colaPrice = 25;
    var hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
    var colaNum = parseInt(document.getElementById('colaNumId').value) * colaPrice;
    //alert('漢堡' + hamNum + '個');
    //alert('可樂' + colaNum + '杯');
    var total = hamNum + colaNum;
    //console.log(total);
    if (isNaN(total)) {
        alert('請填入數字再計算');
        return
    } else {
        document.getElementById('totalId').textContent = total;
    }
    //如果沒填入數字或填入非數字導致NaN，則中止onClick帶出的函數
    //有數字(含0)，則計算並帶入總額
}

function checkCal(e) {
    var str = e.target.value;
    if (str == '') {
        alert('請填入數字');
    }
}
document.getElementById('hamNumId').addEventListener('blur', checkCal, false);
document.getElementById('colaNumId').addEventListener('blur', checkCal, false);
//對input進行監聽，如果離開焦點時(blur)，經checkCal確認沒填入數字，則出現警示


var arrayTest = [8, 'tt', 9, [1, 2, 3]]
console.log(arrayTest);

var houses = [{
    master: "Peter",
    pet: ["casey", "candy"],
    chair: [8, 5, 6],
    peopleNum: 4
}, {
    master: "Eric",
    pet: ["lucky", "flurry"],
    chair: [7, 7, 7],
    peopleNum: 7

}, {
    master: "John",
    pet: ["ben", "mimi"],
    chair: [2, 2, 2],
    peopleNum: 3

}, {
    master: "Bill",
    pet: ["kofi", "lory"],
    chair: [9, 3, 4],
    peopleNum: 9

}];

//用迴圈抓出房屋陣列的主人，並丟到console中顯示
var houseTotal = houses.length;
for (i = 0; i < houseTotal; i++) {
    console.log('第' + (i + 1) + '間房屋主人是' + houses[i].master);
}

//找出人口超過4的屋子
for (var i = 0; i < houseTotal; i++) {
    if (houses[i].peopleNum > 4) {
        console.log(houses[i].master + '的房子住超過四人');

    }
}

//加總房屋陣列中的人口
var peopleTotal = 0;
for (var i = 0; i < houseTotal; i++) {
    peopleTotal = peopleTotal + houses[i].peopleNum;
    //或是寫peopleTotal += houses[i].peopleNum;
}
console.log('全部房屋的總人口是' + peopleTotal);

//第一組家裡人口超過5的可參加5人東京遊
for (var i = 0; i < houseTotal; i++) {
    if (houses[i].peopleNum > 5) {
        console.log(houses[i].master + '的家超過5人');
        houses[i].peopleNum -= 5;
        console.log(houses[i].master + '還需自費的人數為' + houses[i].peopleNum + '人');
        break;
    }
}

//console.log(5 !== 6);

var guestMonth = 5;
var thisMonth = 12;
var birthdayCheck = guestMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var guestPeople = 1;
var readyPeople = 2;
var peopleReadyCheck = guestPeople !== readyPeople;
document.getElementById('peopleId').textContent = peopleReadyCheck;

var isVIP = false;
var totalBill = 1250;
var isGift = isVIP == true && totalBill >= 1000;
//console.log(isGift);
document.getElementById('andId').textContent = isGift;
var isGift = isVIP || totalBill >= 1000;
document.getElementById('orId').textContent = isGift;

var hunger = 3;
//飢餓程度由1-10，1最餓，10是吃飽

function eat(food) {
    console.log('我現在想吃' + food);
}

if (hunger <= 3) {
    eat('roast beef');
} else if (hunger > 3 && hunger <= 7) {
    eat('salad');
} else {
    eat('nothing');
}

var light = 'red';
function lightFunc(str) {
    console.log('目前是' + str + '警戒');
}

switch (light) {
    case 'red':
        lightFunc(light);
        break;

    case 'yellow':
        lightFunc(light);
        break;

    default:
        alert('正常狀態')
        break;

}

// var domEl = document.querySelector('.h2DomClass em'); 
// 只抓單一資料的做法

var domEl = document.querySelectorAll('.h2DomClass em');
var domElLeng = domEl.length;
for (var i = 0; i < domElLeng; i++) {
    domEl[i].textContent = i + ' 12345';
}

// for (var i = 1; i <= 9; i++){
//     for(var n = 1 ; n <= 9 ; n++){
//         console.log(i + '*' + n + '=' + i*n)
//     }
// }

var domEl2 = document.querySelector('.h2DomClass2 a');
domEl2.setAttribute('href', 'https://www.google.com');
// 將特定h2下的anchor的href改成google首頁的js做法

var domEl3 = document.querySelector('.divDomClass');
domEl3.setAttribute('id', 'domId');
// 將特定div的id設為已寫好css樣式的js做法

var elList = document.querySelector('.domList');
var farmerLink = 'https://www.google.com';
var farmerName = 'Charlie';
elList.innerHTML = '<li><a href="' + farmerLink + '">' + farmerName + '</a></li>';


var bookStoreJson = [{ "name": "女書店", "areaCode": 106, "address": "新生南路3段56巷7號2樓", "longitude": "121.533669", "latitude": "25.020533", "openTime": "周二至周日 11:00-21:00，周一及國定假日公休", "phone": "886-2-23638244", "fax": "886-2-23631381", "email": "books@fembooks.com.tw", "facebook": "女書店粉絲專頁", "website": "http://www.fembooks.com.tw/index.htm", "arriveWay": "http://www.fembooks.com.tw/indexaboutus.php?showarea\u003d1_3", "name_eng": "", "intro_eng": "", "openTime_eng": "", "arriveWay_eng": "", "mainTypeName": "獨立書店", "cityName": "臺北市  大安區", "groupTypeName": "獨立書店", "mainTypePk": "1", "version": "1.0", "hitRate": 625 }, { "name": "古今書廊", "areaCode": 100, "address": "羅斯福路3段244巷17號及23號", "longitude": "121.530609", "latitude": "25.016675", "openTime": "每日10:30~22:00，除夕～初四公休", "phone": "博雅館: +886 2 2363 6358、人文館: +886 2 2367 1797", "fax": "", "email": "pnp.book@msa.hinet.net", "facebook": "古今書廊粉絲專頁", "website": "http://www.pnpbook.blogspot.tw", "arriveWay": "捷運公館站4號出口", "name_eng": "", "intro_eng": "", "openTime_eng": "", "arriveWay_eng": "", "mainTypeName": "獨立書店", "cityName": "臺北市  中正區", "groupTypeName": "獨立書店", "mainTypePk": "3", "version": "1.0", "hitRate": 710 }, { "name": "永樂座書店", "areaCode": 100, "address": "建國南路二段123巷6號", "longitude": "121.538294", "latitude": "25.029530", "openTime": "週二至週四、週日：13:00-21:00 / 週五、週六：13:00-22:00 / 週一公休", "phone": "886-2-27077055", "fax": "", "email": "eirakuza@gmail.com", "facebook": "https://www.facebook.com/eirakuza/timeline", "website": "http://eirakuza0730.pixnet.net/blog", "arriveWay": "捷運公館站4號出口", "name_eng": "", "intro_eng": "", "openTime_eng": "", "arriveWay_eng": "", "mainTypeName": "獨立書店", "cityName": "臺北市  大安區", "groupTypeName": "獨立書店", "mainTypePk": "4", "version": "1.0", "hitRate": 1566 }, { "name": "台灣e店", "areaCode": 106, "address": "新生南路3段76巷6號1樓", "longitude": "121.533367", "latitude": "25.019285", "openTime": "每日10:30-21:00，農曆新年期間公休", "phone": "886-2-23625799", "fax": "02-2363-2864", "email": "taiouan.shop@msa.hinet.net", "facebook": "台灣e店", "website": "http://www.taiouan.com.tw", "arriveWay": "店位於國立台灣大學新生南路對面的巷子內。台北捷運可在新店線公館站下車，由三號出口出站後步行5-10分鐘可到", "name_eng": "", "intro_eng": "", "openTime_eng": "", "arriveWay_eng": "", "mainTypeName": "獨立書店", "cityName": "臺北市  大安區", "groupTypeName": "獨立書店", "mainTypePk": "5", "version": "1.0", "hitRate": 538 }, { "name": "伊聖詩書坊", "areaCode": 106, "address": "新生南路3段22巷7-1號1樓", "longitude": "121.533971", "latitude": "25.024206", "openTime": "週一至週三、週五至周日12:00-20:00；週四公休", "phone": "886-2-23621134", "fax": "", "email": "escentsbooks@gmail.com", "facebook": "https://www.facebook.com/escentsbooks/timeline", "website": "https://yiri.com.tw/", "arriveWay": "公車「龍安國小（公務人力發展中心）」站", "name_eng": "", "intro_eng": "", "openTime_eng": "", "arriveWay_eng": "", "mainTypeName": "獨立書店", "cityName": "臺北市  大安區", "groupTypeName": "獨立書店", "mainTypePk": "6", "version": "1.0", "hitRate": 1065 }];
var bookelList = document.querySelector('.bookStoreList');
var bookStoreLeng = bookStoreJson.length;
var temp = "";
// 暫存迴圈結果，一次寫入innerHTML
for (var i = 0; i < bookStoreLeng; i++) {
    var content = '<li><a href="' + bookStoreJson[i].website + '">' + bookStoreJson[i].name + '</a></li>';
    temp += content;
};
bookelList.innerHTML = temp;
// 從JSON取網址和店名，並暫存、迴圈、innerHTML寫入html的<ul>元素，形成列表

var createEljs = document.createElement('em');
// +++為什麼這邊是用string型別就會自動寫入<em></em>？+++
createEljs.textContent = 'working hard';
createEljs.setAttribute('class', 'setColorBlue');
//此行的class是加到子元素<em>中，不影響父元素<h2>
document.querySelector('.createEl').appendChild(createEljs);
//使用createElement，新增一個<em>，設定class以抓取css樣式，並將其加到指定的<h2>下

var createElItem = document.querySelector('.createElList');
for (var i = 0; i < bookStoreLeng; i++) {
    var item = document.createElement('li');
    item.textContent = bookStoreJson[i].name;
    //item.setAttribute('class','item'+i);
    createElItem.appendChild(item);
    //新增一個ul空表，將json資料的特定屬性抓出，並將其用createElement的方式丟入li，產生列表
};

var btnEl = document.querySelector('.btn');
btnEl.onclick = function () {
    alert('Say Hi!');
    //用onClick語法，使得按鈕產生點擊事件時，會跳'Say Hi'訊息
};

var btnEl2 = document.querySelector('.btnListen');
btnEl2.addEventListener('click', function () {
    alert('I am Listening!');
}, false);
btnEl2.addEventListener('click', function () {
    alert('What a coincidence! Me too.');
    //利用addEventListener監聽滑鼠點擊事件，並alert兩段不同訊息
}, false);

var capEvent = document.querySelector('.eventCap');
capEvent.addEventListener('click', function () {
    alert('em clicked!');
    console.log('em clicked!');
}, true);
var capDivEvent = document.querySelector('.capClass');
capDivEvent.addEventListener('click', function () {
    alert('outer div clicked!');
    console.log('outer div clicked!');
    //Event Capturing的效果，由外往內(div > ul > li > em)抓元素
}, true);

var stopEl = document.querySelector('.demoStopPropa');
stopEl.addEventListener('click', function (e) {
    alert('box clicked!');
    e.stopPropagation();
});
var stopWrapEl = document.querySelector('.stopWrap');
stopWrapEl.addEventListener('click', function (e) {
    alert('box not clicked!');
    //用stopPropagation()語法，防止點擊子元素時，向上傳遞click事件到父元素
});

var targetReport = document.querySelector('.targetDiv');
targetReport.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    alert(e.target.nodeName);
    //e(點擊的各種狀態), e.target(點到的元素), e.target.nodeName(點到的節點名)
    //回傳event的詳細資訊
}, false);

var area = document.getElementById('areaId');
var changeList = document.querySelector('.changeList');
var district = [{
    farmer: '意翔',
    place: '中山區'
}, {
    farmer: '柏硯',
    place: '士林區'
}, {
    farmer: '定緯',
    place: '士林區'
}]
var districtLeng = district.length;
function updateList(e) {
    var districtSelect = e.target.value;
    var str = '';
    for (var i = 0; i < districtLeng; i++) {
        if (districtSelect == district[i].place) {
            str = str + '<li>' + district[i].farmer + '</li>';
        }
    }
    changeList.innerHTML = str;
};
area.addEventListener('change', updateList, false);
//監聽下拉選單的change事件，並利用for, if抓取相符資料

var body = document.body;
function launchRocket(e) {
    console.log(e)
    switch (e.keyCode) {
        case 49:
            document.querySelector('.rocket-1').style.bottom = '20000px'
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '20000px'
            break;
        case 51:
            document.querySelector('.rocket-3').style.bottom = '20000px'
            break;
        default:
            console.log('you should press 1, 2, or 3')
            break;
    }
};
body.addEventListener('keydown', launchRocket, false);
//監聽keydown事件，並用keyCode, switch發射指定的火箭
//※keydown事件的監聽主體僅能為body，不能為div
//addEventListener的'click' function(e){}的e會回傳MouseEvent
//如果是'keydown'則function(e){}就回傳KeyboardEvent


let mouseBox = document.querySelector('.mouseBox');
mouseBox.addEventListener('mouseover', function () {
    alert("Don't touch me!");
}, false);
//設置一個Box，在滑鼠橫越時會跳出警告


let screenX = document.querySelector('.screenX');
let screenY = document.querySelector('.screenY');
let pageX = document.querySelector('.pageX');
let pageY = document.querySelector('.pageY');
let clientX = document.querySelector('.clientX');
let clientY = document.querySelector('.clientY');
let mouseImg = document.querySelector('.mouseImg');

function getPosition(e) {
    screenX.textContent = e.screenX;
    screenY.textContent = e.screenY;
    //螢幕座標
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    //網頁座標
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
    //當前頁面座標
    mouseImg.style.left = e.clientX + 1 + 'px';
    mouseImg.style.top = e.clientY + 1 + 'px';
    //直接在.mouseImg的div中，寫進螢幕偵測到的座標
    //+1可以解決滑鼠一直按到.mouseImg的困擾
};
document.body.addEventListener('mousemove', getPosition, false);
//設定getPosition函數，並監聽body，讓其回傳三種不同的座標值


let selectList = document.querySelector('.selectList');
selectList.addEventListener('click', getTagName, false);
function getTagName(e) {
    if (e.target.nodeName !== 'LI') { return };
    console.log(e.target.textContent);
};
//使用if判斷，監聽父元素並回傳特定元素(li)的文字內容(textContent)

// let lsTest = 'Eugene';
// localStorage.setItem('userName', lsTest);
//單純把變數寫入local storage

let storageText = document.querySelector('.storageText');
let storageBtn = document.querySelector('.storageBtn');
let callBtn = document.querySelector('.callBtn');

storageBtn.addEventListener('click', storeName, false);
function storeName(e) {
    let str = storageText.value;
    //講師寫.value，但.textContent也可以抓到輸入內容
    localStorage.setItem('userName', str);
}
callBtn.addEventListener('click', getName, false);
function getName(e) {
    this.value = localStorage.getItem('userName');
    //讓callBtn的value轉成local storage的userName
}

let ranch = [{ farmer: 'Karl' }];
let ranchString = JSON.stringify(ranch);
console.log(ranchString + typeof (ranchString));
localStorage.setItem('myRanch', ranchString);
//JSON.stringify()，將陣列轉成字串
let getRanch = localStorage.getItem('myRanch');
let getRanchArray = JSON.parse(getRanch);
console.log(getRanchArray + typeof (getRanchArray));
//JSON.parse()，解析字串，轉回陣列存放物件
//透過JSON.parse(),JSON.stringify()，來轉換字串和陣列

let ulList = document.querySelector('.ulList');
ulList.addEventListener('click', checkList, false);
function checkList(e) {
    let farmer = e.target.dataset.farmer;
    let dog = e.target.dataset.dog;
    console.log('farmer name: ' + farmer);
    console.log('he/she has ' + dog + ' dogs');
}
//設定HTML5的自訂標籤選項data-*，並用監聽'click'搭配dataset的方式抓取物件內容

let ville = [
    {
        farmer: Charles
    }, {
        farmer: Otto
    }, {
        farmer: Peter
    }, {
        farmer: Vincent
    }
];
//設計要塞入List的資料，四名農夫

let customList = document.querySelector('.customList');

