// src/app/app.module.ts  
import { FormsModule } from '@angular/forms';

...
imports:[FormsModule]
...

// src/app/login.component.ts
...
template:`
  <div>
    <input placeholder="usename" [(ngModel)]=defaultUser />
  </div>
  <p>current user {{defaultUser}}</p>
`
...
export class Login {
  defaultUser = 'admin';
}
