import {Component} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)',
        'border-radius': '0'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px) scale(1)',
        'border-radius': '0'
      })),
      state('shrunken', style({
        'background-color': 'green',
        'transform': 'scale(0.5)',
        'border-radius': '0'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(300)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(1000)
      ]),
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300)
      ]),
      transition('* => void', animate(300, style({
        opacity: 0,
        transform: 'translateX(100px)',
      })))
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('void => *', animate(1000, keyframes([
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateX(-50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateX(-30px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateX(0)',
          opacity: 1,
          offset: 1
        })
      ]))),
      transition('* => void', animate(300, style({
        opacity: 0,
        transform: 'translateX(100px)',
      })))
    ])
  ]
})
export class AppComponent {
  state = 'highlighted';
  wildState = 'highlighted';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }
}
