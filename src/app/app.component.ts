import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, OnInit {
  title = 'retailgear';

  ngOnInit(): void {
    console.log("Customer loads");
  }

  ngAfterContentInit(){
    this.loadZohoChatScript();
  }

  public loadZohoChatScript() {
    const url = `assets/scripts/zoho-chat.js`;
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
