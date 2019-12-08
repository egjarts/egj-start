import _ from "@lodash";
import * as Actions from "../actions/registration.actions";
import Steps from "../../steps/registration.steps";
import Config from "../../Registration.config";

const initialState = {
  id: Config.id,
  completed: null,
  steps: Steps.map(step => {
    return { ...step, completed: null };
  }),
  activeStep: { ...Steps[0], index: 0 }
};

const registrationReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_STATUS: {
      const moduleData = {
        ...state,
        completed: action.data && action.data.completed
      };

      // Map the module steps to the user's data. It's possible
      // for the current module steps to be different from the
      // steps when the user first started or completed the
      // module.
      moduleData.steps = moduleData.steps.map(step => {
        const userStep =
          action.data && action.data.steps
            ? action.data.steps.find(s => s.id === step.id)
            : null;
        return userStep ? _.merge({}, step, userStep) : step;
      });

      // If the module has been marked completed, ignore any
      // step-specific completion values and assume the whole
      // module is completed.
      if (moduleData.completed) {
        moduleData.activeStep = null;
      } else {
        let activeStepIndex = 0;

        // Find the first step that has not been completed and mark
        // it as the active step. If all the steps have been completed,
        // there is no "active" step so we don't need to do anything.
        if (!_.every(moduleData.steps, step => step.completed)) {
          activeStepIndex = Math.max(
            _.findIndex(moduleData.steps, step => !step.completed),
            0
          );
          moduleData.activeStep = {
            ...moduleData.steps[activeStepIndex],
            index: activeStepIndex
          };
        }
      }

      return moduleData;
    }
    case Actions.SUBMIT_STEP: {
      const moduleData = state;
      const activeStepIndex = moduleData.activeStep.index + action.data;
      moduleData.activeStep = {
        ...moduleData.steps[activeStepIndex],
        index: activeStepIndex
      };
      return moduleData;
    }
    default: {
      return state;
    }
  }
};

export default registrationReducer;
