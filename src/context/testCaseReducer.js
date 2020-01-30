import { createContext } from 'react';
import { actionTypes } from './testCaseActions';

// where we createContext for the testCase with default value of null
export const TestCaseContext = createContext(null);

// initial state
export const testCaseState = {
  testStatement: '',
  statements: [
    {
      id: 0,
      type: 'render',
      componentName: '',
      filePath: '',
      props: [],
      hasProp: false,
    },
    {
      id: 1,
      type: 'assertion',
      queryVariant: '',
      querySelector: '',
      queryValue: '',
      isNot: false,
      matcherType: '',
      matcherValue: '',
      suggestions: [],
    },
  ],
};

let statementId = 2;
let renderPropsId = 0;

const createMiddleware = () => ({
  /* renders the action card when the "action" button is clicked */
  id: statementId++,
  type: 'middleware',
  middlewaresFileName: '',
  middlewaresFilePath: '',
  queryType: '' /* ex: onclick */,
  eventValue: null,
  queryVariant: '' /* drop down to select a query variant */,
  querySelector: '' /* to select an option */,
  queryValue: '',
  queryFunction: '',
  suggestions: [],
});

const createContexts = () => ({ /* renders the action card when the "action" button is clicked */
  id: statementId++,  
  type: 'context',    
  queryVariant: '',  
  querySelector: '',
  queryValue: '', 
  values: '',
  textNode: '',
  providerComponent: '',
  consumerComponent: '',
  context: '',  
});

const createAction = () => ({
  id: statementId++,
  type: 'action',
  eventType: '',
  eventValue: null,
  queryVariant: '',
  querySelector: '',
  queryValue: '',
  suggestions: [],
});

const createAssertion = () => ({
  id: statementId++,
  type: 'assertion',
  queryVariant: '',
  querySelector: '',
  queryValue: '',
  isNot: false,
  matcherType: '',
  matcherValue: '',
  suggestions: [],
});

const createRerender = (componentName, filePath) => ({
  id: statementId++,
  type: 'render',
  componentName,
  filePath,
  props: [],
});

const createAsync = () => ({
  id: statementId++,
  type: 'async',
  actionsFileName: '',
  filePath: '',
  typesFileName: '',
  typesFilePath: '',
  asyncFunction: '',
  method: '',
  route: '',
  store: '',
  matcher: '',
  expectedResponse: '',
});

const createRenderProp = () => ({
  id: renderPropsId++,
  propKey: '',
  propValue: '',
});

const createReducer = () => ({
  id: statementId++,
  type: 'reducer',
  typesFileName: '',
  typesFilePath: '',
  reducersFileName: '',
  reducersFilePath: '',
  queryVariant: '',
  querySelector: '',
  queryValue: '',
  isNot: false,
  matcherType: '',
  matcherValue: '',
  suggestions: [],
});

const createActionCreator = () => ({
  id: statementId++,
  actionsFileName: '',
  filePath: '',
  typesFileName: '',
  typesFilePath: '',
  type: 'action-creator',
  actionsFolder: '',
  typesFolder: '',
  actionCreatorFunc: '',
  actionType: '',
  payloadKey: null,
  payloadType: null,
});

const createHookUpdates = () => ({
  id: statementId++,
  hookFile: '',
  type: 'hook-updates',
  hook: '',
  callbackFunc: '',
  managedState: '',
  updatedState: '',
});

export const testCaseReducer = (state, action) => {
  Object.freeze(state);
  let statements = [...state.statements];
  let lastAssertionStatement;

  switch (action.type) {
    case actionTypes.UPDATE_STATEMENTS_ORDER:
      const firstRenderStatement = statements[0];
      lastAssertionStatement = statements[statements.length - 1];
      statements = [firstRenderStatement, ...action.draggableStatements, lastAssertionStatement];
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_TEST_STATEMENT:
      let testStatement = action.testStatement;
      return {
        ...state,
        testStatement,
      };
    case actionTypes.ADD_MIDDLEWARE:
      lastAssertionStatement = statements.pop();
      statements.push(createMiddleware(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_MIDDLEWARE:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_MIDDLEWARE:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.middlewaresFileName = action.middlewaresFileName;
          statement.middlewaresFilePath = action.middlewaresFilePath;
          statement.queryType = action.queryType;
          statement.eventValue = action.eventValue;
          statement.queryVariant = action.queryVariant;
          statement.querySelector = action.querySelector;
          statement.queryValue = action.queryValue;
          statement.queryFunction = action.queryFunction;
          statement.suggestions = action.suggestions;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

      case actionTypes.ADD_CONTEXT:
          lastAssertionStatement = statements.pop();  /* popping off the last render */
          statements.push(createContexts(), lastAssertionStatement);   /* pushing the new middlewaew the user created into the statements array and then adding back the last render */
          return {
            ...state,
            statements,
          };
        case actionTypes.DELETE_CONTEXT:
          lastAssertionStatement = statements.pop();  
          statements = statements.filter(statement => statement.id !== action.id);  /* if statement id !== acion id, then what?? */
          statements.push(lastAssertionStatement);
          return {
            ...state,
            statements,
          };
        case actionTypes.UPDATE_CONTEXT:
          statements = statements.map(statement => {  /* update statements if statement id === action id */
            if (statement.id === action.id) {
              statement.queryVariant = action.queryVariant;
              statement.querySelector = action.querySelector;
              statement.queryValue = action.queryValue;
              statement.values = action.values;
              statement.textNode = action.textNodes;
              statement.providerComponent = action.providerComponent;
              statement.consumerComponent = action.consumerComponent;
              statement.context = action.context;
            }
            return statement;
          });
          return {
            ...state,
            statements,
          };


    case actionTypes.ADD_ACTION:
      lastAssertionStatement = statements.pop();
      statements.push(createAction(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_ACTION:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_ACTION:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.eventType = action.eventType;
          statement.eventValue = action.eventValue;
          statement.queryVariant = action.queryVariant;
          statement.querySelector = action.querySelector;
          statement.queryValue = action.queryValue;
          statement.suggestions = action.suggestions;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    case actionTypes.ADD_ASSERTION:
      lastAssertionStatement = statements.pop();
      statements.push(createAssertion(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_ASSERTION:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_ASSERTION:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.queryVariant = action.queryVariant;
          statement.querySelector = action.querySelector;
          statement.queryValue = action.queryValue;
          statement.isNot = action.isNot;
          statement.matcherType = action.matcherType;
          statement.matcherValue = action.matcherValue;
          statement.suggestions = action.suggestions;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    // switch cases for reducer
    case actionTypes.ADD_REDUCER:
      lastAssertionStatement = statements.pop();
      statements.push(createReducer(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_REDUCER:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_REDUCER:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.reducersFileName = action.reducersFileName;
          statement.reducersFilePath = action.reducersFilePath;
          statement.typesFileName = action.typesFileName;
          statement.typesFilePath = action.typesFilePath;
          statement.queryVariant = action.queryVariant; // action
          statement.querySelector = action.querySelector; // initial state
          statement.queryValue = action.queryValue; // reducer name
          statement.isNot = action.isNot;
          statement.matcherType = action.matcherType; // updated state
          statement.matcherValue = action.matcherValue;
          statement.suggestions = action.suggestions;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    case actionTypes.ADD_RENDER:
      lastAssertionStatement = statements.pop();
      const renderComponentName = state.statements[0].componentName;
      const renderFilePath = state.statements[0].filePath;
      statements.push(createRerender(renderComponentName, renderFilePath), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_RENDER:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
        lastAssertionStatement,
      };
    case actionTypes.UPDATE_RENDER_COMPONENT:
      statements = statements.map(statement => {
        if (statement.type === 'render') {
          statement.componentName = action.componentName;
          statement.filePath = action.filePath;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    case actionTypes.ADD_RENDER_PROP:
      statements = statements.map(statement => {
        if (statement.id === action.renderId) {
          statement.props.push(createRenderProp());
        }
        return statement;
      });
      return {
        ...state,
        statements,
        hasProp: !statements[0].hasProp,
      };
    case actionTypes.DELETE_RENDER_PROP:
      statements = statements.map(statement => {
        if (statement.id === action.renderId) {
          statement.props = statement.props.filter(prop => prop.id !== action.propId);
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_RENDER_PROP:
      statements = statements.map(statement => {
        if (statement.id === action.renderId) {
          statement.props.map(prop => {
            if (prop.id === action.propId) {
              prop.propKey = action.propKey;
              prop.propValue = action.propValue;
            }
            return prop;
          });
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.ADD_ASYNC:
      lastAssertionStatement = statements.pop();
      statements.push(createAsync(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.DELETE_ASYNC:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };
    case actionTypes.UPDATE_ASYNC:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.actionsFile = action.actionsFile;
          statement.asyncFunction = action.asyncFunction;
          statement.typesFileName = action.typesFileName;
          statement.typesFilePath = action.typesFilePath;
          statement.method = action.method;
          statement.route = action.route;
          statement.store = action.store;
          statement.matcher = action.matcher;
          statement.expectedResponse = action.expectedResponse;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    // updates filepath
    case actionTypes.UPDATE_ACTIONS_FILEPATH:
      statements = statements.map(statement => {
        if (statement.type === 'async' || statement.type === 'action-creator') {
          statement.actionsFileName = action.actionsFileName;
          statement.filePath = action.filePath;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.UPDATE_TYPES_FILEPATH:
      statements = statements.map(statement => {
        if (
          statement.type === 'async' ||
          statement.type === 'reducer' ||
          statement.type === 'action-creator'
        ) {
          statement.typesFileName = action.typesFileName;
          statement.typesFilePath = action.typesFilePath;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.UPDATE_REDUCERS_FILEPATH:
      statements = statements.map(statement => {
        if (statement.type === 'reducer') {
          statement.reducersFileName = action.reducersFileName;
          statement.reducersFilePath = action.reducersFilePath;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.UPDATE_MIDDLEWARES_FILEPATH:
      statements = statements.map(statement => {
        if (statement.type === 'middleware') {
          statement.middlewaresFileName = action.middlewaresFileName;
          statement.middlewaresFilePath = action.middlewaresFilePath;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };
    case actionTypes.ADD_ACTIONCREATOR:
      lastAssertionStatement = statements.pop();
      statements.push(createActionCreator(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };

    case actionTypes.DELETE_ACTIONCREATOR:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };

    case actionTypes.UPDATE_ACTIONCREATOR:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.actionsFile = action.actionsFile;
          statement.filePath = action.filePath;
          statement.typesFileName = action.typesFileName;
          statement.typesFilePath = action.typesFilePath;
          statement.actionCreatorFunc = action.actionCreatorFunc;
          statement.payloadKey = action.payloadKey;
          statement.payloadType = action.payloadType;
          statement.actionType = action.actionType;
          statement.actionsFolder = action.actionsFolder;
          statement.typesFolder = action.typesFolder;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.ADD_HOOK_UPDATES:
      lastAssertionStatement = statements.pop();
      statements.push(createHookUpdates(), lastAssertionStatement);
      return {
        ...state,
        statements,
      };

    case actionTypes.DELETE_HOOK_UPDATES:
      lastAssertionStatement = statements.pop();
      statements = statements.filter(statement => statement.id !== action.id);
      statements.push(lastAssertionStatement);
      return {
        ...state,
        statements,
      };

    case actionTypes.UPDATE_HOOK_UPDATES:
      statements = statements.map(statement => {
        if (statement.id === action.id) {
          statement.hook = action.hook;
          statement.hookFile = action.hookFile;
          statement.callbackFunc = action.callbackFunc;
          statement.managedState = action.managedState;
          statement.updatedState = action.updatedState;
        }
        return statement;
      });
      return {
        ...state,
        statements,
      };

    case actionTypes.CREATE_NEW_TEST:
      return {
        testStatement: '',
        statements: [
          {
            id: 0,
            type: 'render',
            componentName: '',
            filePath: '',
            props: [],
            hasProp: false,
          },
          {
            id: 1,
            type: 'assertion',
            queryVariant: '',
            querySelector: '',
            queryValue: '',
            isNot: false,
            matcherType: '',
            matcherValue: '',
            suggestions: [],
          },
        ],
      };
    default:
      return state;
  }
};
