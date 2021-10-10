import { Action } from "@ngrx/store";
import { Project } from "@workshop/core-data";

export enum ProjectActionTypes {
  ProjectSelected = '[Projects] Selected',
  AddProject = '[Projects] Add Data',
  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data',
}

export class SelectProject implements Action {
  readonly type = ProjectActionTypes.ProjectSelected;

  constructor(private payload: Project) {}
}

export class AddProject implements Action {
  readonly type = ProjectActionTypes.AddProject;

  constructor(private payload: Project) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectActionTypes.UpdateProject;

  constructor(private payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectActionTypes.DeleteProject;

  constructor(private payload: Project) {}
}

export type ProjectActions = SelectProject | AddProject | UpdateProject | DeleteProject;
