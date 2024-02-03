import { atom, type WritableAtom } from 'nanostores'
import { EmptyJsonUser } from '@interfaces/emptyJson'

export const $listUsers = atom([EmptyJsonUser])
export const $userSelected = atom(EmptyJsonUser)
