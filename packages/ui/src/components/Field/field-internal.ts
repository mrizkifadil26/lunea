export const FIELD_COMPONENT = Symbol('FieldComponent');

export type FieldComponentType =
  | 'control'
  | 'adornment'
  | 'input';

export interface FieldComponentMarker {
  readonly [FIELD_COMPONENT]: FieldComponentType;
}
