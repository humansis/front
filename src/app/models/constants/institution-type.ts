export const INSTITUTION_TYPES = [
  {
    id: 'school',
    language_key: 'institution_type_school',
  },
  {
    id: 'health',
    language_key: 'institution_type_health',
  },
  {
    id: 'community_center',
    language_key: 'institution_type_community_center',
  },
  {
    id: 'government',
    language_key: 'institution_type_government',
  },
  {
    id: 'production',
    language_key: 'institution_type_production',
  },
  {
    id: 'commerce',
    language_key: 'institution_type_commerce',
  },
];

export const INSTITUTION_TYPES_MAP = INSTITUTION_TYPES.reduce((map, value) => {
  map[value.id] = value;
  return map;
}, {});
