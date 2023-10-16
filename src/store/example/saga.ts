import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { Action, actions, ActionTypes } from './action'

export function* exampleStartAsync(action: Action) {
    try {
        const range = action.payload.range
        const number = Math.floor(Math.random() * range)
        const payload = {
            number
        }

        yield put(actions.exampleSuccessAsync(payload))
        return
    } catch (error) {
        yield put(actions.exampleErrorAsync())
    } finally {
        yield put(actions.exampleFinishAsync())
    }
}

export function* exampleFinishAsync() {
    try {
        console.log('Finish')
        return
    } catch (error) {
        console.log(error)
    }
}

export default function* authSaga() {
    yield takeLatest(ActionTypes.EXAMPLE_START_ASYNC, exampleStartAsync);
    yield takeEvery(ActionTypes.EXAMPLE_FINISH_ASYNC, exampleFinishAsync);
}
