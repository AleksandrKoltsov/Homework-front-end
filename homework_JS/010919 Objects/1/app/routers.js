function getHex(quantity, length){

    let letters = '0123456789ABCDEF',
        arrAdr = [],
        result = '';

for(let j = quantity; j > 0; j--){

    for (let i = length; i > 0; i--) {

      result += letters[Math.floor(Math.random() * 16)];
    }
    
    arrAdr.push(result);
    result = '';
  }
  return arrAdr;
}

function getId(arrId){

  let id = 0,
      countid = 16

  for (let i = 1; i < countid; i++) {
    
    id += arrId[Math.floor(Math.random() * arrId.length)];
    
  }
  return id;
}
let band = ['2,4GHz','5GHz', '2,4GHz; 5GHz'],
    id = 'abcdefghijklmnopqrstuvwxyz0123456789';
    brand ='Zyxel,Xiaomi,Ubiquiti,Thomas,Tenda,TP-LINK,TOTOLINK,Strong,Phicomm,Netis,Netgear,MikroTik,Mercusys,Linksys,Keenetic,Huawei,Google,Eero,Edimax,D-Link,Cisco SB,Asus,Apple',
    priceMin = 279,
    priceMax = 48279,
    market = ['Allo', 'Citrus', 'Comfy', 'Rozetka', 'Moyo'],
    ipAdrv4 = ['192.168.0.100', '192.168.1.1', '192.168.0.1'],
    ipAdrv6 = [],
    macAdr = [],
    arrId= [],
    arrBrand = [],
    arrRouters = [],
    quantity = 100;

arrBrand = brand.split(',');
arrId = id.split('');

for(let i = 0; i < quantity; i++){

    let routers = {};
    routers.brand = arrBrand[Math.floor(Math.random() * arrBrand.length)];
    routers.id = getId(arrId);
    routers.band = band[Math.floor(Math.random() * band.length)];
    routers.ipV4 = ipAdrv4[Math.floor(Math.random() * ipAdrv4.length)];
    routers.ipV6 = getHex(8, 4).join(':');
    routers.mac = getHex(6, 2).join('-');
    routers.market = market[Math.floor(Math.random() * market.length)];
    routers.price = Math.floor(Math.random() * (priceMax - priceMin) + priceMin) + ' grn';

arrRouters.push(routers);
}

console.info(arrRouters);
