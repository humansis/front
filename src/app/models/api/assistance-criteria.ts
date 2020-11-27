import { Criteria } from './criteria';

export interface AssistanceCriteria {
  distribution_type: string;
  criteria: Criteria[][];
  threshold: number;
}
