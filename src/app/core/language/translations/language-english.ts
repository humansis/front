import { REFERRALTYPES } from 'src/app/models/constants/referral-types';
import { ADMINLEVELS } from '../adm-constants';
import { Language } from '../language';

/* tslint:disable */
export class English implements Language {
  // GENERAL VARIABLES
  LANGUAGE = 'english';
  LANGUAGE_ISO = 'en';
  missingTranslation = '-- MISSING TRANSLATION --';
  direction = 'ltr';

  // Utils
  administrative_settings = 'Administrative Settings';
  back = 'Back';
  characters = 'Characters';
  done = 'Done';
  email = 'Email';
  export = 'Export';
  export_selected = 'Export Selected Items';
  false = 'False';
  general_settings = 'Configuration';
  home = 'Home';
  import = 'Import';
  individual = 'Individual';
  information = 'Information';
  is_required = 'is required';
  name = 'name';
  new = 'New';
  next = 'Next';
  no_data = 'No data';
  no_data_to_export = 'No data to export';
  or = 'or';
  rights = 'Rights';
  settings = 'Settings';
  summary = 'Summary';
  the = 'the';
  this = 'this';
  true = 'True';
  selected = 'selected';
  history = 'history';
  loading = 'Loading';

  // Models
  beneficiaries = 'Beneficiaries';
  beneficiary = 'Beneficiary';
  booklet = 'Booklet';
  booklets = 'Booklets';
  commodity = 'Commodity';
  country = 'Country';
  criteria = 'Criteria';
  activity = 'Activity';
  distribution = 'Distribution';
  distributions = 'Distributions';
  donor = 'Donor';
  donors = 'donors';
  general_relief = 'Item';
  head = 'Head';
  household = 'Household';
  households = 'Household';
  language = 'Language';
  location = 'Location';
  logs = 'Logs';
  national_id = 'National ID';
  phone = 'Phone';
  products = 'Products';
  profile = 'Profile';
  project = 'Project';
  projects = 'Projects';
  reports = 'Reports';
  sector = 'Sector';
  user = 'User';
  users = 'users';
  vendor = 'Vendor';
  vendors = 'vendors';
  voucher = 'Vouchers';
  institution = 'Institution';
  institutions = 'Institutions';
  community = 'Community';
  communities = 'Communities';

  // Actions
  add = 'Add';
  cancel = 'Cancel';
  close = 'Close';
  complete = 'Complete';
  create = 'Create';
  delete = 'Delete';
  duplicate = 'Duplicate';
  remove = 'Remove';
  save = 'Save';
  update = 'Update';
  view = 'View';
  redeem = 'Redeem';
  print = 'Print';

  // Common Fields
  address = 'Address';
  currency = 'Currency';
  date = 'date';
  description = 'description';
  details = 'Details';
  distributed = 'Distributed';
  female = 'Female';
  gender = 'Gender';
  id = 'ID';
  justification = 'justification';
  male = 'Male';
  notes = 'Notes';
  other = 'Other';
  password = 'Password';
  status = 'Status';
  type = 'Type';
  unit = 'unit';
  username = 'Username';
  value = 'Value';
  latitude = 'Latitude';
  longitude = 'Longitude';
  amount = 'Amount';
  price = 'Price';
  purchased_by = 'Purchased by';
  quantity = 'Quantity';
  total = 'Total';
  subsector = 'Subsector';
  assistance_type = 'Assistance Type';
  target_type = 'Target Type';
  vulnerability = 'Vulnerability';

  // Error
  back_to_homepage = 'Go back to homepage';
  error_interceptor_msg = 'An error occured, request has failed (Empty back response).';
  forbidden = 'Forbidden Page';
  forbidden_message = "Sorry, you don't have permission to access this page";
  not_connected_error = 'Please log in';
  not_enough_rights = 'Not enough rights to request logs';
  not_found = 'Page Not Found';
  not_found_message = 'Sorry, this page could not be found';

  // Months
  months_short = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Address and location
  adm1 = ADMINLEVELS.en.adm1;
  adm2 = ADMINLEVELS.en.adm2;
  adm3 = ADMINLEVELS.en.adm3;
  adm4 = ADMINLEVELS.en.adm4;
  address_number = 'Address Number';
  address_postcode = 'Address Postcode';
  address_street = 'Address Street';

  // Add beneficiary
  add_beneficiary_done = 'Summary of Household to create';
  add_beneficiary_title = 'add beneficiary';
  add_beneficiary_code = 'Ext';
  add_beneficiary_occupation = 'Occupation';
  add_beneficiary_external_support = 'External support';
  add_beneficiary_project = 'Please add this household to one or more project';

  // Add distribution
  add_distribution_advanced_option = 'Advanced options';
  add_distribution_beneficiaries_reached = 'Beneficiaries reached';
  add_distribution_check_fields =
    'Fill the new distribution information before, including the commodity and a minimum selection score value greater than 0.';
  add_distribution_commodities_delivered = 'to be delivered';
  add_distribution_created = ' was created';
  add_distribution_date_inside_project =
    'Error while creating new distribution, your distribution date has to be inside the project dates';
  add_distribution_date_before_today =
    'Error while creating new distribution, your distribution date has to be after today';
  add_distribution_distributed_commodity = 'distributed commodity';
  add_distribution_error_creating = 'Error while creating new distribution';
  add_distribution_households_reached = 'Households reached';
  add_distribution_missing_commodity = 'A commodity is missing';
  add_distribution_missing_date = 'The date is missing';
  add_distribution_missing_location = 'Add a Province';
  add_distribution_missing_selection_criteria = 'A selection criterion is missing';
  add_distribution_missing_criteria_group =
    'There are no criteria groups. Please add at least one criteria group.';
  add_distribution_missing_threshold =
    "The minimum selection score's value should be greater than or equal to 0";
  add_distribution_multiple_modalities =
    'You cannot add commodities which are not distributed the same way';
  add_distribution_no_beneficiaries =
    'The number of reached beneficiaries/households must be positive';
  add_distribution_selection_criteria = 'selection criteria';
  add_distribution_target = 'Target';
  add_distribution_location_date = 'Location and date';
  add_distribution_text_explanation =
    'The system will only select beneficiaries/households that have a score higher than the minimum selection score';
  add_distribution_threshold = 'Minimum Vulnerability Score';
  add_distribution_zero =
    'The number of households reached or the amount to be distributed is 0';

  add_distribution_very_low = 'Very low';
  add_distribution_low = 'Low';
  add_distribution_average = 'Average';
  add_distribution_high = 'High';
  add_distribution_very_high = 'Very high';
  add_distribution_add_group = 'Add Group';

  // Add project
  add_project_title = 'new project';
  add_project_new_distribution = 'new distribution';
  add_project_new_assistance = 'New Assistance';

  // Beneficiaries
  beneficiary_add_list = 'Add to project';
  beneficiary_add_project =
    'Please select the project(s) in which you would like to add the';
  beneficiary_add_project_title = 'Add beneficiaries to a project';
  beneficiary_added = 'Beneficiaries added to the selected project';
  beneficiary_advanced_research = 'Advanced search';
  beneficiary_clear_all_research = 'Clear all';
  beneficiary_count = 'Beneficiaries count';
  beneficiary_date_of_birth = 'Date of Birth';
  beneficiary_en_family_name = 'family name (English)';
  beneficiary_en_given_name = 'first name (English)';
  beneficiary_en_name = 'name (English)';
  beneficiary_en_parent_name = 'Parent name (English)';
  beneficiary_family_name = 'Family name';
  beneficiary_given_name = 'First name';
  beneficiary_head = 'Household head';
  beneficiary_id = 'Beneficiary ID';
  beneficiary_justification_added = 'Justification for adding';
  beneficiary_justification_removed = 'Justification for removing';
  beneficiary_local_family_name = 'family name (Local)';
  beneficiary_local_given_name = 'first name (Local)';
  beneficiary_local_name = 'name (Local)';
  beneficiary_local_parent_name = 'Parent name (Local)';
  beneficiary_member = 'Member';
  beneficiary_missing_selected_project = 'You must select a project before uploading';
  beneficiary_personnal = 'personal information';
  beneficiary_plural = 'these beneficiaries';
  beneficiary_referral = 'Referral';
  beneficiary_referral_comment = 'Comment';
  beneficiary_referral_question = 'Add a referral';
  beneficiary_referral_type = 'Referral type';
  beneficiary_referral_types = REFERRALTYPES.en;
  beneficiary_res_address = 'Resident Address';
  beneficiary_residency = 'residency';
  beneficiary_residency_status = 'Residency status';
  beneficiary_residency_status_idp = 'IDP';
  beneficiary_residency_status_refugee = 'Refugee';
  beneficiary_residency_status_resident = 'Resident';
  beneficiary_select_api = 'Select API';
  beneficiary_selected_project = 'selected beneficiaries:';
  beneficiary_update_title = 'Update Beneficiary';
  beneficiary_vulnerabilities = 'Vulnerabilities';

  // Beneficiary form errors
  beneficiary_error_address_number = 'You must enter an address number';
  beneficiary_error_birth_date = 'Please select a valid birth date for ';
  beneficiary_error_gender = 'You must select a gender for ';
  beneficiary_error_head = 'the head of household';
  beneficiary_error_project = 'You must select at least one project';
  beneficiary_error_address_postcode = 'You must enter an address postcode';
  beneficiary_error_address_street = 'You must enter an address street';
  beneficiary_error_country_code =
    'Please select a country code for the phone number for ';
  beneficiary_error_existing_country_code =
    'Please select an existing country code from the list for ';
  beneficiary_error_family_name = 'You must enter a local family name for ';
  beneficiary_error_given_name = 'You must enter a local given name for ';
  beneficiary_error_location = 'You must select a location';
  beneficiary_error_member = ' member';
  beneficiary_error_phone = 'Phone can only be composed of digits for ';
  beneficiary_error_camp = 'You must select or create a camp';
  beneficiary_error_tent = 'You must enter a tent number';
  beneficiary_error_location_type = 'You must chose a location type';

  // Beneficiary import
  beneficiary_import_addFile = 'add file or drag and drop';
  beneficiary_import_addModal = 'add file';
  beneficiary_import_api = 'import from external data source';
  beneficiary_import_beneficiaries_imported = ' beneficiaries inserted';
  beneficiary_import_canceled = 'import canceled';
  beneficiary_import_check_fields =
    'A field is empty or unset, please fill all inputs and select a project';
  beneficiary_import_conversion_success = 'Conversion successfull!';
  beneficiary_import_convert = 'convert file';
  beneficiary_import_csv = 'download template';
  beneficiary_import_error_file = 'You must select a file';
  beneficiary_import_error_importing = 'Error while importing data';
  beneficiary_import_error_selection = 'You must select at least one choice';
  beneficiary_import_file = 'import from file';
  beneficiary_import_response = 'Get ready to recover the file';
  beneficiary_import_select_location = 'You must select a location';
  beneficiary_import_select_project =
    'You must select a project and add a file before uploading';
  beneficiary_import_title = 'import beneficiary data';
  beneficiary_import_warning =
    'Warning: if the provided file is incomplete, the resulting one may need to be completed for the import to succeed.';

  // Booklets
  booklet_code = 'Code';
  booklet_deactivated = 'Deactivated';
  booklet_define_password = 'Define a password';
  booklet_export_codes = 'Export booklet codes';
  booklet_individual_value = 'Individual value';
  booklet_number_booklets = 'Quantity of booklets';
  booklet_number_vouchers = 'Quantity of vouchers';
  booklet_password_pattern = 'The password must be four digits';
  booklet_unassigned = 'Unassigned';
  booklet_update_password = 'Update the password';
  booklet_used = 'Used';

  // Cache
  cache_distribution_added =
    'Distribution and beneficiaries of the project added to the cache';
  cache_no_distribution =
    "This distribution isn't stored in the cache, you can't access it offline";
  cache_store_beneficiaries = 'Offline Mode';
  cache_stored_beneficiaries = 'Saved For Offline Mode';

  // Commodities tooltips
  commodity_cash = 'cash';
  commodity_smartcard = 'Smartcard';
  commodity_in_kind = 'in kind';
  commodity_modality_cash = 'Mobile Money';
  commodity_modality_qr_voucher = 'QR Code Voucher';
  commodity_modality_paper_voucher = 'Paper Voucher';
  commodity_modality_bread = 'Bread';
  commodity_modality_loan = 'Loan';
  commodity_modality_food = 'Food';
  commodity_modality_wash = 'WASH Kit';
  commodity_modality_agriculture = 'Agricultural Kit';
  commodity_modality_rte = 'RTE Kit';
  commodity_modality_shelter = 'Shelter tool kit';
  commodity_modality_hygiene = 'Hygiene kit';
  commodity_modality_dignity = 'Dignity kit';
  commodity_kgs = 'Kgs';
  commodity_kit = 'Kit';
  commodity_modality = 'Modality';
  commodity_value = this.quantity;
  commodity_value_voucher = 'Total value of the booklet';

  // Countries
  country_khm = 'Cambodia';
  country_syr = 'Syria';
  country_specific = 'Country specific option';
  country_specific_field = 'Field';

  // Dashboard
  dashboard_distribution_map = 'distribution map';
  dashboard_recent_distributions = 'upcoming distributions';
  dashboard_summary_1 = 'total registrations';
  dashboard_summary_2 = 'active projects';
  dashboard_summary_3 = 'enrolled beneficiaries';
  dashboard_summary_4 = 'total value transactions';
  dashboard_summary_5 = 'served beneficiaries';
  dashboard_summary_6 = 'completed distributions';

  // Data verification
  data_verification_chip_actual = 'Household targeted';
  data_verification_chip_add = 'To add';
  data_verification_chip_existing = 'Existing';
  data_verification_chip_remove = 'To remove';
  data_verification_description_duplicates =
    'The duplicate check page displays any potential duplicate beneficiary records in the database. If the existing beneficiary is not a head of household, you can overwrite their information, ignored the changes, or save both as different beneficiaries if you are sure they are different people.';
  data_verification_description_less =
    'We found records which you’ve indicated you wish to remove from the database. Please select those which you wish to remove.';
  data_verification_description_more =
    'We found records that do not appear to exist in the database already. Please select those that you wish to add to the project database.';
  data_verification_description_typos =
    'This panel will display any suspected data entry errors found in the imported beneficiary data. Please choose whether to keep the existing one, update it with the imported data or save both as separate beneficiary records.';
  data_verification_description_end =
    'Modifications will NOT be added to the database until the end of the validation process';
  data_verification_done = 'Your data has been verified';
  data_verification_error = 'Error processing data';
  data_verification_last_updated = 'Last updated';
  data_verification_snackbar_duplicate_corrected = 'Duplicate issues corrected';
  data_verification_snackbar_duplicate_no_corrected =
    'Not all duplicated have been corrected';
  data_verification_snackbar_less_corrected = 'Beneficiaries removed with success';
  data_verification_snackbar_more_corrected = 'Beneficiaries added with success';
  data_verification_snackbar_typo_corrected = 'Typo issues corrected';
  data_verification_snackbar_typo_no_corrected =
    'Not all typo issues have been corrected';
  data_verification_step_info = 'Step info';
  data_verification_step_duplicates = 'Check for Duplicates';
  data_verification_step_less = 'Remove Beneficiaries';
  data_verification_step_more = 'Add Beneficiaries';
  data_verification_step_typos = 'Data Entry Inconsistencies';
  data_verification_title = 'data verification and validation';

  // Data columns mapping
  data_mapping_title = 'data columns mapping';

  // Distribution
  distribution_accept_changed = 'Accept Changes';
  distribution_add_beneficiaries = 'Add beneficiaries to this distribution';
  distribution_add_justification = 'Add justification';
  distribution_justify_added = 'Please provide a justification for adding beneficiaries';
  distribution_justify_created =
    'Please provide a justification for creating beneficiaries';
  distribution_justify_deleted =
    'Please provide a justification for deleting beneficiaries';
  distribution_beneficiary_added = 'Beneficiary added';
  distribution_beneficiary_not_added = 'Beneficiary could not be added';
  distribution_cant_update = "You can't update this distribution.";
  distribution_date = 'Date of Distribution';
  distribution_details_export = 'distribution list';
  distribution_details_import = 'import & compare';
  distribution_details_random = 'export random sample';
  distribution_details_sample_size = 'Sample size';
  distribution_details_validate = 'validate & lock';
  distribution_distribute = 'set as distributed';
  distribution_complete = 'Set as Completed';
  distribution_edit = 'Edit distribution';
  distribution_error_validate =
    'The distribution is empty, please fill it before to validate it';
  assistance_id = 'Assistance ID';
  distribution_last_modification = 'last modified : ';
  distribution_no_beneficiaries =
    'No beneficiaries have been added or removed. Any changes made to the imported beneficiaries will be updated in the system.';
  distribution_no_random_sample = "Random sample can't be generated...";
  distribution_no_right_transaction =
    "You haven't the right to realize the transaction, ask to your project manager or your country manager";
  distribution_no_right_validate =
    "You haven't the right to validate the distribution, ask to your project manager";
  distribution_no_valid_commodity = 'No valid commodity detected for this distribution.';
  distribution_not_modified = 'This distribution has not been modified so far.';
  distribution_not_validated = 'Distribution could not be validated';
  distribution_request_logs = 'Send transaction logs by email';
  distribution_select_beneficiaries = 'Please select the beneficiaries from the project';
  distribution_show_data = 'Show data anyway';
  distribution_succes_completed = 'Distribution successfully completed!';
  distribution_type = 'Target';
  distribution_validate = 'Validate';
  distribution_validated = 'Distribution has been validated';
  distribution_validated_title = 'Validated distribution';
  distribution_want_add = 'that you want to add to the ';

  // Donor
  donor_fullname = 'Donor name';
  donor_shortname = 'Short name';

  // Header
  'header_add-beneficiaries' = 'Add Beneficiaries';
  'header_add-distribution' = 'Add Distribution';
  'header_admin' = 'Administrative Settings';
  'header_data-mapping' = '';
  'header_data-validation' = 'Data Validation';
  'header_distributions' = 'Distribution';
  'header_settings' = 'Configuration';
  'header_update-beneficiary' = 'Update Beneficiaries';
  header_beneficiaries = 'Beneficiaries';
  header_disconnect = 'Log out';
  header_home = 'Home';
  header_household = this.household;
  header_import = 'Import beneficiary data';
  header_imported = 'Imported beneficiaries data';
  header_language = this.language;
  header_logs = this.logs;
  header_profile = this.profile;
  header_projects = this.projects;
  header_reports = this.reports;
  header_vouchers = this.voucher;
  header_vendors = this.vendors;

  // Household
  household_coping_strategies_index = 'Coping strategies index';
  household_food_consumption_score = 'Food consumption score';
  household_full_address = 'Full household address';
  household_id = 'Household ID';
  household_income = 'Income';
  household_income_spent_on_food = 'Income spent on food';
  household_info = 'Household information summary';
  household_livelihood = 'Livelihood';
  household_location = 'Household Location';
  household_location_address = 'Address';
  household_location_camp = 'Camp';
  household_location_camp_name = 'Camp name';
  household_location_create_camp = 'Create a camp';
  household_location_current_address = 'Current address';
  household_location_current_location = 'Current location';
  household_location_question = 'Is your current location different than your address?';
  household_location_residence = 'Residence';
  household_location_resident_address = 'Resident address';
  household_location_resident_location = 'Resident location';
  household_location_settlement = 'Temporary settlement';
  household_location_tent = 'Tent number';
  household_location_type = 'Type of location';
  household_members = 'Members';
  household_no_data_offline = "This data can't be accessed offline";
  household_sentence = 'The household of ';
  household_summary_members = 'Household members';
  household_debt_level = 'Debt Level';
  household_support_received_other_org = 'External Support Received Type';
  household_support_date_received = 'Support date received';
  household_support_organization = 'Support organization';
  household_assets = 'Assets';
  household_shelter_status = 'Shelter type';
  household_status = 'Household status';

  //Vendors
  vendor_redeemed_batches = 'Redeemed Batches';
  vendor_redemption_summary = 'Vendor Redemption Summary';
  vendor_transaction_summary = 'Vendor Transaction Summary';
  vendor_total_number_transactions = 'Total No. Transactions';
  vendor_total_value_transactions = 'Total Value Transactions';
  vendor_see_history = 'See History';
  vendor_unpaid_transactions = 'Unpaid Transactions';
  vendor_unpaid_transaction_value = 'Unpaid Transaction Value';

  // Import
  import_added = 'Added from existing beneficiaries';
  import_back_to_beneficiaries = 'Back to Beneficiaries';
  import_back_to_project = 'Back to Project';
  import_created = 'Newly created';
  import_deleted = 'Will be deleted';
  import_description =
    'Import the file that contains the modified distribution. The database will be updated with the new list of beneficiaries for this distribution when you will click on "update" after importing.';
  import_distribution_no_right_update =
    'You do not have the right to modify the distribution, ask your project manager';
  import_distribution_updated = 'Distribution updated';
  import_select_new = 'Select all new';
  import_select_old = 'Select all old';
  import_updated = 'Will be updated';

  // Livelihoods
  livelihood_daily_labour = 'Daily Labour';
  livelihood_farming_agriculture = 'Farming - Agriculture';
  livelihood_farming_livestock = 'Farming - Livestock';
  livelihood_government = 'Government';
  livelihood_home_duties = 'Home Duties';
  livelihood_trading = 'Trading';
  livelihood_own_business = 'Own Business';
  livelihood_textiles = 'Textiles';

  //Log audit

  // Actions
  log_archive = 'Archived';
  log_assign = 'Assigned';
  log_add_beneficiary = 'Added Beneficiaries';
  log_add_households = 'Added Households';
  log_complete = 'Completed';
  log_create = 'Created';
  log_deactivate = 'Deactivated';
  log_deactivate_booklets = 'Deactivated';
  log_delete = 'Deleted';
  log_delete_batch = 'Batch Deleted';
  log_edit_general_relief_notes = 'General Relief Item Notes Added';
  log_import = 'Imported';
  log_import_beneficiaries_from_api = 'Imported From Api';
  log_import_beneficiaries_from_syria_file = 'Imported From Syria File';
  log_import_beneficiary = 'Imported Beneficiaries';
  log_post_password = 'Changed Password';
  log_scan = 'Scanned';
  log_remove_many = 'Deleted';
  log_remove_one_beneficiary = 'Removed One Beneficiary';
  log_send_transaction = 'Mobile Money Sent';
  log_send_verification_email = 'Code Sent';
  log_set_general_relief_items_as_distributed = 'General Relief Item Distributed';
  log_update = 'Updated';
  log_update_f_p = '3rd party connection edited';
  log_post_language = 'Changed Default Language';
  log_update_password = 'Updated Password';
  log_upload_image = 'Uploaded An Image';
  log_upload_logo = 'Uploaded A Logo';
  log_validate = 'Validated';

  // Objects
  log_beneficiary = 'Beneficiary';
  log_booklet = 'Booklet';
  log_country = 'Country Specifics';
  log_distribution = 'Distribution';
  log_donor = 'Donor';
  log_household = 'Household';
  log_organization = 'Organization';
  log_product = 'Product';
  log_project = 'Project';
  log_transaction = 'Transaction';
  log_user = 'User';
  log_vendor = 'Vendor';
  log_voucher = 'Voucher';

  //Fields
  log_field_action = 'Action';
  log_field_country = 'Country';
  log_field_date = 'Date';
  log_field_details = 'Details';
  log_field_id = 'Id';
  log_field_object = 'Object';
  log_field_status = 'Status';
  log_field_user = 'User';

  //Reports
  log_active_users_title = 'Most active users';
  log_code = 'Code';
  log_family_name = 'family name';
  log_field = 'Field';
  log_old_id = 'Previous id';
  log_name = 'Name';
  log_not_exists = 'Not exists anymore';
  log_no_details = 'No details to display';
  log_number_booklets = 'Number of booklets';
  log_number_vouchers = 'Number of vouchers';
  log_requests = 'Requests';
  log_requests_country_title = 'Requests per country';
  log_requests_day_title = 'Requests per day';
  log_status_rate_title = 'Status rate';
  log_time = 'Time';
  log_users = 'Users';
  log_username = 'Username';
  log_value = 'Value';

  //Status
  log_status_200 = 'Success';
  log_status_300 = 'Redirected';
  log_status_400 = 'Error';
  log_status_401 = 'Unauthenticated';
  log_status_403 = 'Forbidden';
  log_status_404 = 'Not Found';

  // Login
  login_bms = 'Beneficiary management system';
  login_captcha_invalid = 'The captcha is invalid';
  login_password = '*********';
  login_prompt = 'Please log in';
  login_title = 'Login';
  login_title_hid = 'Login with HID';
  login_title_google = 'Login with Google';
  login_two_fa_invalid_code = 'Invalid code, please try again';
  login_two_fa_message = 'This is your Humansis authentication code';

  // Map legend
  map_legend_completed = 'completed';
  map_legend_not_validated = 'not validated';
  map_legend_validated = 'validated';

  // Modal
  modal_add_multiple_title = 'Create new';
  modal_add_no_value = 'You need to enter a value';
  modal_add_title = 'Create a new ';
  modal_check_date = 'Invalid fields = Your start date cannot be older than the end date';
  modal_check_fields = 'Invalid fields = check you filled every field';
  modal_delete_beneficiary = 'Remove beneficiary';
  modal_delete_beneficiary_sentence = 'You are about to remove ';
  modal_delete_beneficiary_sentence_2 = ' from this distribution';
  modal_delete_many = 'these elements';
  modal_complete_distribution = 'Are you sure you want to close this distribution?';
  modal_delete_sentence = 'You are about to delete ';
  modal_delete_sentence_2 = 'Do you wish to continue ?';
  modal_details_title = 'Details of this';
  modal_edit_title = 'Edit this';
  modal_failure = 'Failure';
  modal_file_extension_error = 'The file extension must be ';
  modal_language_actual = 'Current language ';
  modal_leave = 'Leave';
  modal_leave_sentence = 'Do you really want to leave with unsaved changes?';
  modal_no_file = 'No file chosen';
  modal_not_enough_strong =
    'The password is not strong enough... Minimum required = 8 characters, 1 lowercase, 1 uppercase, 1 numeric';
  modal_pending_requests = 'Pending Requests';
  modal_pick_color = 'Select a color';
  modal_request_error = 'Error while sending request: ';
  modal_request_success = 'was sent';
  modal_required = 'required';
  modal_save_language_as_default = 'Set this as my default language';
  modal_success = 'Success';
  modal_valid_email = 'Please enter a valid email address';
  modal_values_format_error =
    'If you want to set individual values, type numeric values separated by commas (max 5)';
  modal_warning_pending_requests_1 =
    'Find the requests you created during your offline time below, you can send those you want to apply to modify the database.';
  modal_warning_pending_requests_2 =
    'WARNING = Requests linked to an item you created offline will fail !';
  modal_no_pending_requests = 'There are no pending requests';

  // National ID
  national_id_card = 'National ID';
  national_id_family_registry = 'Family Registration';
  national_id_license = "Driver's License";
  national_id_number = 'ID Number';
  national_id_passport = 'Passport';
  national_id_birth_certificate = 'Birth Certificate';
  national_id_type = 'ID Type';
  national_id_camp = 'Camp ID';
  national_id_social_service = 'Social Service Card';

  //Network
  network_access_offline = "This data can't be accessed offline:";
  network_no_connection = 'No network connection';
  network_no_connection_reconnect =
    'No network connection, this data will be sent once you are reconnected';
  network_manipulate_offline = "This data can't be manipulated offline:";
  network_status_connected = 'You are now connected to the network';
  network_status_disconnected = 'You are now disconnected from the network';

  // Null values
  null_none = 'none';
  null_not_yet = 'not yet';
  null_not_distributed = 'not distributed';
  null_not_yet_defined = 'not yet defined';

  // Number suffixes
  number_suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
  };

  number_suffix_other = 'th';

  // Organization
  organization_font = 'font to apply to the pdf';
  organization_footer = 'pdf footer content';
  organization_logo = 'organization logo';
  organization_name = 'organization name';
  organization_primary = 'organization primary color';
  organization_secondary = 'organization secondary color';

  // Phone
  phone_no = 'Phone No. ';
  phone_prefix = 'Ext';
  phone_proxy = 'Proxy';
  phone_type_landline = 'Landline';
  phone_type_mobile = 'Mobile';

  // Placeholder
  placeholder_one_many = 'Select one or many';

  // Product
  product_image = 'Image';

  // Profile
  profile_change_password = 'You need to change your password';
  profile_change_phone = 'Change phone number';
  profile_password_changed = 'Password changed';
  profile_password_would_not_be_changed =
    'The two passwords are identical, ignoring update.';
  profile_phone_changed = 'Phone number successfully changed';
  profile_phone_not_valid = 'The phone number introduced is not valid';
  profile_two_fa_enable = 'Enable';
  profile_two_fa_enabled = 'Two factor authentication successfully enabled';
  profile_two_fa_disable = 'Disable';
  profile_two_fa_disabled = 'Two factor authentication disabled';
  profile_two_fa_information =
    'Two-factor authentication adds an additional layer of security to your account by requiring more than a password to log in';
  profile_two_fa_title = '2 Factor Authentication';
  profile_two_fa_warning =
    'You need a registered telephone number to enable two-phase authentication';
  profile_user_change_password = 'Change password';
  profile_user_hint_new_password = 'New password';
  profile_user_hint_new_password_again = 'Re-enter new password';
  profile_user_hint_old_password = 'Old password';
  profile_user_hint_new_phone_number = 'Phone number';
  profile_user_hint_new_phone_prefix = 'Prefix';
  profile_user_information = 'User information';

  // Project
  project_add = 'Please add a new project to begin!';
  project_add_household =
    'Please add some beneficiaries first! Then you will be able to manage some distributions...';
  project_click = 'Click on ' + this.add;
  project_create = 'Create a new project';
  project_description =
    "You will be able to modify project's name until your first distribution.";
  project_end_date = 'End Date';
  project_go_import_beneficiaries = 'Import Beneficiaries';
  project_name = 'Project name';
  project_internal_id = 'Internal ID';
  project_no_distribution =
    'This project does not contain any distributions. Create your first one !';
  project_no_household = 'This project does not contain any households.';
  project_no_projects = 'This country currently does not contain any active projects.';
  project_number_of_households = 'Number of Households';
  project_sectors_name = 'Sectors';
  project_start_date = 'Start Date';
  project_value = 'Total Target Beneficiaries';

  // Report
  report_active_project = 'active project';
  report_active_projects = this.dashboard_summary_2; // 'Active Projects'
  report_apply = 'apply';
  report_country = 'country';
  report_country_report = 'country report';
  report_distributions = this.distributions; // 'distributions'
  report_distribution_report = 'distribution report';
  report_enrolled_beneficiary = 'enrolled beneficiary';
  report_enrolled_beneficiaries = this.dashboard_summary_3; // 'Enrolled Beneficiaries'
  report_filter_chose_periode = 'choose period';
  report_filter_per_month = 'per month';
  report_filter_per_quarter = 'per quarter';
  report_filter_per_year = 'per year';
  report_frequency_month = 'Month';
  report_frequency_quarter = 'Quarter';
  report_frequency_year = 'Year';
  report_from = 'from';
  report_household = this.household; // 'household'
  report_loader = 'Loader';
  report_period_selected = 'Period selected';
  report_project = 'project';
  report_project_report = 'project report';
  report_select_frequency = 'Select frequency';
  report_time = 'Time';
  report_to = 'to';
  report_total_households = 'Total Households';
  report_total_number_of_distributions = 'Total Number Of Distributions';
  report_total_transactions_completed = 'Total Transactions Completed';
  report_transactions_completed = 'transactions completed';
  report_upcoming_reporting = 'Upcoming reporting';

  report_age_breakdown = 'Age breakdown';
  report_donors = this.donors; // 'Donors'
  report_household_served = 'Households served';
  report_modality = this.commodity_modality; // 'Modality'
  report_number_men_and_women = 'Number men and women';
  report_number_of_enrolled_beneficiaries = 'Number of enrolled beneficiaries';
  report_percentage_of_vulnerabilities_served = 'Percentage of vulnerabilities served';
  report_percentage_of_beneficiaries_reached = 'Percentage of beneficiaries reached';
  report_total_distribution_value = 'Total distribution value';

  report_disabled = 'Disabled';
  report_households = 'Households';
  report_lactating = 'Lactating';
  report_men = 'Men';
  report_not_reached = 'Not reached';
  report_nutritionalissues = 'Nutritional Issues';
  report_percentage_of_beneficiaries = 'Percentage of beneficiaries';
  report_soloparent = 'Solo Parent';
  report_vulnerability_served = 'Vulnerability Served';
  report_women = 'Women';
  report_missing_distribution = 'You did not select a distribution!';

  // Role
  role_user_admin = 'Administrator';
  role_user_country_manager = 'Country manager';
  role_user_enumerator = 'Enumerator';
  role_user_field_officer = 'Field officer';
  role_user_project_manager = 'Project manager';
  role_user_project_officer = 'Project officer';
  role_user_regional_manager = 'Regional manager';

  // Sectors tooltips
  sector_cccm = 'Camp coordination and management';
  sector_recovery = 'Early recovery';
  sector_education = 'Education';
  sector_telecom = 'Emergency telecommunications';
  sector_food = 'Food security';
  sector_health = 'Health';
  sector_logistics = 'Logistics';
  sector_nutrition = 'Nutrition';
  sector_protection = 'Protection';
  sector_shelter = 'Shelter';
  sector_water = 'WASH';
  sector_cash_for_work = 'cash for work';
  sector_tvet = 'TVET';
  sector_food_kits = 'food, RTE kits';
  sector_nfi = 'NFIs';
  sector_livelihoods = 'Livelihood';
  sector_mine_action = 'Mine action';
  sector_nonspecific = 'Non-specific sector';
  sector_multipurpose_cash = 'Multi-Purpose Cash Assistance';
  sector_education_tvet = 'Education & TVET';
  sector_drr_diligence = 'DRR Diligence';

  // Settings
  settings_country_specific_options = 'country specific options';
  settings_created = ' created';
  settings_financial_provider = 'Third party connections';
  settings_log_button = 'Get user logs by email';
  settings_organization = 'My organization';
  settings_print_starting = 'Your download is starting';
  settings_project_exists = 'A project with this name already exists';

  // Snackbar
  snackbar_change_password_done = 'Password has been changed!';
  snackbar_change_password_fail = 'Could not change password...';
  snackbar_change_password_not_possible =
    'Password must be longer than 1 character and match with verification';
  snackbar_created_successfully = 'Created successfully';
  snackbar_error_creating = 'Error while creating ';
  snackbar_error_updating = 'Error while updating ';
  snackbar_invalid_transaction_date = 'The transaction deadline is over.';
  snackbar_distribution_in_future =
    'The Date of the Distribution is in the future. You cannot proceed with this Transaction.';
  snackbar_no_data_export = 'No data to export';
  snackbar_pickup_error = 'It is currently impossible to check the pickup status';
  snackbar_saved_language = 'Default Language Saved';
  snackbar_update = 'An update is available';
  snackbar_updated_successfully = 'Updated successfully';
  snackbar_verification_code = 'Verification code has been sent at';
  snackbar_verification_code_error = 'Could not send code:';
  snackbar_verification_code_wait_error =
    'The last code was sent less than 10 seconds ago, you should wait.';
  snackbar_pdf_export_failed =
    'Cannot export PDF file because there are no graphs on web page.';

  // Table
  table_actions = 'Actions';
  table_assign = 'Assign';
  table_element_deleted = ' deleted';
  table_element_updated = ' updated';
  table_filter = 'Search by keyword';
  table_filtered = 'Items filtered';
  table_first_page = 'First page';
  table_items_per_page = 'Items per page';
  table_last_page = 'Last page';
  table_logs_error = 'Logs could not be sent';
  table_logs_success = 'Logs have been sent';
  table_next_page = 'Next page';
  table_of_page = 'of';
  table_previous_page = 'Previous page';
  table_print = this.print;
  table_selected = 'Items selected';

  // Time
  time_just_now = 'Just now';

  // Transaction
  transaction_accept_prevention = 'I agree to these terms.';
  transaction_again = 'Send again';
  transaction_amount_distributed = 'Amount distributed';
  transaction_amount_done = 'Amount sent';
  transaction_amount_total = 'Total amount';
  transaction_amount_used = 'Amount used';
  transaction_amount_waiting = 'Amount picked up';
  transaction_confirm = 'Confirm the transaction';
  transaction_confirm_button = 'Confirm';
  transaction_email_code = 'An email containing your validation code has been sent to:';
  transaction_id_transaction = 'Transaction ID';
  transaction_info_export =
    "If the distribution doesn't have any transactions, no file will be exported";
  transaction_inProgress = 'Transaction in progress...';
  transaction_message = 'Message';
  transaction_no_transaction_sent = 'No completed transaction, cannot export';
  transaction_paste_code =
    "Please paste the code here and click on 'Confirm' to proceed with the transaction ";
  transaction_pickupDate = 'Pick up date';
  transaction_prevention =
    'This platform is still under development and the online cash transaction functionality may not be fully stable yet. The development team denies responsibility for any errors that may occur in terms of money loss. By ticking the box below, you agree to use the system knowing fully well its limitations and take responsibility for the results of the transaction.';
  transaction_progress = 'commodity distribution progress:';
  transaction_refresh = 'Check pickup status';
  transaction_state_already_sent = 'Sent'; // Means sent during a previous transaction (before loading the page)
  transaction_state_no_phone = 'No phone';
  transaction_state_not_sent = 'Not sent';
  transaction_state_picked_up = 'Picked up';
  transaction_state_sending_failed = 'Sending failed';
  transaction_state_sent = 'Sent'; // Means sent during the current transaction (after loading the page)
  transaction_transaction = 'Start transaction';
  transaction_validate_distribution =
    'Do you really want to validate this distribution ?';
  transaction_validation = 'Confirm the validation';

  // Tooltip
  tooltip_admin =
    "This page is where you can manage users, donors and your organization's specifics";
  tooltip_add_beneficiaries =
    'This page is a form to add a new household to the platform.';
  tooltip_add_distribution =
    'This page a form to add a new distribution to a project. You will use selection criteria to determine the households or beneficiaries who will take part in it and add a specific amount of commodities to be distributed.';
  tooltip_beneficiaries =
    'This page is where ou can see all the households in the country. If you have the right, you can add new households with the "+" button, manage households and filter/research in the list.';
  tooltip_dashboard =
    "This page is where you have a global view on some figures about the country and its projects. There is a map to show you the country's distributions and a summary of the last ones.";
  tooltip_data = 'This page is a summary of the households you have imported.';
  tooltip_data_validation =
    'This page is where you can import beneficiaries using a file. You have to verify your file by following the steps.';
  tooltip_distributions =
    "This page is where you can see all distribution's households. If you have the right, you can add new households with a file or by selecting in the list, manage households and validate the distribution.";
  tooltip_import =
    'This page is where you can import beneficiaries. You can choose to import them using a file or the API (the external data source) to import all the household of a specific commune.';
  tooltip_profile = 'This page is where you can change your password.';
  tooltip_projects =
    "This page is where you can see all the country's projects (only thoses that you have the right to see). If you have the right, you can add a new distribution with the project's households, manage distributions and transactions.";
  tooltip_reports =
    "This page is used to see the country's statistics, such as the average transactions of a projects, number of distributions...";
  tooltip_settings =
    "This page is where you'll be able to add a new project, country specific, third party connection, product, vendor, edit and delete them according to your rights";
  tooltip_update_beneficiary = 'This page is a form to update the selected household.';
  tooltip_vouchers =
    'This page is where you can create, edit, assign and print vouchers booklets';

  //Vouchers
  voucher_ask_code = 'Please ask beneficiary to enter his 4 digits code here';
  voucher_assign = 'Assign vouchers';
  voucher_assignment_cancelled = 'Voucher Assignment Cancelled';
  voucher_assign_title = 'Assign booklet to a beneficiary';
  voucher_assigned_success = 'The booklet has been assigned to ';
  voucher_confirm = 'Booklet assigned to';
  voucher_created = 'The booklet has been created.';
  voucher_define_password = 'Define password for booklet';
  voucher_for = 'for';
  voucher_no_device = 'There is no device detected';
  voucher_no_permission = 'You have denied access to the camera';
  voucher_only_digits = 'Your password must be only 4 digits';
  voucher_password_changed = 'Your password has been changed';
  voucher_print_error = "You can't print a booklet if it has no beneficiary";
  voucher_print_selection = 'Print selection';
  voucher_print_starting = 'Your voucher download is starting';
  voucher_purchased = 'purchased items';
  voucher_scan_text = 'Scan booklet QR code';
  voucher_select_beneficiary = 'You have to select a beneficiary';
  voucher_select_distribution = 'You have to select a distribution';
  voucher_select_project = 'You have to select a project';
  voucher_sending = 'The data is being sent';
  voucher_step = 'will be assigned to';
  vouchers_booklet = 'Voucher Booklet(s)';

  // Vulnerability
  vulnerability_pregnant = 'pregnant';
  vulnerability_disabled = 'disabled';
  vulnerability_lactating = 'lactating';
  vulnerability_solo_parent = 'solo parent';
  vulnerability_nutrional = 'nutritional issues';

  // User
  user_only_one_country = 'You can select only one country';
  user_password_question = 'Update password on next login';
  user_phone_number = this.profile_user_hint_new_phone_number;
  user_phone_prefix = this.profile_user_hint_new_phone_prefix;

  // Criteria (must be the last thing declared because uses the previous variables)
  criteria_operator = 'Condition';
  criteria_weight = 'Score weight';
  criteria_target = 'Criteria Target';
  currentAdm1 = this.household_location_current_location;
  currentAdm2 = this.household_location_current_location;
  currentAdm3 = this.household_location_current_location;
  currentAdm4 = this.household_location_current_location;
  currentLocation = this.household_location_current_location;
  dateOfBirth = this.beneficiary_date_of_birth;
  residencyStatus = this.beneficiary_residency_status;
  hasNotBeenInDistributionsSince = 'has not been in a distribution since ';
  disabledHeadOfHousehold = this.vulnerability_disabled;
  headOfHouseholdDateOfBirth = this.beneficiary_date_of_birth;
  headOfHouseholdGender = this.gender;
  livelihood = this.household_livelihood;
  foodConsumptionScore = this.household_food_consumption_score;
  copingStrategiesIndex = this.household_coping_strategies_index;
  incomeLevel = this.household_income;
  householdSize = 'Household size';
  locationType = 'Location type';
  campName = this.household_location_camp_name;
  disabled = this.vulnerability_disabled;
  lactating = this.vulnerability_lactating;
  pregnant = this.vulnerability_pregnant;
  soloParent = this.vulnerability_solo_parent;
  nutritionalIssues = this.vulnerability_nutrional;

  // Insituttion
  institution_name = this.log_name;
  institution_contact_name = 'Contact name';
  institution_contact_family_name = 'Contact family name';
  institution_contact_id_type = 'Contact ID type';
  institution_contact_id_number = 'Contact ID number';

  institution_type_school = 'School';
  institution_type_health = 'Hospital/Health Centre';
  institution_type_community_center = 'Community Centre';
  institution_type_government = 'Other Government Building or Structure';
  institution_type_production = 'Warehouse/Factory';
  institution_type_commerce = 'Other Commercial Building';
}
