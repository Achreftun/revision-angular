import { Component, OnInit, Input } from '@angular/core';
import { BufferService } from '../services/buffer.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input() nom: string;
  msg: string;
  messages = [];
  constructor(private bufferService: BufferService) { }

  ngOnInit(): void {
    this.bufferService.accederMessageFirst().subscribe(res => {
      if (res['nom'] !== this.nom){
        this.messages.push(res);
      }
    });
  }
  envoyer() {
    this.bufferService.envoyerMessageFirst({nom: this.nom, message: this.msg});
    this.msg = '';
  }
}
