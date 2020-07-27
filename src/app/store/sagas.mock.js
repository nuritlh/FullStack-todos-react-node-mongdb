import { take, put, select } from 'redux-saga/effects';
import * as mutations from './mutations';
const { v4: uuidv4 } = require('uuid');

export function* taskCreationSaga(){
  while (true){
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = 'U1';
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID));
    console.log('Get group ID', groupID);
  }
}