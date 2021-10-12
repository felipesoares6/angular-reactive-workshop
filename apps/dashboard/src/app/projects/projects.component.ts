import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  AddProject,
  Customer,
  CustomersService,
  DeleteProject,
  LoadProjects,
  NotificationsService,
  Project,
  ProjectsState,
  selectAllProjects,
  selectCurrentProject,
  SelectProject,
  UpdateProject,
} from '@workshop/core-data';
import { Observable } from 'rxjs';


export const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject$: Observable<Project[]>;

  constructor(
    private customerService: CustomersService,
    private store: Store<ProjectsState>,
    private ns: NotificationsService) {
      this.projects$ = store.pipe(select(selectAllProjects));
      this.currentProject$ = store.pipe(select(selectCurrentProject));
    }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.store.dispatch(new SelectProject(emptyProject));
  }

  selectProject(project: Project) {
    this.store.dispatch(new SelectProject(project));
  }

  cancel(project: Project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    this.store.dispatch(new LoadProjects());
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project: Project) {
    this.store.dispatch(new AddProject(project));
    // These will go away
    this.ns.emit('Project created!');
    this.resetCurrentProject();
  }

  updateProject(project: Project) {
    this.store.dispatch(new UpdateProject(project));
    // These will go away
    this.ns.emit('Project updated!');
    this.resetCurrentProject();
  }

  deleteProject(project: Project) {
    this.store.dispatch(new DeleteProject(project));

    // These will go away
    this.ns.emit('Project deleted!');
    this.resetCurrentProject();
  }
}

