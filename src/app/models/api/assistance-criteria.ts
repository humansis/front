import { Criteria } from './criteria';

export interface AssistanceCriteria {
  criteria: Criteria[][];
  sector: string;
  subsector: string;
  threshold: number;
}
