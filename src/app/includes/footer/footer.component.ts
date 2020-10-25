import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.goTop()
  }

  goTop(){
    $('#goTop').on("click", function(){
      $(window).scrollTop(0);      
    })
  }

}
