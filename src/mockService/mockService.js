const products = [ 
    {
        "id": 1,
        "title": "Hamburguesa clásica",
        "description": "Sandwich de hamburguesa.",
        "price": 549,
        "discountPercentage": 10,
        "stock": 20,
        "category": "hamburguesa",
        "thumbnail": "https://i.pinimg.com/564x/95/da/e4/95dae4bb47ace2bc0ab86362cc646a5c.jpg"
      },
      {
        "id": 2,
        "title": "Hamburguesa doble",
        "description": "Sandwich con doble hamburguesas y cheddar.",
        "price": 899,
        "discountPercentage": 5,
        "stock": 34,
        "category": "hamburguesa",
        "thumbnail": "https://i.pinimg.com/564x/3a/dd/17/3add170e37acb15c3e71bcc9feddec07.jpg",
      },
      {
        "id": 3,
        "title": "Hamburguesa con bacon",
        "description": "Sandwich con doble hamburguesas, cheddar y crocante bacon.",
        "price": 1249,
        "discountPercentage": 5,
        "stock": 36,
        "category": "hamburguesa",
        "thumbnail": "https://i.pinimg.com/564x/e4/ba/d6/e4bad6d205d872d8f5068044180d0ef6.jpg",
      },
      {
        "id": 4,
        "title": "Hamburguesa rellena",
        "description": "Hamburguesa rellena con jamon y queso.",
        "price": 280,
        "discountPercentage": 10,
        "stock": 123,
        "category": "hamburguesa",
        "thumbnail": "https://i.pinimg.com/736x/5b/f3/3d/5bf33dfe2c3d7396b78361d4e779f917.jpg",
      },
      {
        "id": 5,
        "title": "",
        "description": "Hamburguesa de pollo con ",
        "price": 1099,
        "discountPercentage": 0,
        "stock": 89,
        "category": "hamburguesa",
        "thumbnail": "https://i.pinimg.com/564x/c2/b8/d2/c2b8d26454f48cec701f0eb1fe81bac2.jpg",
      },
      {
        "id": 6,
        "title": "Papas fritas",
        "description": "Porción de papas fritas.",
        "price": 499,
        "discountPercentage": 0,
        "stock": 32,
        "category": "guarniciones",
        "thumbnail": "https://i.pinimg.com/564x/62/f5/af/62f5af9fbb4d22bc9c42eb1eb6d4a57d.jpg",
      },
      {
        "id": 7,
        "title": "Ensalada Cesar",
        "description": "Ensalada con lechuga, queso en hebras, cruotons y pollo.",
        "price": 599,
        "discountPercentage": 0,
        "stock": 83,
        "category": "guarniciones",
        "thumbnail": "https://i.pinimg.com/564x/d9/54/55/d95455f0ced0896d28c2de00eb7e5563.jpg",
      },
      {
        "id": 8,
        "title": "Papas con cheddar",
        "description": "Porción de papas fritas con cheddar, cebolla de verdeo y bacon.",
        "price": 599,
        "discountPercentage": 0,
        "stock": 50,
        "category": "guarniciones",
        "thumbnail": "https://i.pinimg.com/736x/90/20/70/9020703cdf502ccdfbd42a0c9ec1b5fe.jpg",
      },
      {
        "id": 9,
        "title": "Arroz primavera",
        "description": "Ensalada con arroz, zanahoria, arvejas y choclo.",
        "price": 499,
        "discountPercentage": 0,
        "stock": 68,
        "category": "guarniciones",
        "thumbnail": "https://i.pinimg.com/564x/24/0d/1f/240d1f1085e85d08dd7d85cc9d8d1b51.jpg",
      },
      {
        "id": 10,
        "title": "Sundae de dulce de leche",
        "description": "Helado de vainilla con salsa de dulce de leche.",
        "price": 1099,
        "discountPercentage": 0,
        "stock": 96,
        "category": "postres",
        "thumbnail": "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-dulce-de-leche.png/200/200/original?country=ar",
      },
      {
        "id": 11,
        "title": "Sundae de chocolate",
        "description": "Helado de vainilla con salsa de chocolate.",
        "price": 1099,
        "discountPercentage": 0,
        "stock": 89,
        "category": "postres",
        "thumbnail": "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-chocolate.png/200/200/original?country=ar",
      },
      {
        "id": 12,
        "title": "Sundae de frutilla",
        "description": "Helado de vainilla con salsa de frutilla.",
        "price": 1099,
        "discountPercentage": 0,
        "stock": 89,
        "category": "postres",
        "thumbnail": "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-frutilla.png/200/200/original?country=ar",
      }
];

export default function getItem() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export function getOneItem(idParams) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

          let productRequerido = products.find((product)=> product.id === Number(idParams));

          if(productRequerido){
            resolve(productRequerido);
          }
          else{
            reject(new Error("El producto no existe."))
          };

        }, 500);
    });
}

export function getItemCategory(category) {
  return new Promise( (resolve) => {
      setTimeout(() => {

        let categoryRequerida = products.filter(product => product.category === category);
        resolve(categoryRequerida);
        }, 500)
  });
}