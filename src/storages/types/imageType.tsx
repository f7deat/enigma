export const SELECT_IMAGE = 'SELECT_IMAGE'
export const GET_IMAGE = 'GET_IMAGE'
export const SET_IMAGE = 'SET_IMAGE'

export interface ImageAction {
    type: typeof SET_IMAGE,
    payload: string
}