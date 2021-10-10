import { Action } from '@ngrx/store';

import { Project } from './../../projects/project.model';

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadProjects = '[Projects] Load Data',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',

  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data',
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(private payload: Project) {}
}
export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
}
export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.ProjectAdded;
  constructor(private payload: Project[]) {}
}
export class AddProject implements Action {
  readonly type = ProjectsActionTypes.AddProject;
  constructor(public payload: Project) {}
}
export class ProjectAdded implements Action {
  readonly type = ProjectsActionTypes.ProjectAdded;
  constructor(private payload: Project) {}
}
export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Project) {}
}
export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: Project) {}
}

export type ProjectsActions = SelectProject
  | LoadProjects
  | ProjectsLoaded
  | AddProject
  | ProjectAdded
  | UpdateProject
  | DeleteProject
  ;
