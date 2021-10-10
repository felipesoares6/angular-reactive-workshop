import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from './../../projects/project.model';
import { ProjectActionTypes } from './projects.actions';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

// 01 Define the shape of my state
export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null
}

// create entity adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

// 03 Define the initial state
export const initialState: ProjectsState = adapter.getInitialState({
  selectedProjectId: null
})

// 04 Build the MOST simplest reducer
export function projectsReducer(
  state = initialState, action): ProjectsState {
    switch(action.type) {
      case ProjectActionTypes.LoadProjects:
        return adapter.addMany(action.payload, state);
      case ProjectActionTypes.ProjectSelected:
        return {
          ...state,
          selectedProjectId: action.payload,
        }
      case ProjectActionTypes.AddProject:
        return adapter.addOne(action.payload, state)
      case ProjectActionTypes.UpdateProject:
        return adapter.updateOne(action.payload, state)
      case ProjectActionTypes.DeleteProject:
        return adapter.removeOne(action.payload, state)
      default:
        return state;
    }
}
