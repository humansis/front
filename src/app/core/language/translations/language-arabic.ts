import { REFERRALTYPES } from 'src/app/models/constants/referral-types';
import { ADMINLEVELS } from '../adm-constants';
import { Language } from '../language';

/* tslint:disable */
export class Arabic implements Language {
  // GENERAL VARIABLES
  LANGUAGE = 'arabic';
  LANGUAGE_ISO = 'ar';
  missingTranslation = '-- MISSING TRANSLATION --';
  direction = 'rtl';
  // Utils
  administrative_settings = 'الإعدادات الإدارية';
  back = 'إلى الوراء';
  characters = 'حرف';
  done = 'النهاية';
  email = 'البريد الالكتروني';
  export = 'تحميل';
  export_selected = 'تصدير العناصر المحددة';
  false = 'خاطئة';
  general_settings = 'ترتيب';
  home = 'الصفحة الرئيسية';
  import = 'تحميل';
  individual = 'فرد ';
  information = 'معلومات';
  is_required = 'مطلوب';
  name = 'اسم';
  new = 'الجديد';
  next = 'التالى';
  no_data = 'لايوجد بيانات';
  no_data_to_export = 'لا توجد بيانات للتصدير';
  or = 'أو';
  rights = 'الحقوق';
  settings = 'الإعدادات';
  summary = 'ملخص';
  the = 'ال';
  this = 'هذه';
  true = 'صحيح';
  selected = 'المحدد';
  history = this.missingTranslation;
  loading = this.missingTranslation;

  // Models
  beneficiaries = 'المستفيدون';
  beneficiary = 'المستفيد';
  booklet = 'كتيب';
  booklets = 'كتيبات';
  commodity = 'السلع';
  country = 'البلد';
  criteria = 'المعاير';
  activity = this.missingTranslation;
  distribution = 'التوزيع';
  distributions = 'التوزيعات';
  donor = 'المانح';
  donors = 'المانحين';
  general_relief = 'بند';
  head = 'رب الأسرة';
  household = 'الأسرة';
  households = 'الأسرة';
  language = 'اللغة';
  location = 'الموقع';
  logs = 'سجلات';
  national_id = 'الهوية الوطنية';
  phone = 'الهاتف';
  products = 'منتجات';
  product = 'المنتج';
  profile = ' المعطيات الشخصية';
  project = 'المشروع';
  projects = 'المشاريع';
  reports = 'التقارير';
  sector = 'القطاع';
  user = 'المستخدم';
  users = 'المستخدمون';
  vendor = 'بائع';
  vendors = 'الباعة';
  voucher = 'قسائم';
  institution = this.missingTranslation;
  institutions = this.missingTranslation;
  community = this.missingTranslation;
  communities = this.missingTranslation;
  purchases = this.missingTranslation;

  // Actions
  add = 'أضف';
  cancel = 'إلغاء';
  close = 'إغلاق';
  complete = 'اكتمال';
  create = 'إنشاء';
  delete = 'حذف';
  duplicate = 'مكرر';
  remove = 'إزالة';
  save = 'حفظ';
  update = 'تحديث';
  view = 'درس';
  redeem = this.missingTranslation;
  print = this.missingTranslation;

  // Common fields
  address = 'عنوان';
  currency = 'دقة';
  date = 'تاريخ';
  description = 'وصف';
  details = 'تفاصيل';
  distributed = 'وزعت';
  female = 'المرأة';
  gender = 'الجنس';
  id = 'دخول';
  justification = 'مبرر';
  male = 'الرجل';
  notes = 'ملاحظات';
  other = 'آخر';
  password = 'كلمة المرور';
  status = 'الرتبة في الأسرة';
  type = 'النوع';
  unit = 'وحدة';
  username = 'اسم المستخدم';
  value = 'القيمة';
  latitude = this.missingTranslation;
  longitude = this.missingTranslation;
  amount = this.missingTranslation;
  price = this.missingTranslation;
  purchased_by = this.missingTranslation;
  quantity = 'كمية';
  total = this.missingTranslation;
  subsector = this.missingTranslation;
  assistance_type = this.missingTranslation;
  target_type = this.missingTranslation;
  vulnerability = this.missingTranslation;
  group = 'المجموعة';

  // Error
  back_to_homepage = 'العودة إلى الصفحة الرئيسية';
  error_interceptor_msg = '(وقع خطأ: لا يمكن الاستجابة (محتوى فارغ';
  forbidden = 'الصفحة ممنوعة';
  forbidden_message = 'عذرا , ليس لديك إذن للدخول إلى هذه الصفحة';
  not_connected_error = 'الرجاء تسجيل الدخول';
  not_enough_rights = 'لا توجد حقوق كافية لطلب السجلات';
  not_found = 'الصفحة غير موجودة';
  not_found_message = 'عذرا , لا يمكن العثور على هذه الصفحة';

  // Months
  months_short = [
    'يناير',
    'فبراير',
    'مارس',
    'إبريل',
    'مايو',
    'يونيه',
    'يوليه',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  // Address and location
  adm1 = ADMINLEVELS.ar.adm1;
  adm2 = ADMINLEVELS.ar.adm2;
  adm3 = ADMINLEVELS.ar.adm3;
  adm4 = ADMINLEVELS.ar.adm4;
  address_number = 'رقم الشارع ';
  address_postcode = 'عنوان البريدي';
  address_street = 'اسم الشارع ';

  // Add beneficiary
  add_beneficiary_done = 'ملخص معطيات المستفيد قبل اضافته';
  add_beneficiary_title = 'إضافة مستفيد';
  add_beneficiary_code = 'تحويلة';
  add_beneficiary_occupation = 'الاحتلال';
  add_beneficiary_external_support = this.missingTranslation;
  add_beneficiary_project = 'يرجى إضافة هذه الأسرة إلى مشروع واحد أو أكثر';

  // Add distribution
  add_distribution_advanced_option = 'خيارات متقدمة';
  add_distribution_beneficiaries_reached = 'المستفيدون الذين تم الوصول إليهم';
  add_distribution_check_fields =
    'إملء معلومات التوزيع الجديدة  قبل ، بما في ذلك قيمة السلع والقيمة الأدنى يجب أن تكون أعلى من 0.';
  add_distribution_commodities_delivered = 'تم اعطاء';
  add_distribution_created = 'تم انشائه';
  add_distribution_date_inside_project =
    'خطأ أثناء إنشاء توزيع جديد ، يجب أن يكون تاريخ التوزيع الخاص بك داخل تواريخ المشروع';
  add_distribution_date_before_today =
    'خطأ أثناء إنشاء توزيع جديد ، يجب أن يكون تاريخ التوزيع بعد اليوم';
  add_distribution_distributed_commodity = 'السلع الموزعة';
  add_distribution_error_creating = 'خطأ أثناء إنشاء توزيع جديد';
  add_distribution_households_reached = 'الأسر التي تم الوصول إليها';
  add_distribution_missing_commodity = 'سلعة مفقودة';
  add_distribution_missing_date = 'التاريخ مفقود';
  add_distribution_missing_location = 'أضف مقاطعة';
  add_distribution_missing_selection_criteria = 'معيار الاختيار مفقود';
  add_distribution_missing_criteria_group = this.missingTranslation;
  add_distribution_missing_threshold = this.missingTranslation;
  add_distribution_multiple_modalities = 'لا يمكنك إضافة سلع غير موزعة بنفس الطريقة';
  add_distribution_no_beneficiaries =
    'يجب أن يكون عدد المستفيدين / الأسر التي تم الوصول إليها إيجابيًا';
  add_distribution_selection_criteria = 'معيار الاختيار';
  add_distribution_target = this.missingTranslation;
  add_distribution_location_date = this.missingTranslation;
  add_distribution_text_explanation =
    'سيختار النظام فقط المستفيدين / الأسر التي لديها مجموع أعلى من المجموع الادنى ';
  add_distribution_threshold = this.missingTranslation;
  add_distribution_zero = 'عدد الأسر التي تم الوصول إليها أو المبلغ المطلوب توزيعه هو 0';

  add_distribution_very_low = 'منخفظ جدا';
  add_distribution_low = 'منخفض';
  add_distribution_average = 'معدل';
  add_distribution_high = 'متوسط';
  add_distribution_very_high = 'عالي جدا';
  add_distribution_add_group = this.missingTranslation;

  // Add project
  add_project_new_distribution = 'توزيعة جديدة';
  add_project_new_assistance = this.missingTranslation;
  add_project_title = 'مشروع جديد';

  // Beneficiaries
  beneficiary_add_list = 'أضف إلى المشروع';
  beneficiary_add_project =
    'يرجى تحديد المشروع (المشاريع) الذي/الذين  ترغب في إضافته/هم ';
  beneficiary_add_project_title = 'إضافة المستفيدين إلى المشروع';
  beneficiary_added = 'تم إضافة المستفيدين الى المشروع';
  beneficiary_advanced_research = 'بحث متقدم';
  beneficiary_clear_all_research = 'امسح الكل';
  beneficiary_count = 'عدد المستفيدين';
  beneficiary_date_of_birth = 'تاريخ الميلاد';
  beneficiary_en_family_name = '(اسم العائلة (انجليزي';
  beneficiary_en_given_name = '(الاسم المعطى (الإنجليزية';
  beneficiary_en_name = '(الاسم (انجليزي';
  beneficiary_en_parent_name = this.missingTranslation;
  beneficiary_family_name = 'اللقب';
  beneficiary_given_name = 'الاسم ';
  beneficiary_head = 'رب الأسرة';
  beneficiary_id = 'رقم المستفيد';
  beneficiary_justification_added = 'مبرر لإضافة';
  beneficiary_justification_removed = 'مبرر لإزالة';
  beneficiary_local_family_name = '(اسم العائلة (محلي';
  beneficiary_local_given_name = '(الاسم المحدد (محلي';
  beneficiary_local_name = '(الاسم (محلي';
  beneficiary_local_parent_name = this.missingTranslation;
  beneficiary_member = 'فرد من العائلة';
  beneficiary_missing_selected_project = 'يجب أن تختار مشروعاقبل التحميل';
  beneficiary_personnal = 'معلومات شخصية';
  beneficiary_plural = 'هؤلاء المستفيدين';
  beneficiary_referral = 'إحالة';
  beneficiary_referral_comment = 'تعليق';
  beneficiary_referral_question = 'إضافة الإحالة';
  beneficiary_referral_type = 'نوع الإحالة';
  beneficiary_referral_types = REFERRALTYPES.ar;
  beneficiary_res_address = 'عنوان الإقامة';
  beneficiary_residency = 'الإقامة';
  beneficiary_residency_status = 'حالة الإقامة';
  beneficiary_residency_status_idp = 'IDP';
  beneficiary_residency_status_refugee = 'لاجئ';
  beneficiary_residency_status_resident = 'مقيم';
  beneficiary_select_api = 'API اختر';
  beneficiary_selected_project = 'المستفيدين المختارين=';
  beneficiary_update_title = 'تحديث المستفيدين';
  beneficiary_vulnerabilities = 'نقاط الضعف';
  beneficiary_enumerator_name = this.missingTranslation;

  // Benficiary form errors
  beneficiary_error_address_number = 'يجب إدخال رقم العنوان';
  beneficiary_error_birth_date = ' يرجى تحديد تاريخ ميلاد صالح لـ';
  beneficiary_error_gender = ' يجب عليك إدخال الجنس من أجل';
  beneficiary_error_head = 'رب الأسرة';
  beneficiary_error_location_type = 'يجب عليك تحديد نوع الموقع';
  beneficiary_error_project = 'يجب عليك اختيار مشروع واحد على الأقل';
  beneficiary_error_address_postcode = 'يجب إدخال الرمز البريدي للعنوان';
  beneficiary_error_address_street = 'يجب عليك إدخال شارع العنوان';
  beneficiary_error_camp = 'يجب عليك تحديد معسكر أو إنشاء معسكر';
  beneficiary_error_country_code = ' يرجى اختيار رمز البلد لرقم الهاتف ل';
  beneficiary_error_existing_country_code = ' يرجى اختيار رمز البلد الحالي من القائمة ل';
  beneficiary_error_family_name = ' يجب إدخال اسم عائلة محلي لـ';
  beneficiary_error_given_name = ' يجب إدخال اسم محلي معين لـ';
  beneficiary_error_location = 'يجب عليك تحديد موقع';
  beneficiary_error_member = ' عضو';
  beneficiary_error_phone = ' يمكن أن يتكون الهاتف فقط من أرقام لـ';
  beneficiary_error_tent = 'يجب إدخال رقم خيمة';

  // Beneficiary imports
  beneficiary_import_addFile = ' إضافة ملف أو وضع ملف ';
  beneficiary_import_addModal = 'add file';
  beneficiary_import_api = 'تحميل من مصدر بيانات خارجي';
  beneficiary_import_beneficiaries_imported = 'تم إضافة المستفيدين ';
  beneficiary_import_canceled = 'تم إلغاء الاستيراد';
  beneficiary_import_check_fields =
    ' محتوى فارغ  تثبت من أدخال جميع المعطيات و اختيار مشروع ';
  beneficiary_import_conversion_success = 'التحويل بنجاح!';
  beneficiary_import_convert = 'تحويل الملف';
  beneficiary_import_csv = ' تنزيل ملف';
  beneficiary_import_error_file = 'يجب عليك تحديد ملف';
  beneficiary_import_error_importing = 'وقع خطأ عندالتحميل البيانات';
  beneficiary_import_error_selection = 'You must select at least one choice';
  beneficiary_import_file = 'تحميل من ملف';
  beneficiary_import_response = 'استعد لاستعادة الملف';
  beneficiary_import_select_location = 'يجب تحديد الموقع وإضافة ملف قبل التحميل';
  beneficiary_import_select_project = 'يجب أن تختار مشروعا و ملفا قبل التحميل';
  beneficiary_import_title = 'تحميل بيانات المستفيد';
  beneficiary_import_warning =
    'تحذير: إذا كان الملف المقدم غير كامل  ، عليك  إكمال العنصر الناتج حتى ينجح الاستيراد.';

  // Booklets
  booklet_code = 'الشفرة';
  booklet_deactivated = 'إبطال مفعولها';
  booklet_define_password = 'تحديد كلمة المرور';
  booklet_export_codes = 'رموز كتيب التصدير';
  booklet_individual_value = 'القيمة الفردية';
  booklet_number_booklets = 'كمية من الكتيبات لخلق';
  booklet_number_vouchers = 'كمية القسائم';
  booklet_password_pattern = 'يجب أن تتكون كلمة المرور من 4 أرقام';
  booklet_unassigned = 'غير معين';
  booklet_update_password = 'تحديث كلمة المرور';
  booklet_used = 'مستخدم';

  // Activity
  activity_details = this.missingTranslation;
  activity_description = this.missingTranslation;
  activity_households_targeted = this.missingTranslation;
  activity_individuals_targeted = this.missingTranslation;
  activity_validated_title = this.missingTranslation;
  activity_progress = this.missingTranslation;
  activity_amount_completed = this.missingTranslation;

  // Cache
  cache_distribution_added =
    'التوزيع والمستفيدين من المشروع تم  إضافتهم في ذاكرة التخزين المؤقت';
  cache_store_beneficiaries = 'وضع غير متصل بالشبكة';
  cache_stored_beneficiaries = 'تم الحفظ في وضع عدم الاتصال';
  cache_no_distribution =
    'لم يتم تخزين هذا التوزيع في ذاكرة التخزين المؤقت ، ولا يمكنك الحصول عليه خارج خدمة الانترنت. ';

  // Commodities tooltips
  commodity_cash = 'السيولة النقدية';
  commodity_smartcard = this.missingTranslation;
  commodity_in_kind = 'في النوع';
  commodity_modality_cash = 'المال المحمول';
  commodity_modality_qr_voucher = 'قسيمة كود qr';
  commodity_modality_paper_voucher = 'قسيمة ورقة';
  commodity_modality_bread = 'خبز';
  commodity_modality_loan = 'قرض';
  commodity_modality_business_grant = this.missingTranslation;
  commodity_modality_food = 'طعام';
  commodity_modality_wash = 'غسل عدة';
  commodity_modality_agriculture = 'مجموعة الزراعية';
  commodity_modality_rte = 'RTE عدة';
  commodity_modality_shelter = 'مجموعة أدوات المأوى';
  commodity_modality_hygiene = 'طقم النظافة';
  commodity_modality_winterization = this.missingTranslation;
  commodity_modality_dignity = 'مجموعة الكرامة';
  commodity_modality_activity = this.missingTranslation;
  commodity_modality_nfi = this.missingTranslation;
  commodity_kgs = 'كلغ';
  commodity_kit = 'عدة';
  commodity_modality = 'القيد';
  commodity_value = this.quantity;
  commodity_value_voucher = 'القيمة الإجمالية للكتيب';

  // Countries
  country_khm = 'كمبوديا';
  country_syr = 'سوريا';
  country_specific = 'خيار حسب بالبلد';
  country_specific_field = 'الميدان';

  // Dashboard
  dashboard_distribution_map = 'خريطة التوزيع';
  dashboard_current_activities = 'الأنشطة الحالية';
  dashboard_summary_1 = 'تسجيلات المستفيدين';
  dashboard_summary_2 = 'المشاريع الناشطة';
  dashboard_summary_3 = 'العائلات الملتزمة';
  dashboard_summary_4 = ' القيمة الإجمالية للمعملات';
  dashboard_summary_5 = 'الأسر المستهدفة';
  dashboard_summary_6 = 'توزيعات كاملة';

  // Data columns mapping
  data_mapping_title = 'data columns mapping';

  // Data verification
  data_verification_chip_actual = 'المنزل المستهدف';
  data_verification_chip_add = 'للإضافة';
  data_verification_chip_existing = 'موجد';
  data_verification_chip_remove = 'للحذف';
  data_verification_description_duplicates =
    'تعرض لوحة التكرار المستفيدين في الملف الموجودين بالفعل في قاعدة البيانات في منزل آخر. إذا كان المستفيد الحالي ليس رب أسرة ، يمكنك حذف احداهما ، أو حفظ كلاهما كمستفيدين مختلفين إذا كنت متأكداً من أنهم أشخاص مختلفون.';
  data_verification_description_less =
    '.في ما يلي قائمة بالأسر المدرجة  في قاعدة البيانات ولكن مع عدد أكبر  من المستفيدين مقارنة بالملف المستورد. يمكنك التحقق وتحديد الذين تريد استيرادهم في المنزل';
  data_verification_description_more =
    '.في ما يلي قائمة بالأسر المدرجة  في قاعدة البيانات ولكن مع عدد أقل من المستفيدين مقارنة بالملف المستورد. يمكنك التحقق وتحديد الذين تريد استيرادهم في المنزل';
  data_verification_description_typos =
    'تعرض هذه اللوحة أي أخطاء كتابة مشكوك فيها تتعلق بالمستفيدين في ملف: إذا كان المستفيد المستورد يتطابق بشكل وثيق مع آخر موجود بالفعل في قاعدة البيانات ، فسيتم عرضه هنا. يمكنك اختيار إما الحفاظ على القائمة ، وتحديثها مع البيانات المستوردة أو حفظ كلاهما كمستفيدين منفصلين.';
  data_verification_description_end =
    'Modifications will NOT be added to the database until the end of the validation process';
  data_verification_done = 'تم التحقق من بياناتك';
  data_verification_error = 'حدث خطأ في معالجة البيانات';
  data_verification_last_updated = 'Last updated';
  data_verification_snackbar_duplicate_corrected = 'أخطاء التكرار المصححة';
  data_verification_snackbar_duplicate_no_corrected =
    'كل أخطاء التكرار التي لم يتم تصحيحها';
  data_verification_snackbar_less_corrected = 'تم حذف المستفيدين بنجاح';
  data_verification_snackbar_more_corrected = 'تم إضافة المستفيدين بنجاح';
  data_verification_snackbar_typo_corrected = 'أخطاء الكتابة التي تم تصحيحها';
  data_verification_snackbar_typo_no_corrected = 'كل أخطاء الكتابة التي لم يتم تصحيحها';
  data_verification_step_info = 'معلومات خطوة';
  data_verification_step_typos = 'أخطاء في كتابة المعلومات';
  data_verification_step_duplicates = 'التأكد من التكرار';
  data_verification_step_more = 'للإضافة';
  data_verification_step_less = 'للحذف';
  data_verification_title = 'التحقق من صحة البيانات و الموافقة';

  // Distribution
  distribution_accept_changed = 'قبول التغييرات';
  distribution_add_beneficiaries = 'إضافة المستفيدين لهذا التوزيع';
  distribution_add_justification = 'إضافة التبرير';
  distribution_justify_added = 'يرجى تقديم مبرر لإضافة المستفيدين';
  distribution_justify_created = 'يرجى تقديم مبرر لإنشاء المستفيدين';
  distribution_justify_deleted = 'يرجى تقديم مبرر لحذف المستفيدين';
  distribution_beneficiary_added = 'تم أضافة المستفيد';
  distribution_beneficiary_not_added = 'لم بتم أضافة المستفيد';
  distribution_cant_update = 'لا يمكنك تحديث هذا التوزيع.';
  distribution_date = 'تاريخ التوزيع';
  distribution_details_export = 'قائمة التوزيع';
  distribution_details_import = 'تحميل والمقارنة';
  distribution_details_random = 'عينة عشوائية للتحميل';
  distribution_details_sample_size = 'حجم العينة';
  distribution_details_validate = 'التحقق والقفل';
  distribution_distribute = 'تعيين كما وزعت';
  distribution_complete = this.missingTranslation;
  distribution_edit = 'تعديل التوزيع';
  distribution_error_validate = 'التوزيع فارغ ، يرجى ملءه قبل التحقق من صحته';
  assistance_id = this.missingTranslation;
  distribution_last_modification = 'آخر تعديل :';
  distribution_no_beneficiaries =
    'لم تتم إضافة أو إزالة أي مستفيدين. سيتم تحديث أي تغييرات يتم إجراؤها على المستفيدين المستوردين في النظام.';
  distribution_no_random_sample = 'لا يمكن إنشاء عينة عشوائية ...';
  distribution_no_right_transaction =
    'لا يحق لك أن تقوم بالصفقة ، اسأل مدير المشروع الخاص بك أو مدير بلدك';
  distribution_no_right_validate =
    'لا يحق لك التحقق من صحة التوزيع ، اسأل مدير المشروع الخاص بك';
  distribution_no_valid_commodity = 'لم يتم اكتشاف سلعة صالحة لهذا التوزيع';
  distribution_not_modified = 'هذا التوزيع لم يتم تعديله حتى الآن.';
  distribution_not_validated = 'لا يمكن التحقق من صحة التوزيع ';
  distribution_request_logs = 'إرسل سجلات المعاملات عن طريق البريد الإلكتروني';
  distribution_select_beneficiaries = 'يرجى تحديد المستفيدين من المشروع';
  distribution_show_data = 'عرض البيانات على أي حال';
  distribution_succes_completed = 'اكتمل التوزيع بنجاح!';
  distribution_type = 'العالمي';
  distribution_validate = 'التحقق من صحة';
  distribution_validated = ' تم التحقق من صحة التوزيع';
  distribution_validated_title = 'توزيع التحقق من صحة';
  distribution_want_add = 'التي تريد إضافتها إلى ';
  distribution_enrolled_households = 'العائلات الملتزمة';

  // Donor
  donor_fullname = 'اسم المانح';
  donor_shortname = 'الاسم المختصر';

  // Header
  'header_add-beneficiaries' = 'إضافة المستفيد';
  'header_add-distribution' = 'إضافة توزيع';
  'header_admin' = 'الإعدادات الإدارية';
  'header_data-mapping' = this.missingTranslation;
  'header_data-validation' = 'التأكد من صحة البيانات';
  'header_distributions' = 'التوزيع';
  'header_settings' = 'ترتيب';
  'header_update-beneficiary' = 'تحديث المستفيد';
  header_beneficiaries = 'المستفيدون';
  header_disconnect = 'تسجيل الخروج من الحساب';
  header_home = 'الصفحة الرئيسية';
  header_household = this.household;
  header_import = 'تحميل بيانات المستفيد';
  header_imported = 'إستيراد بيانات المستفيدين';
  header_language = this.language;
  header_profile = this.profile;
  header_projects = this.projects;
  header_reports = this.reports;
  header_vouchers = this.voucher;
  header_logs = this.logs;
  header_vendors = this.vendors;

  // Household
  household_coping_strategies_index = 'مؤشر استراتيجيات المواجهة';
  household_food_consumption_score = 'درجة استهلاك الغذاء';
  household_full_address = 'عنوان المنزل بالكامل:';
  household_id = 'معرف الأسرة';
  household_income = 'الدخل';
  household_income_spent_on_food = this.missingTranslation;
  household_info = 'ملخص المعلومات الخاصة بالمنزل  :';
  household_livelihood = 'الوظيفة';
  household_location_address = 'عنوان';
  household_location_camp = 'معسكر';
  household_location_camp_name = 'اسم المخيم';
  household_location_create_camp = 'إنشاء معسكر';
  household_location_current_address = 'العنوان الحالي';
  household_location_current_location = 'الموقع الحالي';
  household_location_question = 'هل موقعك الحالي مختلف عن عنوانك؟';
  household_location_residence = 'إقامة';
  household_location_resident_address = 'عنوان الإقامة';
  household_location_resident_location = 'موقع المقيمين';
  household_location_settlement = 'تسوية مؤقتة';
  household_location_tent = 'خيمة رقم';
  household_location_type = 'نوع الموقع';
  household_location = 'مكان الأسرة=';
  household_members = 'أفراد العائلة';
  household_no_data_offline = 'لا يمكن الوصول إلى هذه البيانات في وضع عدم الاتصال';
  household_sentence = 'الأسرة من';
  household_summary_members = 'أفراد الأسرة';
  household_debt_level = 'مستوى الدين';
  household_support_received_other_org = 'نوع الدعم الخارجي المستلم';
  household_support_date_received = 'تاريخ تلقي الدعم';
  household_support_organization = this.missingTranslation;
  household_assets = 'ممتلكات';
  household_shelter_status = 'حالة المأوى';
  household_status = this.missingTranslation;

  //Vendors
  vendor_redeemed_batches = this.missingTranslation;
  vendor_redemption_summary = this.missingTranslation;
  vendor_transaction_summary = this.missingTranslation;
  vendor_total_number_transactions = this.missingTranslation;
  vendor_total_value_transactions = this.missingTranslation;
  vendor_see_history = this.missingTranslation;
  vendor_unpaid_transactions = this.missingTranslation;
  vendor_unpaid_transaction_value = this.missingTranslation;

  // Import
  import_added = 'تم إضافتها';
  import_back_to_beneficiaries = 'العودة إلى المستفيدين';
  import_back_to_project = 'العودة إلى المشروع';
  import_created = 'تم إنشاؤها';
  import_deleted = 'تم حذفها';
  import_description =
    'قم باستيراد الملف الذي يحتوي على التوزيع المعدّل. سيتم تحديث قاعدة البيانات بقائمة المستفيدين الجديدة لهذا التوزيع عندما تنقر على ""تحديث"" بعد الاستيراد.';
  import_distribution_no_right_update =
    'لا يحق لك تحديث التوزيع ، اسأل مدير المشروع الخاص بك';
  import_distribution_updated = 'تم تحديث التوزيع';
  import_select_new = 'اختر كل جديد';
  import_select_old = 'اختر كل القديم';
  import_updated = 'تم تحديثها';

  // Livelihoods
  livelihood_daily_labour = this.missingTranslation;
  livelihood_farming_agriculture = this.missingTranslation;
  livelihood_farming_livestock = this.missingTranslation;
  livelihood_government = this.missingTranslation;
  livelihood_home_duties = this.missingTranslation;
  livelihood_trading = this.missingTranslation;
  livelihood_own_business = this.missingTranslation;
  livelihood_textiles = this.missingTranslation;

  //Log audit

  // Actions
  log_archive = 'أرشفة';
  log_assign = 'تعيين';
  log_add_beneficiary = 'وأضاف المستفيدون';
  log_add_households = 'الأسر المضافة';
  log_complete = 'منجز';
  log_create = 'خلقت';
  log_deactivate = 'إبطال مفعولها';
  log_deactivate_booklets = this.log_deactivate;
  log_delete = 'تم الحذف';
  log_delete_batch = 'دفعة محذوفة';
  log_edit_general_relief_notes = 'تمت إضافة ملاحظات بند الإغاثة العامة';
  log_import = 'مستورد';
  log_import_beneficiaries_from_api = 'مستورد من Api';
  log_import_beneficiaries_from_syria_file = 'مستورد من ملف سوريا';
  log_import_beneficiary = 'المستفيدون المستوردون';
  log_post_password = 'تغيير كلمة المرور';
  log_scan = 'الممسوحة ضوئيا';
  log_remove_many = 'تم الحذف';
  log_remove_one_beneficiary = 'إزالة مستفيد واحد';
  log_send_verification_email = 'تم إرسال رمز المعاملة';
  log_send_transaction = 'المال المحمول المرسلة';
  log_set_general_relief_items_as_distributed = 'توزيع مواد الإغاثة العامة';
  log_update = 'محدث';
  log_update_f_p = 'تم تعديل اتصال الطرف الثالث';
  log_post_language = 'تغيير اللغة الافتراضية';
  log_update_password = 'تحديث كلمة المرور';
  log_upload_image = 'تم الرفع صورة';
  log_upload_logo = 'تم الرفع شعار';
  log_validate = 'التحقق من صحة';

  // Objects
  log_beneficiary = 'المستفيد';
  log_booklet = 'كتيب';
  log_country = 'تفاصيل البلد';
  log_distribution = 'توزيع';
  log_donor = 'الجهات المانحة';
  log_household = 'منزلي';
  log_organization = 'منظمة';
  log_product = this.product;
  log_project = 'مشروع';
  log_transaction = 'عملية تجارية';
  log_user = 'المستعمل';
  log_vendor = 'بائع';
  log_voucher = 'إيصال';

  //Fields
  log_field_action = 'عمل';
  log_field_country = 'بلد';
  log_field_date = 'تاريخ';
  log_field_details = 'تفاصيل';
  log_field_id = 'Id';
  log_field_object = 'موضوع';
  log_field_status = 'وضع';
  log_field_user = 'المستخدم';

  //Reports
  log_active_users_title = 'معظم المستخدمين النشطين';
  log_code = 'رموز';
  log_family_name = 'اسم العائلة';
  log_field = 'حقل';
  log_old_id = 'المعرف السابق';
  log_name = 'اسم';
  log_not_exists = 'غير موجود بعد الآن';
  log_no_details = 'لا توجد تفاصيل لعرضها';
  log_number_booklets = 'عدد الكتيبات';
  log_number_vouchers = 'عدد القسائم';
  log_requests = 'طلبات';
  log_requests_country_title = 'طلبات لكل بلد';
  log_requests_day_title = 'طلبات في اليوم الواحد';
  log_status_rate_title = 'معدل الوضع';
  log_time = 'الوقت';
  log_users = 'المستخدم';
  log_username = 'اسم المستخدم';
  log_value = 'القيمة';

  //Status
  log_status_200 = 'نجاح';
  log_status_300 = 'إعادة توجيه';
  log_status_400 = 'خطأ';
  log_status_401 = 'غير مصادقة';
  log_status_403 = 'ممنوع';
  log_status_404 = 'غير معثور عليه';

  // Login
  login_bms = 'نظام إدارة المستفيدين';
  login_captcha_invalid = 'كلمة التحقق غير صالحة';
  login_password = 'كلمة المرور';
  login_prompt = 'الرجاء تسجيل الدخول';
  login_title = ' تسجيل الدخول الى الحساب';
  login_title_hid = 'Humanitarian ID تسجيل الدخول مع';
  login_title_google = 'Google تسجيل الدخول مع';
  login_two_fa_invalid_code = 'رمز غير صالح. يرجى المحاولة مرة أخرى';
  login_two_fa_message = 'هذا هو رمز المصادقة Humansis الخاص بك';

  // Map legend
  map_legend_completed = 'منجز';
  map_legend_not_validated = 'ليس متاحا';
  map_legend_validated = 'التحقق من صحة';

  // Modal
  modal_add_multiple_title = 'خلق جديد إبداع جديد';
  modal_add_no_value = 'عليك بادخال قيمة عددية';
  modal_add_title = 'إضافة جديد';
  modal_check_date =
    'الحقول غير الصالح: لا يمكن أن يكون تاريخ الانتهاء  أقدم من تاريخ البدء';
  modal_check_fields = 'تحقق جيدا انك أدخلت جميع المعطيات';
  modal_complete_distribution = 'هل أنت متأكد من أنك تريد إغلاق هذا التوزيع؟';
  modal_delete_beneficiary = 'إزالة المستفيد';
  modal_delete_beneficiary_sentence_2 = ' من هذا التوزيع';
  modal_delete_beneficiary_sentence: ' أنت على وشك الإزالة';
  modal_delete_many = 'هذه العناصر';
  modal_delete_sentence = 'أنت على وشك الحذف';
  modal_delete_sentence_2 = 'هل ترغب في الاستمرار ؟';
  modal_details_title = 'تفاصيل هذا';
  modal_edit_title = 'تحرير هذا';
  modal_failure = 'بالفشل';
  modal_file_extension_error = 'يجب أن يكون امتداد الملف';
  modal_language_actual = 'اللغة الحالية';
  modal_leave = 'المغادرة';
  modal_leave_sentence = 'هل تريد حقا أن تغادر دون حفظ التغييرات';
  modal_no_file = 'لم تقم باختيار ملف';
  modal_not_enough_strong =
    'كلمة المرور ليست قوية بما فيه الكفاية ... الحد الأدنى المطلوب: 8 أحرف ، وحرف صغير واحد ، وحجم واحد ، ورقم 1';
  modal_pending_requests = 'الطلبات المعلقة';
  modal_pick_color = 'اختيار اللون';
  modal_request_error = 'خطأ أثناء إرسال الطلب';
  modal_request_success = 'تم ارساله';
  modal_required = 'مطلوب';
  modal_save_language_as_default = 'قم بتعيين هذه اللغة كلغتي المفضلة.';
  modal_success = 'نجاح';
  modal_valid_email = 'من فضلك أدخل البريد الكتروني الصحيح';
  modal_values_format_error =
    'If you want to set individual values, type numeric values separated by commas (max 5)';
  modal_warning_pending_requests_1 =
    'ابحث عن الطلبات التي قمت بإنشائها خلال وقت عدم الاتصال الخاص بك أدناه ، يمكنك إرسال تلك التي تريد تطبيقها لتعديل قاعدة البيانات.';
  modal_warning_pending_requests_2 =
    'تحذير: ستفشل الطلبات المرتبطة بعنصر أنشأته دون   اتصال بشبكة  الإنترنت !';
  modal_no_pending_requests = 'لا توجد طلبات معلقة';

  // National ID
  national_id_card = 'بطاقة التعريف';
  national_id_family_registry = 'سجل العائلة';
  national_id_license = 'رخصة السائق';
  national_id_number = 'رقم الهوية الوطنية';
  national_id_passport = 'جواز سفر';
  national_id_birth_certificate = 'شهادة الميلاد';
  national_id_type = 'نوع الهوية الوطنية';
  national_id_camp = 'معرف المخيم';
  national_id_social_service = 'بطاقة الخدمة الاجتماعية';

  // Null values
  null_none = 'لا شيء';
  null_not_yet = 'ليس بعد';
  null_not_distributed = 'غير موزعة';
  null_not_yet_defined = 'لم يحدد بعد';

  //Network
  network_access_offline = 'لا يمكن الوصول إلى هذه البيانات في وضع عدم الاتصال';
  network_no_connection = 'لا يوجد اتصال شبكة';
  network_no_connection_reconnect =
    'لا يوجد اتصال بالشبكة ، سيتم إرسال هذه البيانات بمجرد إعادة الاتصال';
  network_manipulate_offline = 'لا يمكن معالجة هذه البيانات في وضع عدم الاتصال';
  network_status_connected = 'أنت الآن متصل بالشبكة';
  network_status_disconnected = 'أنت الآن مفصول عن الشبكة';

  // Number suffixes
  number_suffixes = {
    1: '',
    2: '',
    3: '',
  };
  number_suffix_other = '';

  // Organization
  organization_font = 'الخط لتطبيقه على .pdf';
  organization_footer = '.pdf محتوى تذييل الصفحة';
  organization_logo = 'شعار المنظمة';
  organization_name = 'اسم المنظمة';
  organization_primary = 'اللون الأساسي للمنظمة';
  organization_secondary = 'تنظيم اللون الثانوي';

  // Phone
  phone_no = 'رقم الهاتف';
  phone_prefix = 'تحويلة';
  phone_proxy = 'الوكيل';
  phone_type_landline = 'ارضي';
  phone_type_mobile = 'محمول';

  // Placeholder
  placeholder_one_many = 'اختر واحدة أو أكثر';

  // Product
  product_image = 'صورة';

  // Profile
  profile_change_password = 'تحتاج إلى تغيير كلمة المرور الخاصة بك';
  profile_change_phone = 'غير رقم الهاتف';
  profile_password_changed = 'تم تغيير كلمة السر';
  profile_phone_changed = 'تم تغيير رقم الهاتف بنجاح';
  profile_phone_not_valid = 'رقم الهاتف المقدم غير صالح';
  profile_two_fa_enable = 'ممكن';
  profile_two_fa_enabled = 'تم تمكين المصادقة الثنائية بنجاح';
  profile_two_fa_disable = 'تعطيل';
  profile_two_fa_disabled = 'اثنين عامل المصادقة المعوقين';
  profile_two_fa_information =
    'تضيف المصادقة ثنائية العوامل طبقة إضافية من الأمان إلى حسابك عن طريق طلب أكثر من كلمة مرور لتسجيل الدخول';
  profile_two_fa_title = '2 عامل المصادقة';
  profile_two_fa_warning = 'تحتاج إلى رقم هاتف مسجل لتمكين المصادقة ثنائية الطور';
  profile_user_change_password = 'تغيير كلمة المرور';
  profile_user_hint_new_password = 'كلمة المرور الجديدة';
  profile_user_hint_new_password_again = 'أعد إدخال كلمة المرور الجديدة';
  profile_user_hint_new_phone_number = 'رقم الهاتف';
  profile_user_hint_new_phone_prefix = 'اختصار';
  profile_user_hint_old_password = 'كلمة المرور القديمة';
  profile_user_information = 'معلومات المستخدم';
  profile_password_would_not_be_changed = 'كلمتا المرور متطابقتان ، مع تجاهل التحديث';

  // Project
  project_add = 'الرجاء إضافة مشروع جديد للبدء!';
  project_add_household =
    'الرجاء إضافة بعض المستفيدين أولاً! ثم ستتمكن من إدارة بعض التوزيعات ...';
  project_click = 'انقر فوق' + this.add;
  project_create = 'قم بإنشاء مشروع جديد';
  project_description = 'سوف يمكنك تعديل اسم المشروع حتى توزيعك الأول';
  project_end_date = 'تاريخ الانتهاء';
  project_go_import_beneficiaries = 'استيراد المستفيدين';
  project_name = 'اسم المشروع';
  project_internal_id = 'الرقم الهوية الداخلية';
  project_no_distribution = 'هذا المشروع لا يحتوي على أي توزيع. اصنع اول واحد!';
  project_no_household = 'هذا المشروع لا يحتوي على أي منزل.';
  project_no_projects = 'لا يحتوي هذا البلد حاليًا على أي مشاريع نشطة.';
  project_registered_households = 'العائلات المسجلة';
  project_sectors_name = 'القطاعات';
  project_start_date = 'تاريخ البداية';
  project_value = 'العائلات المستهدفة';

  // Report
  report_active_project = 'مشروع نشط';
  report_active_projects = this.dashboard_summary_2; // 'Active Projects'
  report_apply = 'تطبيق';
  report_country = ' البلد';
  report_country_report = 'الرسوم البيانية حسب البلد';
  report_distributions = this.distributions; // 'distributions'
  report_distribution_report = 'الرسوم البيانية حسب التوزيع';
  report_enrolled_beneficiary = 'المستفيد المسجل';
  report_enrolled_beneficiaries = this.dashboard_summary_3; // 'Enrolled Beneficiaries'
  report_filter_per_month = 'حسب كل شهر';
  report_filter_chose_periode = 'اختر الفترة';
  report_filter_per_quarter = 'حسب كل ربع سنة';
  report_filter_per_year = 'حسب كل سنة ';
  report_frequency_month = ' حسب الشهر';
  report_frequency_quarter = 'حسب ربع السنة ';
  report_frequency_year = ' حسب السنة  ';
  report_from = 'من';
  report_household = this.household; // 'household'
  report_loader = 'التحميل';
  report_period_selected = 'حسب الفترة المختارة';
  report_project = 'المشروع';
  report_project_report = 'الرسوم البيانية حسب المشروع';
  report_select_frequency = 'اختر التكرار';
  report_time = 'الوقت';
  report_to = 'إلى';
  report_total_households = 'مجموع الأسر';
  report_total_number_of_distributions = 'إجمالي عدد التوزيعات';
  report_total_transactions_completed = 'إجمالي المعاملات المنجزة';
  report_transactions_completed = 'المعاملات المنجزة';
  report_upcoming_reporting = 'الرسوم البيانية القادمة';

  report_age_breakdown = 'انهيار العمر';
  report_donors = this.donors; // 'Donors'
  report_household_served = 'خدم الأسر';
  report_modality = this.commodity_modality; // 'Modality'
  report_number_men_and_women = 'عدد الرجال والنساء';
  report_number_of_enrolled_beneficiaries = 'عدد المستفيدين المسجلين';
  report_percentage_of_vulnerabilities_served = 'النسبة المئوية للضعف في الخدمة';
  report_percentage_of_beneficiaries_reached = 'النسبة المئوية للمستفيدين الذين خدموا';
  report_total_distribution_value = 'إجمالي قيمة التوزيع';

  report_disabled = 'معاق';
  report_households = 'الأسر';
  report_lactating = 'المرضعات';
  report_men = 'رجالي';
  report_not_reached = 'لم تصل';
  report_nutritionalissues = 'القضايا الغذائية';
  report_percentage_of_beneficiaries = 'نسبة المستفيدين';
  report_soloparent = 'الوالد منفرد';
  report_vulnerability_served = 'الضعف يخدم';
  report_women = 'نساء1';
  report_missing_distribution = this.missingTranslation;

  // Role
  role_user_admin = 'مسؤول';
  role_user_country_manager = 'مسؤول عن البلد';
  role_user_enumerator = 'العداد';
  role_user_field_officer = 'مسؤول عن الميدان';
  role_user_project_manager = 'مسؤول عن مشروع';
  role_user_project_officer = 'عنصر في مشروع';
  role_user_regional_manager = 'مسؤول عن الإقليم';

  // Sectors tooltips
  sector_cccm = 'معسكر التنسيق والإدارة';
  sector_recovery = 'الانتعاش المبكر';
  sector_education = 'التعليم';
  sector_telecom = 'الاتصالات في حالات الطوارئ';
  sector_food = 'أمن غذائي';
  sector_health = 'الصحة';
  sector_logistics = 'الخدمات اللوجستية';
  sector_nutrition = 'تغذية';
  sector_protection = 'حماية';
  sector_shelter = 'مأوى';
  sector_water = 'مياه الصرف الصحي';
  sector_cash_for_work = 'النقد مقابل العمل';
  sector_tvet = 'التعليم التقني والمهني والتدريب';
  sector_food_kits = 'الغذاء ، ومجموعات التقييم في الوقت الحقيقي';
  sector_nfi = 'البنود غير الغذائية';
  sector_livelihoods = this.missingTranslation;
  sector_mine_action = this.missingTranslation;
  sector_nonspecific = this.missingTranslation;
  sector_multipurpose_cash = this.missingTranslation;
  sector_education_tvet = this.missingTranslation;
  sector_drr_diligence = this.missingTranslation;

  // Settings
  settings_country_specific_options = 'الخيارات حسب البلد';
  settings_created = 'تم انشاء ';
  settings_financial_provider = 'مزود المالية';
  settings_log_button = 'احصل على سجلات المستخدم عن طريق البريد الإلكتروني';
  settings_organization = 'مؤسستي';
  settings_print_starting = 'التحميل بدأ';
  settings_project_exists = 'مشروع بهذا الاسم يوجود بالفعل';

  // Snackbar
  snackbar_change_password_done = '!تم تغيير كلمة المرور';
  snackbar_change_password_fail = '...لا يمكن تغيير كلمة المرور';
  snackbar_change_password_not_possible =
    'يجب أن تكون كلمة المرور أطول من حرف واحد وتتطابق مع الشروط';
  snackbar_created_successfully = 'تم الإنشاء بنجاح!';
  snackbar_error_creating = ': حدث خطأ أثناء الإنشاء ';
  snackbar_error_updating = ': حدث خطأ أثناء التحديث';
  snackbar_invalid_transaction_date = 'انتهت مهلة المعاملة.';
  snackbar_distribution_in_future = this.missingTranslation;
  snackbar_no_data_export = 'لا توجد بيانات للتصدير';
  snackbar_pickup_error = 'من المستحيل حاليًا التحقق من حالة الالتقاط';
  snackbar_saved_language = 'اللغة الافتراضية المحفوظة';
  snackbar_update = 'تحديث متاح';
  snackbar_updated_successfully = ' !تم التحديث بنجاح';
  snackbar_verification_code = 'تم إرسال رمز التحقق في';
  snackbar_verification_code_error = 'لا يمكن إرسال الرمز:';
  snackbar_verification_code_wait_error =
    'تم إرسال الرمز الأخير قبل أقل من 10 ثوانٍ ، يجب عليك الانتظار.';
  snackbar_pdf_export_failed = this.missingTranslation;

  // Table
  table_actions = 'اجراءات';
  table_assign = 'تعيين';
  table_element_deleted = ' تم حذفها';
  table_element_updated = ' تم تحديثها';
  table_filter = 'البحث عن طريق الكلمات الرئيسية';
  table_filtered = 'العناصر التي تمت تصفيتها';
  table_first_page = 'الصفحة الأولى';
  table_items_per_page = 'العناصر في كل صفحة';
  table_last_page = 'الصفحة الاخيرة';
  table_logs_error = 'لا يمكن إرسال السجلات';
  table_logs_success = 'تم إرسال السجلات';
  table_next_page = 'الصفحة التالية';
  table_of_page = 'من';
  table_previous_page = 'الصفحة السابقة';
  table_print = 'طباعة';
  table_selected = 'العناصر المحددة';

  //Time
  time_just_now = 'Just now';

  // Transaction
  transaction_accept_prevention = 'أنا أوافق على هذه الشروط.';
  transaction_again = 'أعد الإرسال';
  transaction_amount_distributed = 'المبلغ الموزع';
  transaction_amount_done = 'الكمية المرسلة';
  transaction_amount_total = 'الكمية الإجمالية';
  transaction_amount_used = 'المبلغ المستخدم';
  transaction_amount_waiting = 'ما زال يتعين إرسالها';
  transaction_confirm = 'تأكيد المعاملة';
  transaction_confirm_button = 'التأكد';
  transaction_email_code = 'تم إرسال بريد إلكتروني يحتوي على رمز التحقق الخاص بك إلى:';
  transaction_id_transaction = 'معرف المعاملة.';
  transaction_info_export = 'إذا لم يكن للتوزيع أي معاملات ، فلن يتم تصدير أي ملف';
  transaction_inProgress = 'المعاملة قيد التقدم ...';
  transaction_message = 'رسالة';
  transaction_no_transaction_sent = 'لا توجد معاملة مكتملة ، لا يمكن تصديرها';
  transaction_paste_code = 'الرجاء وضع الشفرة هنا والنقر على التأكد  لمتابعة العملية:';
  transaction_pickupDate = 'اختر تاريخا';
  transaction_prevention =
    'لا تزال هذه المنصة قيد التطوير وقد لا تكون وظيفة المعاملات النقدية عبر الإنترنت مستقرة تمامًا حتى الآن. ينكر فريق التطوير المسؤولية عن أي أخطاء قد تحدث من حيث فقدان المال. بوضع علامة في المربع أدناه ، فإنك توافق على استخدام النظام بمعرفة حدوده تمامًا وتحمل المسؤولية عن نتائج المعاملة.';
  transaction_progress = 'تقدم  عملية التوزيع:';
  transaction_refresh = 'تحقق من حالة التقاط';
  transaction_state_already_sent = 'أرسلت';
  transaction_state_no_phone = 'لا يوجد هاتف';
  transaction_state_not_sent = 'لم ترسل';
  transaction_state_picked_up = 'التقط';
  transaction_state_sending_failed = 'لقد تعذر الارسال';
  transaction_state_sent = 'أرسلت';
  transaction_transaction = 'عملية تجارية';
  transaction_validate_distribution = 'هل تريد حقًا التحقق من صحة هذا التوزيع؟';
  transaction_validation = 'تأكيد التحقق من الصحة';

  // Tooltip
  tooltip_admin =
    'هذه الصفحة هي المكان الذي يمكنك فيه إدارة المستخدمين والمانحين وتفاصيل مؤسستك';
  tooltip_add_beneficiaries = 'هذه الصفحة هي نموذج لإضافة أسرة جديدة إلى المنصة.';
  tooltip_add_distribution =
    'هذه الصفحة نموذج لإضافة توزيع جديد إلى مشروع. ستستخدم معايير الاختيار لتحديد الأسر أو المستفيدين الذين سيشاركون فيها وإضافة كمية محددة من السلع المراد توزيعها.';
  tooltip_beneficiaries =
    'هذه الصفحة هي حيث يمكن أن ترى جميع الأسر في البلد. إذا كان لديك الحق ، يمكنك إضافة أسر جديدة باستخدام الزر "+" ، وإدارة الأسر وتصفية / بحث في القائمة.';
  tooltip_dashboard =
    'هذه الصفحة هي المكان الذي لديك نظرة عامة حول بعض الأرقام حول البلد ومشاريعه. هناك خريطة لتوضح لك توزيعات البلد وملخص آخرها.';
  tooltip_data = 'هذه الصفحة هي ملخص للأسر التي قمت باستيرادها.';
  tooltip_data_validation =
    'هذه الصفحة هي حيث يمكنك استيراد المستفيدين باستخدام ملف. يجب عليك التحقق من ملفك باتباع الخطوات.';
  tooltip_distributions =
    'هذه الصفحة هي المكان الذي يمكنك أن ترى فيه جميع الأسر المعيشية للتوزيع. إذا كان لديك الحق ، يمكنك إضافة أسر جديدة بها ملف أو عن طريق تحديد في القائمة ، وإدارة الأسر والتحقق من صحة التوزيع.';
  tooltip_import =
    'هذه الصفحة هي المكان الذي يمكنك استيراد المستفيدين منه. يمكنك اختيار استيرادها باستخدام ملف أو API (مصدر البيانات الخارجي) لاستيراد جميع الأسر المعيشية في بلدية معينة.';
  tooltip_profile = 'هذه الصفحة هي المكان الذي يمكنك فيه تغيير كلمة المرور الخاصة بك.';
  tooltip_projects =
    'هذه الصفحة هي المكان الذي يمكنك فيه مشاهدة جميع مشاريع البلاد (فقط تلك التي يمكنك الحق في رؤيتها). إذا كان لديك الحق ، يمكنك إضافة توزيع جديد مع أسر المشروع وإدارة التوزيعات والمعاملات.';
  tooltip_reports =
    'تُستخدم هذه الصفحة للاطلاع على إحصائيات الدولة ، مثل متوسط ​​معاملات المشروعات وعدد التوزيعات ...';
  tooltip_settings =
    'هذه الصفحة هي المكان الذي ستتمكن فيه من إضافة مشروع جديد أو بلد معين أو اتصال طرف ثالث أو منتج أو بائع وتعديلها وحذفها وفقًا لحقوقك';
  tooltip_update_beneficiary = 'هذه الصفحة هي نموذج لتحديث الأسرة المختارة.';
  tooltip_vouchers =
    'هذه الصفحة هي المكان الذي يمكنك فيه إنشاء كتيبات قسائم وتعديلها وتعيينها وطباعتها';

  //Vouchers
  voucher_ask_code = 'الرجاء مطالبة المستفيد بإدخال رمزه المكون من 4 أرقام هنا';
  voucher_assign = 'تعيين قسائم';
  voucher_assignment_cancelled = 'تم إلغاء مهمة القسيمة';
  voucher_assign_title = 'تخصيص كتيب للمستفيد';
  voucher_assigned_success = ' تم تعيين الكتيب إلى';
  voucher_confirm = ' كتيب مخصص ل';
  voucher_created = 'تم إنشاء الكتيب';
  voucher_define_password = 'تحديد كلمة المرور لكتيب';
  voucher_for = 'إلى عن على';
  voucher_no_device = 'لا يوجد جهاز تم اكتشافه';
  voucher_no_permission = 'لقد رفضت الوصول إلى الكاميرا';
  voucher_only_digits = 'يجب أن تتكون كلمة المرور من 4 أرقام فقط';
  voucher_password_changed = 'تم تغيير كلمة السر الخاصة بك';
  voucher_scan_text = 'مسح كتيب رمز الاستجابة السريعة';
  voucher_select_project = 'يجب عليك اختيار مشروع';
  voucher_select_distribution = 'يجب عليك اختيار التوزيع';
  voucher_select_beneficiary = 'عليك أن تختار المستفيد';
  voucher_sending = 'يتم إرسال البيانات';
  voucher_step = 'سيتم تعيين ل';
  voucher_print_selection = 'اختيار الطباعة';
  voucher_print_error = 'لا يمكنك طباعة كتيب إذا لم يكن لديه مستفيد';
  voucher_print_starting = 'بدأ تنزيل القسيمة';
  voucher_purchased = 'البنود التي تم شراؤها';
  vouchers_booklet = 'قسيمة الكتيب';

  // Vulnerability
  vulnerability_pregnant = 'حامل';
  vulnerability_disabled = 'معاق';
  vulnerability_lactating = 'المرضعات';
  vulnerability_solo_parent = 'الوالد منفردا';
  vulnerability_nutrional = 'القضايا الغذائية';
  vulnerability_chronically_ill = 'قيمة المعاملات غير المدفوعة';

  // User
  user_only_one_country = 'يمكنك اختيار دولة واحدة فقط';
  user_password_question = 'تحديث كلمة المرور عند تسجيل الدخول المقبل';
  user_phone_number = this.profile_user_hint_new_phone_number;
  user_phone_prefix = this.profile_user_hint_new_phone_prefix;

  // Criteria (must be the last thing declared because uses the previous variables)
  criteria_operator = 'الشروط';
  criteria_weight = 'وزن النتيجة';
  criteria_target = 'معايير الهدف';
  currentAdm1 = this.household_location_current_location;
  currentAdm2 = this.household_location_current_location;
  currentAdm3 = this.household_location_current_location;
  currentAdm4 = this.household_location_current_location;
  currentLocation = this.household_location_current_location;
  dateOfBirth = this.beneficiary_date_of_birth;
  residencyStatus = this.beneficiary_residency_status;
  hasNotBeenInDistributionsSince = 'لم يكن في التوزيع منذ';
  disabledHeadOfHousehold = this.vulnerability_disabled;
  headOfHouseholdDateOfBirth = this.beneficiary_date_of_birth;
  headOfHouseholdGender = this.gender;
  livelihood = this.household_livelihood;
  foodConsumptionScore = this.household_food_consumption_score;
  copingStrategiesIndex = this.household_coping_strategies_index;
  incomeLevel = this.household_income;
  householdSize = 'حجم الأسرة';
  locationType = 'نوع الموقع';
  campName = this.household_location_camp_name;
  disabled = this.vulnerability_disabled;
  lactating = this.vulnerability_lactating;
  pregnant = this.vulnerability_pregnant;
  soloParent = this.vulnerability_solo_parent;
  nutritionalIssues = this.vulnerability_nutrional;
  chronicallyIll = this.vulnerability_chronically_ill;

  // Insituttion
  institution_name = this.log_name;
  institution_contact_name = this.missingTranslation;
  institution_contact_family_name = this.missingTranslation;
  institution_contact_id_type = this.missingTranslation;
  institution_contact_id_number = this.missingTranslation;

  institution_type_school = this.missingTranslation;
  institution_type_health = this.missingTranslation;
  institution_type_community_center = this.missingTranslation;
  institution_type_government = this.missingTranslation;
  institution_type_production = this.missingTranslation;
  institution_type_commerce = this.missingTranslation;
}
