import { Component, Inject, inject } from '@angular/core';
import { ServiceA } from '../../services/service-a';  
import { GLOBAL_SERVICEA } from '../../injectiontoken/injection-tokens';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.scss',
  providers: [ServiceA]
})
export class ComponentB {
  private componentService = inject(ServiceA);

  constructor(private localInstance: ServiceA, @Inject(GLOBAL_SERVICEA) private globalInstance: ServiceA) {
    this.globalInstance.data = 'Component B global service instance data set at component B';
    this.localInstance.data = 'Component B local service data';
    console.log(this.localInstance.data);
    console.log("component B using direct inject", this.componentService.data);
  } 
}
