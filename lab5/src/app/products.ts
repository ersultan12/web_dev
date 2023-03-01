export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  img_url: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 13 pro MAX 256gb zolotoy',
    price: 676000,
    description: 'технология NFC: Дацвет: золотистыйтип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zolotistyi-102298726/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h34/46393533235230/apple-iphone-13-pro-256gb-zolotistyj-102298726-1-Container.jpg'
  },
  {
    id: 2,
    name: 'Ноутбук ASUS TUF F15 FX506HM-HN016 90NR0754-M003E0 черный',
    price: 639990, 
    description: 'диагональ экрана: 15.6 дюйм процессор: Intel Core i5-11400H видеокарта: NVIDIA GeForce RTX 3060 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    url: 'https://kaspi.kz/shop/p/asus-tuf-f15-fx506hm-hn016-90nr0754-m003e0-chernyi-103394916/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h75/49038469234718/asus-tuf-f15-fx506hm-hn016-90nr0754-m003e0-cernyj-103394916-1.jpg'
  },
  {
    id: 3,
    name: 'Микрофон Handel K11',
    price: 6800,
    description: 'тип: конденсаторный конструкция: петличный (клипса) назначение: универсальный тип подключения: беспроводной радиосистема: Нет разъемы: Lightning цвет: черный',
    url: 'https://kaspi.kz/shop/p/handel-k11-106313925/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h1e/62189525499934/handel-k11-2-sht-106313925-1.jpg'
  },
  {
    id: 4,
    name: 'Утюг Vitek VT-8304 черный',
    price: 14990,
    description: 'мощность: 2400 Вт резервуар для воды: 350 мл автоматическое отключение: Да защита от накипи: Да противокапельная система: Да цвет: черный',
    url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h70/31593847128094/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg'
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480550,
    description: 'диагональ экрана: 13.3 дюйм процессор: Apple M1 видеокарта: Apple M1 7 core размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 256 ГБ',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 231500,
    description: 'поддержка платформ: iOS материал корпуса: алюминий цвет корпуса: черный технология экрана: OLED объем встроенной памяти: 32 Гб интерфейсы: Bluetooth, ,Wi-Fi, ,NFC время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg'
  },
  {
    id: 7,
    name: 'Холодильник Samsung RB37A5200SA серебристый',
    price: 287095,
    description: 'тип: холодильник с морозильником количество камер: 2 класс энергопотребления: класс A+ габариты (ШxГxВ): 59.5x64.7x201 см размораживание морозильной камеры: No Frost цвет: серебристый',
    url: 'https://kaspi.kz/shop/p/samsung-rb37a5200sa-serebristyi-100727008/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hde/32358565609502/samsung-rb37a5200sa-serebristyj-100727008-1-Container.jpg'
  },
  {
    id: 8,
    name: 'Телевизор Samsung UE85AU7100UXCE 216 см черный',
    price: 1059990 ,
    description: 'тип: LED-телевизор диагональ: 85 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI, ,Ethernet (RJ-45), ,USB, ,Bluetooth',
    url: 'https://kaspi.kz/shop/p/samsung-ue85au7100uxce-216-sm-chernyi-101496429/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h65/34262346563614/samsung-ue85au7100uxce-216sm-chernyi-101496429-1.jpg'
  },
  {
    id: 9,
    name: 'Ноутбук ASUS ROG Strix G533ZS-LN050X 90NR0B62-M002D0 черный',
    price: 1849990,
    description: 'диагональ экрана: 15.6 дюйм процессор: Intel Core i9 12900H видеокарта: NVIDIA GeForce RTX 3080 размер оперативной памяти: 32 ГБ тип жесткого диска: SSD общий объем накопителей: 1024 ГБ',
    url: 'https://kaspi.kz/shop/p/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/h95/65501275521054/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087-1.jpg'
  },
  {
    id: 10,
    name: 'Пылесос Dyson V15 Detect Absolute серебристый',
    price: 584990,
    description: 'тип: вертикальный уборка: сухая тип пылесборника: контейнер потребляемая мощность: 3.08 Вт источник питания: аккумулятор цвет: серебристый',
    url: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h50/67795766706206/dyson-v15-detect-absolute-serebristyi-102269286-1.jpg'
  },
];