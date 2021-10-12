import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Project } from '@workshop/core-data';
import { emptyProject } from 'apps/dashboard/src/app/projects/projects.component';

import * as fromCustomers from './customers/customers.reducer';
import * as fromProjects from './projects/projects.reducer';

// Updated the shape of the entire application state
export interface AppState {
  customers: fromCustomers.CustomersState,
  projects: fromProjects.ProjectsState
}
// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomers.customersReducer,
  projects: fromProjects.projectsReducer
};

// -------------------------------------------------------------------
// PROJECTS SELECTORS
// -------------------------------------------------------------------
export const selectProjectState
  = createFeatureSelector<fromProjects.ProjectsState>('projects');

export const selectProjectIds = createSelector(
  selectProjectState,
  fromProjects.selectProjectIds
)

export const selectProjectEntities = createSelector(
  selectProjectState,
  fromProjects.selectProjectEntities
)

export const selectAllProjects = createSelector(
  selectProjectState,
  fromProjects.selectAllProjects
)

export const selectCurrentProjectId = createSelector(
  selectProjectState,
  fromProjects.getSelectedProjectId
)

export const selectCurrentProject = createSelector(
  selectProjectState,
  selectCurrentProjectId,
  (projectEntities, projectId): Project => projectId ? projectEntities[projectId] : emptyProject
)

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAllCustomers
);

export const selectCustomersProjects = createSelector(
  selectAllCustomers,
  selectAllProjects,
  (customers, projects) => customers.map((customer) => ({
    ...customer,
    projects: projects.filter(project => project.customerId === customer.id)
  }))
)


