$(document).ready(function($) {
    /* Función jQuery para el evento clic en la etiqueta "x" con la clase (.carrito-total)*/
    $('.carrito-total').click(function() {
      //Mostrar los items del carrito
      $('.bolsa').slideToggle();
    });

  });

//SIMPLE CART
//Configuraciones básicas, recuerda tu lo puedas adaptar a tu medida
simpleCart({
  cartColumns: [
      { view:'image' , attr:'image', label: "Imagen"}, //obtiene la imagen
      { attr: "name", label: "Plantilla"}, //obtiene el nombre
      { view: "currency", attr: "price", label: "Precio"},//obtiene el precio
      { view: "remove", text: "Quitar", label: false} //Quita o remueve el producto
  ],
  cartStyle: "table", //puede ser div o table

  checkout: { 
      type: "PayPal" , //Pago a través de PayPal
      email: "kclnu2743988@personal.example.com" //tu correo válido
  }

});
