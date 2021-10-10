import { Project } from './../../projects/project.model';

const initialProjects: Project[] = [
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

const createProject = (projects: Project[], project: Project) => [...projects, project];
const updateProject = (projects: Project[], project: Project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects: Project[], project: Project) => projects.filter((w: Project) => project.id !== w.id);

// define the shape of my state
export interface ProjectsState {
  projects: Project[];
  selectedProjectId: string | null;
}

// define the initial state
export const initialState: ProjectsState = {
  projects: initialProjects,
  selectedProjectId: null,
}

// build the most simplest reducer

export function projectsReducer(state = initialState, action: { type: string }): ProjectsState {
  switch(action.type) {
    default:
      return state;
  }
}
