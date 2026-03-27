import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, Input, Signal, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhoto } from './components/profile-photo/profile-photo';
import { CardTitle } from './components/card-title/card-title';
import { CardBody } from './components/card-body/card-body';
import { ComponentA } from './components/component-a/component-a';
import { ComponentB } from './components/component-b/component-b';
import { Workout } from './components/workout/workout';
import { WorkoutDirective } from './directives/workout/workout-directive';
import { WorkoutService } from './services/workout/workout-service';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts';
import { RxjsComponent } from './components/rxjs/rxjs-component';
import { Newform } from './components/newform/newform';
import { Todolist } from './components/todolist/todolist';
import { TestFormComponent } from './components/newform/test-form/test-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePhoto, CardTitle, CardBody, ComponentA, ComponentB, Workout, WorkoutDirective, CommonModule, PostsComponent, RxjsComponent, Newform, Todolist, TestFormComponent],
  providers: [WorkoutService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('angular21');
  countinitial = 0;
  count = signal(0);
  classes = true;
  currentStyles = {
    'color': 'blue',
    'font-size.px': '20',
    'font-weght': 'bold'
  };
  val: Signal<number> = computed(() => this.count());
  workoutService = inject(WorkoutService);
  value = 0;

  @ViewChild(ComponentA) content!: ComponentA;
  @ViewChild(Workout) workoutVariable!: Workout

  ngOnInit() {
     console.log('value is', this.val())
  }

  receiveMessage(message: string) {
    this.title.set(message);
    this.workoutVariable.body = "Body message";
    console.log(this.workoutService.message());
  }

  increment() {
    this.count.update(value => value + 1)
  }

  triggerMethodInParent($event: string) {
    console.log("event message from child", $event);
  }

  viewComponentAContent() {
    console.log("Component A's content using Viewchild", this.content);
  }
}
