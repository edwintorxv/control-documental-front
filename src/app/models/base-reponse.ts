import { Metadata } from './metadata';

export interface BaseResponse<T> {
  metadata: Metadata[];
  data: T;
}