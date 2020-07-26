import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  public array=['aaaaaaaaaaa','bbbbbbbbb','cccccccccc','dddddddddd','eeeeeeeeee','fffffffffff','ggggggggg',
  'hghhhhhhhhh','iioooioioooiooi'];
  public messageData=[
    {id:1  , text:'Hello form Users'},
    {id:1,text:'Hello form Users'},
    {id:1,text:'Hello form Users'},
    {id:2,text:'Hello form Admin'},
    {id:1,text:'Hello form Users'},
    {id:2,text:'Hello form Admin'},
    {id:1,text:'Hello form Users'},
    {id:2,text:'Hello form admin'},
]
  ngOnInit(): void {
  }

}
