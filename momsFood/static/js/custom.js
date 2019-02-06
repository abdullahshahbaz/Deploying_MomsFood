//edit url for redirect
$("#fancybox-close").click(function(){
  var pageURL = $(location).attr("href");
});

//deactivate backpage
jQuery(document).ready(function(){
    if(document.location.pathname.indexOf("quickview/") >= 0){
      $('#page').css('display','none');
    }
});

//If subcategory does not contain any thing
jQuery(document).ready(function(){
      if(document.location.pathname.indexOf("list/product") >= 0){
        if($("[id='item-check']").not(':has(li)').length > 0){
          $("[id='item-check']").not(':has(li)').find("span").removeClass('subDropdown plus');
        }
    }
});

jQuery(document).ready(function(){
      if(document.location.pathname.indexOf("checkout") >= 0){
        if($('#bill').find('.product-name').length > 0){
          return
        }
        else{
          var dataString = sessionStorage.getItem('cart','items');
          var dataJason = JSON.parse(dataString);
          var count = dataJason.items.length;
          var subtotal=0;
          if(count>0)
          {
            for (i=0; i<dataJason.items.length; i++){
              subtotal=subtotal+dataJason.items[i].price;
              $('#bill').append('\
              <p class="product-name">\
                <b><a id="item_name">'+dataJason.items[i].name+'</a><b>\
                <strong id="item_quantity">'+dataJason.items[i].quantity+'</strong> x <span id="item_price" class="price">'+dataJason.items[i].price+' = '+ dataJason.items[i].price* dataJason.items[i].quantity +'</span>\
              </p>\
              ');
            }
            $('#bill').append('\
            <table class="table shopping-cart-table-total" id="shopping-cart-totals-table">\
              <colgroup>\
              <col>\
              <col width="1">\
              </colgroup>\
              <tfoot>\
                <tr>\
                  <td colspan="1" class="a-left" style=""><strong>Grand Total</strong></td>\
                  <td class="a-right" style=""><strong><span class="price" id="billgrandtotal" ></span></strong></td>\
                </tr>\
              </tfoot>\
              <tbody>\
                <tr>\
                  <td colspan="1" class="a-left" style=""> Subtotal </td>\
                  <td class="a-right" style=""><span class="price" id="billsubtotal"></span></td>\
                </tr>\
                <tr>\
                  <td colspan="1" class="a-left" style=""> Delivery Charges </td>\
                  <td class="a-right" style=""><span class="price" id="billdeliverycharges"></span></td>\
                </tr>\
              </tbody>\
            </table>\
          ');
          }
          $('#billsubtotal').text(subtotal);
          $('#billdeliverycharges').text(50);
          $('#billgrandtotal').text(subtotal+50);
      }
    }
});

function changeinfo(){
  $('#opc-shipping').addClass("allow active");
  $('#checkout-step-shipping').css('display','block');
  $('#opc-payment').removeClass("allow active");
  $('#checkout-step-payment').css('display','none');
}

function saveinfo(){

  var username = $('#id_firstname').val() + " " + $('#id_lastname').val()
  var address = $('#id_address').val();
  var telephone = $('#id_telephone').val();
  $('#recipt_view').append('\
  <address>\
  <b>Customer Name:</b> '+username+'<br>\
  <b>Shipping Address:</b> '+address+'<br>\
  <b>Telephone No:</b> '+telephone+'\
  </address>');
  $('#opc-shipping').removeClass("allow active");
  $('#checkout-step-shipping').css('display','none');
  $('#opc-payment').addClass("allow active");
  $('#checkout-step-payment').css('display','block');
}


function clearCart(){
    var myNode = document.getElementById("cart-sidebar");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var myNode = document.getElementById("tablebody");
    while (myNode.firstChild) {
       myNode.removeChild(myNode.firstChild);
    }

    var cart = {};
    cart.items = [];
    sessionStorage.setItem("cart", JSON.stringify(cart));
    $('.cart_count').text(0);
    $('#subtotal').text(0);
    $('#deliverycharges').text(0);
    $('#grandtotal').text(0);
}


function updateCart(){
    var myNode = document.getElementById("cart-sidebar");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var myNode = document.getElementById("tablebody");
    while (myNode.firstChild) {
       myNode.removeChild(myNode.firstChild);
    }

    var dataString = sessionStorage.getItem('cart','items');
    var dataJason = JSON.parse(dataString);
    var count = dataJason.items.length;
    var subtotal=0;
    if(count>0)
    {
      for (i=0; i<dataJason.items.length; i++){
        subtotal=subtotal+dataJason.items[i].price;
        $('#cart-sidebar').append('\
        <li class="item first" id="li'+i+'">\
          <div class="item-inner">\
            <a class="product-image" title="Retis lapen casen" href="">\
              <img id="item_image" alt="Retis lapen casen" src="'+dataJason.items[i].image+'">\
            </a>\
            <div class="product-details">\
              <div class="access">\
                <a class="btn-remove1" title="Remove This Item" href="#" id="'+i+'"></a>\
                <a class="btn-edit" title="Edit item" href="#">\
                  <i class="icon-pencil"></i>\
                  <span class="hidden">Edit item</span>\
                </a>\
              </div>\
              <strong id="item_quantity">'+dataJason.items[i].quantity+'</strong> x <span id="item_price" class="price">'+dataJason.items[i].price+'</span>\
              <p class="product-name">\
                <a id="item_name" href="#">'+dataJason.items[i].name+'</a>\
              </p>\
            </div>\
          </div>\
        </li>');

        $('#tablebody').append('\
          <tr class="first odd" id="cart'+i+'">\
          <td class="image">\
            <a class="product-image" title="Sample Product" href="">\
              <img width="75" alt="Sample Product" src="'+dataJason.items[i].image+'">\
            </a>\
          </td>\
          <td>\
            <h2 class="product-name">\
              <a href="">'+dataJason.items[i].name+'</a>\
            </h2>\
          </td>\
          <td class="a-center">\
            <a title="Edit item parameters" class="edit-bnt" href=""></a>\
          </td>\
          <td class="a-right">\
            <span class="cart-price">\
              <span class="price">'+dataJason.items[i].price+'</span>\
            </span>\
          </td>\
          <td class="a-center movewishlist">\
            <span>'+dataJason.items[i].quantity+'</span>\
          </td>\
          <td class="a-right movewishlist">\
            <span class="cart-price">\
               <span class="price">'+dataJason.items[i].price*dataJason.items[i].quantity+'</span>\
            </span>\
          </td>\
          <td class="a-center last">\
            <a class="button remove-item" title="Remove item" id="'+i+'">\
              <span><span>Remove item</span></span>\
            </a>\
          </td>\
        </tr>');
      }//end for
      $(".btn-remove1").click(function() {
        var dataString = sessionStorage.getItem('cart','items');
        var dataJason = JSON.parse(dataString);
        dataJason.items.splice(this.id,1);
        sessionStorage.setItem("cart", JSON.stringify(dataJason));
        $('#li'+this.id).remove();
        var count = dataJason.items.length
        $('.cart_count').text(count);
      });
      $('#subtotal').text(subtotal);
      $('#deliverycharges').text(50);
      $('#grandtotal').text(subtotal+50);
        $(".remove-item").click(function() {
        var dataString = sessionStorage.getItem('cart','items');
        var dataJason = JSON.parse(dataString);
        subtotal=subtotal-dataJason.items[this.id];
        dataJason.items.splice(this.id,1);
        sessionStorage.setItem("cart", JSON.stringify(dataJason));
        $('#cart'+this.id).remove();
        $('#li'+this.id).remove();
        $('#subtoal').text(subtotal);
        $('#deliverycharges').text(50);
        $('#grandtotal').text(subtotal+50);
        var count = dataJason.items.length;
        $('.cart_count').text(count);
      });
    }//end if(count>0)
}//end functipn updatecart


jQuery(document).ready(function(){
      if(document.location.pathname.indexOf("cart/no") >= 0){
        var dataString = sessionStorage.getItem('cart','items');
        var dataJason = JSON.parse(dataString);
        var count = dataJason.items.length;
        var subtotal=0;
        if(count>0)
        {
          for (i=0; i<dataJason.items.length; i++){
            subtotal=subtotal+dataJason.items[i].price;
            $('#tablebody').append('\
              <tr class="first odd" id="cart'+i+'">\
              <td class="image">\
                <a class="product-image" title="Sample Product" href="">\
                  <img width="75" alt="Sample Product" src="'+dataJason.items[i].image+'">\
                </a>\
              </td>\
              <td>\
                <h2 class="product-name">\
                  <a href="">'+dataJason.items[i].name+'</a>\
                </h2>\
              </td>\
              <td class="a-center">\
                <a title="Edit item parameters" class="edit-bnt" href=""></a>\
              </td>\
              <td class="a-right">\
                <span class="cart-price">\
                  <span class="price">'+dataJason.items[i].price+'</span>\
                </span>\
              </td>\
              <td class="a-center movewishlist">\
                <span>'+dataJason.items[i].quantity+'</span>\
              </td>\
              <td class="a-right movewishlist">\
                <span class="cart-price">\
                   <span class="price">'+dataJason.items[i].price*dataJason.items[i].quantity+'</span>\
                </span>\
              </td>\
              <td class="a-center last">\
                <a class="button remove-item" title="Remove item" id="'+i+'">\
                  <span><span>Remove item</span></span>\
                </a>\
              </td>\
            </tr>');
          }
          $('#subtotal').text(subtotal);
          $('#deliverycharges').text(50);
          $('#grandtotal').text(subtotal+50);
            $(".remove-item").click(function() {
            var dataString = sessionStorage.getItem('cart','items');
            var dataJason = JSON.parse(dataString);
            subtotal=subtotal-dataJason.items[this.id];
            dataJason.items.splice(this.id,1);
            sessionStorage.setItem("cart", JSON.stringify(dataJason));
            $('#cart'+this.id).remove();
            $('#li'+this.id).remove();
            $('#subtoal').text(subtotal);
            $('#deliverycharges').text(50);
            $('#grandtotal').text(subtotal+50);
            var count = dataJason.items.length;
            $('.cart_count').text(count);
          });
        } //first if
    } //second if
}); //function end

function addtohtml()
{
  var dataString = sessionStorage.getItem('cart','items');
  var dataJason = JSON.parse(dataString);
  var count = dataJason.items.length
  $('.cart_count').text(count);
  if(count>0)
  {
    for (i=0; i<dataJason.items.length; i++){
      $('#cart-sidebar').append('\
      <li class="item first" id="li'+i+'">\
        <div class="item-inner">\
          <a class="product-image" title="Retis lapen casen" href="">\
            <img id="item_image" alt="Retis lapen casen" src="'+dataJason.items[i].image+'">\
          </a>\
          <div class="product-details">\
            <div class="access">\
              <a class="btn-remove1" title="Remove This Item" href="#" id="'+i+'"></a>\
              <a class="btn-edit" title="Edit item" href="#">\
                <i class="icon-pencil"></i>\
                <span class="hidden">Edit item</span>\
              </a>\
            </div>\
            <strong id="item_quantity">'+dataJason.items[i].quantity+'</strong> x <span id="item_price" class="price">'+dataJason.items[i].price+'</span>\
            <p class="product-name">\
              <a id="item_name" href="#">'+dataJason.items[i].name+'</a>\
            </p>\
          </div>\
        </div>\
      </li>');

    }//end for loop
    $(".btn-remove1").click(function() {
      var dataString = sessionStorage.getItem('cart','items');
      var dataJason = JSON.parse(dataString);
      dataJason.items.splice(this.id,1);
      sessionStorage.setItem("cart", JSON.stringify(dataJason));
      $('#li'+this.id).remove();
      var count = dataJason.items.length
      $('.cart_count').text(count);
    });
  }//end if
}//end function

function addtohtmlsamepage()
{
  var dataString = sessionStorage.getItem('cart','items');
  var dataJason = JSON.parse(dataString);
  var count = dataJason.items.length
  $('.cart_count').text(count);
  if(count>0)
  {
    for (i=count-1; i<dataJason.items.length; i++){
      $('#cart-sidebar').append('\
      <li class="item first" id="li'+i+'">\
        <div class="item-inner">\
          <a class="product-image" title="Retis lapen casen" href="">\
            <img id="item_image" alt="Retis lapen casen" src="'+dataJason.items[i].image+'">\
          </a>\
          <div class="product-details">\
            <div class="access">\
              <a class="btn-remove1" title="Remove This Item" href="#" id="'+i+'"></a>\
              <a class="btn-edit" title="Edit item" href="#">\
                <i class="icon-pencil"></i>\
                <span class="hidden">Edit item</span>\
              </a>\
            </div>\
            <strong id="item_quantity">'+dataJason.items[i].quantity+'</strong> x <span id="item_price" class="price">'+dataJason.items[i].price+'</span>\
            <p class="product-name">\
              <a id="item_name" href="#">'+dataJason.items[i].name+'</a>\
            </p>\
          </div>\
        </div>\
      </li>');

    }//end for loop
    $(".btn-remove1").click(function() {
      var dataString = sessionStorage.getItem('cart','items');
      var dataJason = JSON.parse(dataString);
      dataJason.items.splice(this.id,1);
      sessionStorage.setItem("cart", JSON.stringify(dataJason));
      $('#li'+this.id).remove();
      var count = dataJason.items.length
      $('.cart_count').text(count);
    });
  }//end if
}//end function

jQuery(document).ready(function(){
  var cart = {};
  cart.items = [];
  if (!sessionStorage.getItem('cart')) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    $('.cart_count').text('0')
  }
  else {
    addtohtml();
  }
}); //end if and function

function addItem(name,image,price){
  var item = {}
  item.name=name
  item.image=image
  item.price=price
  result=document.getElementById('qty');
  item.quantity = result.value;
  addToCart(item)
}

function addToCart(item) {
    // Retrieve the cart object from local storage
    if (sessionStorage && sessionStorage.getItem('cart')) {
        var cart = JSON.parse(sessionStorage.getItem('cart'));

        cart.items.push(item);

        sessionStorage.setItem('cart', JSON.stringify(cart));

        addtohtmlsamepage();
    }
}

//event on clicking on plus sign else actiated element
// jQuery(document).ready(function(){
//   if(document.location.pathname.indexOf("list/product") >= 0){
//       $("[id='not-active']").each(function(index){
//         $("#target").click(function(){
//             $(this).css("display" , "none")
//         });
//       })
//     }
// });

// Attach a delegated event handler
// jQuery(document).ready(function(){
//   if(document.location.pathname.indexOf("list/product") >= 0){
//     $( "#parent-list" ).on( "click", "ul", function( event ) {
//         event.preventDefault();
//         $(this).css("display" , "none");
//     });
//   }
// });
