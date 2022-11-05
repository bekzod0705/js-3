const users = {
    1 : {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "catchPhrase": "Multi-layered client-server neural-net",
        }
      },
      2 : {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "catchPhrase": "Proactive didactic contingency",
        }
      },
      3 : {
        
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "catchPhrase": "Face to face bifurcated interface",
        }
      },
      4 : {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "catchPhrase": "Multi-tiered zero tolerance productivity",
        }
      },
      5 : {
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "catchPhrase": "User-centric fault-tolerant solution",
        }
      },
      6 : {
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "catchPhrase": "Synchronised bottom-line interface",
        }
      },
      7 : {
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "catchPhrase": "Configurable multimedia task-force",
        }
      },
      8 : {
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "catchPhrase": "Implemented secondary concept",
        }
      },
      9 : {
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
          "catchPhrase": "Switchable contextually-based project",
        }
      },
      10 : {
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "catchPhrase": "Centralized empowering task-force",
        }
      }
}
function parserUser(obj){
        let {name, username, email, address :{street, suite, city, zipcode}, phone, website, company :{catchPhrase}} = obj,
        userName = `Foydalanuvchining ismi : ${name}`,
        userAcc = `Foydalanuvchining niki : ${username}`,
        userEm = `Foydalanuvchining elektron pochtasi : ${email}`,
        useradd = `Foydalanuvchining manzili :\nKo'chasi : ${street}\nXonadon : ${suite}\nSHahar : ${city}\nIndeksi : ${zipcode}`,
        userNum = `Foydalanuvchining telefon raqami : ${phone}`,
        userWeb = `Foydalanuvchining vebsayti : ${website}`,
        userCatch = `Kompaniyasining mashhur so'zi : ${catchPhrase}`,
        userInfo = `${userName}\n${userAcc}\n${userEm}\n${useradd}\n${userNum}\n${userWeb}\n${userCatch}`
        return userInfo
}
for (const key in users) {
    console.log(parserUser(users[key]));
}