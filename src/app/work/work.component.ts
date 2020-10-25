import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.imgFilter();    
  }

  imgFilter(){
    
    $(document).ready(function(){

      $(".product-item").show(800);      
      $("ul li").on("click",function(){
        let value = $(this).attr("data-filter");          

        if(value == "all"){
          $(".product-item").show(800);
          //hideProducts();
        }else{
          $(".product-item").not("." + value).hide(800);
          $(".product-item").filter("." + value).show(800);
        }
      })

      //Active button
      $("li").click(function(){
        $(this).addClass('active').siblings().removeClass('active')
      })
      
      //showing only some images

      /*
      function hideProducts() {
        let products = $('.product-item');

        if(products.length > 10){
          for(let i = 10; i < products.length; i++){
            products[i].style.display = "none";
          }
        }
      } hideProducts()

      
      function showPro(){
        let btn = $("#showAll");
        let products = $('.product-item');

        btn.on("click", function(){
          products.toggle(800);          
        })
      }showPro()
      */

    })

  }



 

}
