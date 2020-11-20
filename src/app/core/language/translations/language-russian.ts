import { REFERRALTYPES } from 'src/app/models/constants/referral-types';
import { INCOMELEVELS } from '../../../models/constants/income-levels';
import { ADMINLEVELS } from '../adm-constants';
import { Language } from '../language';
/* tslint:disable */
export class Russian implements Language {
  // GENERAL VARIABLES
  LANGUAGE = 'russian';
  LANGUAGE_ISO = 'ru';
  missingTranslation = '-- MISSING TRANSLATION --';
  direction = 'ltr';

  // Utils
  administrative_settings = 'Административные настройки';
  back = 'Назад';
  characters = 'Символы';
  done = 'Готово';
  email = 'Электронная почта';
  export = 'экспорт';
  export_selected = 'Выделенные элементы экспорта';
  general_settings = 'Конфигурация';
  home = 'главная страница';
  import = 'импорт';
  individual = 'Элемент';
  information = 'Информация';
  is_required = 'требуется';
  name = 'Имя';
  new = 'Новый';
  next = 'Следующий';
  no_data = 'Нет данных';
  no_data_to_export = 'Нет данных для экспорта';
  or = 'или';
  rights = 'Права';
  settings = 'настройки';
  summary = 'итог';
  the = '[артикль]';
  this = 'этот';
  selected = 'выбранный';
  history = 'история';
  loading = 'Загрузка';

  // Models
  beneficiaries = 'бенефициары';
  beneficiary = 'Бенефициар';
  booklet = 'Буклет';
  booklets = 'Буклеты';
  commodity = 'Товар';
  country = 'страна';
  criteria = 'Критерии';
  distribution = 'Выдача';
  distributions = 'Выдачи';
  donor = 'Донор';
  donors = 'Доноры';
  general_relief = 'Пункт';
  head = 'Глава';
  household = 'Домохозяйство';
  households = 'Физическое лицо';
  language = 'язык';
  location = 'Местонахождение';
  national_id = 'номер удостоверения личности государственного образца';
  phone = 'Телефон';
  products = 'Продукты';
  profile = 'Профиль';
  project = 'проект';
  projects = 'проекты';
  reports = 'отчеты';
  sector = 'Сектор';
  user = 'Пользователь';
  users = 'пользователи';
  vendor = 'Продавец';
  vendors = 'продавцы';
  voucher = 'Ваучеры';
  institution = 'учреждение';
  institutions = 'учреждения';
  community = 'сообщество';
  communities = 'сообщества';

  // Actions
  add = 'Добавить';
  cancel = 'Отменить';
  close = 'Закрыть';
  complete = 'Завершить';
  create = 'Создать';
  delete = 'Удалить';
  duplicate = 'Дублировать';
  remove = 'Устранить';
  save = 'Сохранить';
  update = 'Обновить';
  view = 'Вид';
  redeem = 'Выкупить';
  print = 'Распечатать';

  // Common Fields
  address = 'Адрес';
  currency = 'Валюта';
  date = 'дата';
  description = 'описание';
  details = 'Сведения';
  distributed = 'Рассредоточенный';
  female = 'Женский';
  gender = 'Пол';
  id = 'Идентификационный номер';
  justification = 'обоснование';
  male = 'Мужской';
  notes = 'Примечания';
  other = 'Другое';
  password = 'Пароль';
  status = 'Статус';
  type = 'Тип';
  unit = 'Единица измерения';
  username = 'имя пользователя';
  value = 'Стоимость';
  quantity = 'количество';
  total = this.missingTranslation;
  latitude = 'Широта';
  longitude = 'Долгота';
  amount = 'Сумма';
  price = 'Cтоимость';
  purchased_by = 'Приобретено';

  // Error
  back_to_homepage = 'Вернуться на главную страницу';
  error_interceptor_msg = 'Произошла ошибка, запрос не выполнен (пустой ответ).';
  forbidden = 'Запрещенная страница';
  forbidden_message = 'Извините, у вас нет разрешения на доступ к этой странице';
  not_connected_error = 'Пожалуйста, авторизуйтесь';
  not_enough_rights = 'Недостаточно прав для запроса журнала регистрации';
  not_found = 'Страница не найдена';
  not_found_message = 'К сожалению, не удалось найти эту страницу';

  // Months
  months_short = [
    'Янв.',
    'Февр.',
    'Март',
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Декаб.ь',
  ];

  // Address and location
  adm1 = ADMINLEVELS.ru.adm1;
  adm2 = ADMINLEVELS.ru.adm2;
  adm3 = ADMINLEVELS.ru.adm3;
  adm4 = ADMINLEVELS.ru.adm4;
  address_number = 'Номер дома';
  address_postcode = 'Почтовый индекс';
  address_street = 'Название улицы';

  // Add beneficiary
  add_beneficiary_done = 'Итог по домохозяйству для создания';
  add_beneficiary_title = 'добавить бенефициара';
  add_beneficiary_code = 'Расширение';
  add_beneficiary_occupation = 'Профессия';
  add_beneficiary_external_support = 'внешняя помощь';
  add_beneficiary_project =
    'Пожалуйста, добавьте это домашнее хозяйство в один или несколько проектов';

  // Add distribution
  add_distribution_advanced_option = 'Дополнительный параметр';
  add_distribution_beneficiaries_reached = 'Достигнуто бенефициаров';
  add_distribution_check_fields =
    'Заполните новую информацию о распределении ранее, включая товар и минимальное значение оценки отбора больше 0.';
  add_distribution_commodities_delivered = 'должно быть доставлено';
  add_distribution_created = 'был создан';
  add_distribution_date_inside_project =
    'Ошибка при создании нового распределения, ваша дата распределения должна входить в даты проекта';
  add_distribution_date_before_today =
    'Ошибка при создании нового распределения, ваша дата распределения должна быть позже сегодняшнего дня';
  add_distribution_distributed_commodity = 'товар выдачи';
  add_distribution_error_creating = 'Ошибка при создании нового распределения';
  add_distribution_households_reached = 'Достигнуто домохозяйств';
  add_distribution_missing_commodity = 'Товар отсутствует';
  add_distribution_missing_date = 'Дата отсутствует';
  add_distribution_missing_location = 'Добавьте провинцию';
  add_distribution_missing_selection_criteria = 'Критерий отбора отсутствует';
  add_distribution_missing_threshold = this.missingTranslation;
  add_distribution_multiple_modalities =
    'Вы не можете добавлять товары, которые распределяются не одинаково';
  add_distribution_no_beneficiaries =
    'Количество достигнутых бенефициаров / домохозяйств должно быть положительным';
  add_distribution_selection_criteria = 'критерий отбора';
  add_distribution_text_explanation =
    'Система будет выбирать только тех бенефициаров/физических лиц, у которых балл выше минимального балла отбора';
  add_distribution_threshold = 'Минимальный балл отбора';
  add_distribution_zero =
    'Число достигнутых домохозяйств или сумма, подлежащая распределению, равна 0';

  add_distribution_very_low = 'Очень низкий';
  add_distribution_low = 'Низкий';
  add_distribution_average = 'Средний';
  add_distribution_high = 'Высокий';
  add_distribution_very_high = 'Очень высокий';

  // Add project
  add_project_title = 'новый проект';
  add_project_new_distribution = 'новая выдача';

  // Beneficiaries
  beneficiary_add_list = 'Добавить к проекту';
  beneficiary_add_project =
    'Пожалуйста, выберите проект (ы), в который(е) вы хотели бы добавить';
  beneficiary_add_project_title = 'Добавить бенефициаров в проект';
  beneficiary_added = 'Бенефициары добавлены в выбранный проект';
  beneficiary_advanced_research = 'Расширенный поиск';
  beneficiary_clear_all_research = 'Очистить все';
  beneficiary_count = 'Количество бенефициаров';
  beneficiary_date_of_birth = 'Дата рождения';
  beneficiary_en_family_name = 'фамилия (английский язык)';
  beneficiary_en_given_name = 'имя (английский язык)';
  beneficiary_en_name = 'имя (английский язык)';
  beneficiary_en_parent_name = this.missingTranslation;
  beneficiary_family_name = 'Фамилия';
  beneficiary_given_name = 'Имя';
  beneficiary_head = 'Глава домохозяйства';
  beneficiary_id = 'Идентификационный номер бенефициара';
  beneficiary_justification_added = 'Обоснование добавления';
  beneficiary_justification_removed = 'Обоснование удаления';
  beneficiary_local_family_name = 'фамилия (местный язык)';
  beneficiary_local_given_name = 'имя (местный язык)';
  beneficiary_local_name = 'имя (местный язык)';
  beneficiary_local_parent_name = this.missingTranslation;
  beneficiary_member = 'Член';
  beneficiary_missing_selected_project = 'Вы должны выбрать проект перед загрузкой';
  beneficiary_personnal = 'личные данные';
  beneficiary_plural = 'эти бенефициары';
  beneficiary_referral = 'Реферал';
  beneficiary_referral_comment = 'Комментарий';
  beneficiary_referral_question = 'Добавить реферала';
  beneficiary_referral_type = 'Тип реферала';
  beneficiary_referral_types = REFERRALTYPES.ru;
  beneficiary_res_address = 'Адрес резидента';
  beneficiary_residency = 'местожительство';
  beneficiary_residency_status = 'Статус резидента';
  beneficiary_residency_status_idp = 'Вынужденные переселенцы внутри своей страны';
  beneficiary_residency_status_refugee = 'Беженец';
  beneficiary_residency_status_resident = 'Местный житель';
  beneficiary_select_api = 'Выбрать API';
  beneficiary_selected_project = 'выбранные бенефициары:';
  beneficiary_update_title = 'Обновить информацию о бенефициаре';
  beneficiary_vulnerabilities = 'Уязвимости';

  // Beneficiary form errors
  beneficiary_error_address_number = 'Вы должны ввести адресный номер';
  beneficiary_error_birth_date = 'Пожалуйста, выберите действительную дату рождения для ';
  beneficiary_error_gender = 'Вы должны выбрать пол для ';
  beneficiary_error_head = 'глава домохозяйства';
  beneficiary_error_project = 'Вы должны выбрать хотя бы один проект';
  beneficiary_error_address_postcode = 'Вы должны ввести почтовый индекс';
  beneficiary_error_address_street = 'Вы должны ввести название улицы';
  beneficiary_error_country_code = 'Пожалуйста, выберите телефонный код страны для ';
  beneficiary_error_existing_country_code =
    'Пожалуйста, выберите существующий код страны из списка для ';
  beneficiary_error_family_name = 'вы должны ввести фамилию на местном языке ';
  beneficiary_error_given_name = 'Вы должны ввести имя на местном языке ';
  beneficiary_error_location = 'Вы должны выбрать место';
  beneficiary_error_member = ' член';
  beneficiary_error_phone = 'Телефон может состоять только из цифр для ';
  beneficiary_error_camp = 'Вы должны выбрать или создать лагерь';
  beneficiary_error_tent = 'Вы должны ввести номер палатки';
  beneficiary_error_location_type = 'Вы должны выбрать тип местоположения';

  // Beneficiary import
  beneficiary_import_addFile = 'добавить файл или переместить';
  beneficiary_import_addModal = 'добавить файл';
  beneficiary_import_api = 'импорт из внешнего источника данных';
  beneficiary_import_beneficiaries_imported = ' бенефициары вставлены';
  beneficiary_import_canceled = 'импорт отменен';
  beneficiary_import_check_fields =
    'Поле пустое или не заполнено, пожалуйста, заполните все поля и выберите проект';
  beneficiary_import_conversion_success = 'Преобразование успешно!';
  beneficiary_import_convert = 'конвертировать файл';
  beneficiary_import_csv = 'загрузить CSV-шаблон';
  beneficiary_import_error_file = 'Вы должны выбрать файл';
  beneficiary_import_error_importing = 'Ошибка при импорте данных';
  beneficiary_import_error_selection = 'Вы должны выбрать хотя бы один вариант';
  beneficiary_import_file = 'импорт из файла';
  beneficiary_import_response = 'Будьте готовы восстановить файл';
  beneficiary_import_select_location = 'Вы должны выбрать местоположение';
  beneficiary_import_select_project =
    'Вы должны выбрать проект и добавить файл перед загрузкой';
  beneficiary_import_title = 'Импорт данных бенефициара';
  beneficiary_import_warning =
    'Предупреждение: если предоставленный файл является неполным, конечный файл может потребовать завершения для успешного импорта.';

  // Booklets
  booklet_code = 'Код';
  booklet_deactivated = 'дезактивировано';
  booklet_define_password = 'Определить пароль';
  booklet_export_codes = 'Экспорт кодов буклета';
  booklet_individual_value = 'Индивидуальная стоимость';
  booklet_number_booklets = 'Количество буклетов';
  booklet_number_vouchers = 'Количество ваучеров';
  booklet_password_pattern = 'Пароль должен состоять из четырех цифр';
  booklet_unassigned = 'Неназначенный';
  booklet_update_password = 'Обновить пароль';
  booklet_used = 'Использованный';

  // Cache
  cache_distribution_added = 'Распределение и бенефициары проекта добавлены в кэш';
  cache_no_distribution =
    'Это распределение не хранится в кэше, вы не можете получить к нему доступ в автономном режиме';
  cache_store_beneficiaries = 'Автономный режим';
  cache_stored_beneficiaries = 'Сохранено для автономного режима';

  // Commodities tooltips
  commodity_cash = 'кэш';
  commodity_smartcard = 'смарт-карта';
  commodity_in_kind = 'подобным образом';
  commodity_modality_cash = 'Мобильный банк';
  commodity_modality_qr_voucher = 'Ваучер QR кода';
  commodity_modality_paper_voucher = 'Бумажный ваучер';
  commodity_modality_bread = 'Хлеб';
  commodity_modality_loan = 'Ссуда';
  commodity_modality_food = 'Еда';
  commodity_modality_wash = 'Комплект для мытья';
  commodity_modality_agriculture = 'Сельскохозяйственный комплект';
  commodity_modality_rte = 'Готовый к употреблению в пищу набор';
  commodity_modality_shelter = 'Комплект для строительства/ремонта жилья';
  commodity_modality_hygiene = 'Гигиенический комплект';
  commodity_modality_dignity = 'Комплект достоинства';
  commodity_kgs = 'кг';
  commodity_kit = 'комплект';
  commodity_modality = 'Модальность';
  commodity_value = this.quantity;
  commodity_value_voucher = 'Общая стоимость буклета';

  // Countries
  country_khm = 'Камбоджа';
  country_syr = 'Сирия';
  country_specific = 'Выбор страны';
  country_specific_field = 'Поле';

  // Dashboard
  dashboard_distribution_map = 'карта выдачи';
  dashboard_recent_distributions = 'предстоящие рассылки';
  dashboard_summary_1 = 'Всего регистраций';
  dashboard_summary_2 = 'действующие проекты';
  dashboard_summary_3 = 'зарегистрированные бенефициары';
  dashboard_summary_4 = 'общая сумма перевода';
  dashboard_summary_5 = 'обслуживаемые бенефициары';
  dashboard_summary_6 = 'завершенные распределения';

  // Data verification
  data_verification_chip_actual = 'Домохозяйства, имеющие целевую направленность';
  data_verification_chip_add = 'Добавить';
  data_verification_chip_existing = 'Существующий';
  data_verification_chip_remove = 'Удалить';
  data_verification_description_duplicates =
    'Страница проверки дубликатов отображает все возможные дубликаты записей бенефициаров в базе данных. Если существующий бенефициар не является главой домохозяйства, вы можете перезаписать его информацию, проигнорировать изменения или сохранить их как разных бенефициаров, если вы уверены, что они разные люди.';
  data_verification_description_less =
    'Мы нашли записи, которые по вашим указаниям вы хотите удалить из базы данных. Пожалуйста, выберите те, которые вы хотите удалить.';
  data_verification_description_more =
    'Мы нашли записи, которые, кажется, не существуют в базе данных. Пожалуйста, выберите те, которые вы хотите добавить в базу данных проекта.';
  data_verification_description_typos =
    'На этой панели будут отображаться любые подозрительные ошибки при вводе данных, найденные в импортированных данных получателя. Пожалуйста, выберите, следует ли сохранить существующую информацию, обновить ее импортированными данными или сохранить обе как отдельные записи бенефициаров.';
  data_verification_description_end =
    'Изменения НЕ будут добавлены в базу данных до конца процесса проверки';
  data_verification_done = 'Ваши данные проверены';
  data_verification_error = 'Ошибка обработки данных';
  data_verification_last_updated = 'Последнее обновление';
  data_verification_snackbar_duplicate_corrected = 'Дубликаты исправлены';
  data_verification_snackbar_duplicate_no_corrected = 'Не все дубликаты исправлены';
  data_verification_snackbar_less_corrected = 'Бенефициары удалены успешно';
  data_verification_snackbar_more_corrected = 'Бенефициары добавлены успешно';
  data_verification_snackbar_typo_corrected = 'Опечатки исправлены';
  data_verification_snackbar_typo_no_corrected =
    'Не все проблемы с опечатками были исправлены';
  data_verification_step_info = 'Информация о шаге';
  data_verification_step_duplicates = 'Проверьте дубликаты';
  data_verification_step_less = 'Удалить бенефециаров';
  data_verification_step_more = 'Добавить бенефициаров';
  data_verification_step_typos = 'Несоответствия при вводе данных';
  data_verification_title = 'проверка и подтверждение данных';

  // Distribution
  distribution_accept_changed = 'Принять изменения';
  distribution_add_beneficiaries = 'Добавить бенефициаров в это  распределение';
  distribution_add_justification = 'Добавить обоснование';
  distribution_justify_added =
    'Пожалуйста, предоставьте обоснование для добавления бенефициаров';
  distribution_justify_created =
    'Пожалуйста, предоставьте обоснование для создания бенефициаров';
  distribution_justify_deleted =
    'Пожалуйста, предоставьте обоснование удаления бенефициаров';
  distribution_beneficiary_added = 'Бенефициар добавлен';
  distribution_beneficiary_not_added = 'Бенефициар не может быть добавлен';
  distribution_cant_update = 'Вы не можете обновить это распределение.';
  distribution_date = 'Дата выдачи';
  distribution_details_export = 'список выдачи';
  distribution_details_import = 'импортировать и сравнить';
  distribution_details_random = 'экспортировать случайную выборку';
  distribution_details_sample_size = 'Размер партии';
  distribution_details_validate = 'подтвердить и зафиксировать';
  distribution_distribute = 'установить как распределенный';
  distribution_edit = 'Изменить распределение';
  distribution_error_validate =
    'Распределение пусто, пожалуйста, заполните его, чтобы подтвердить';
  distribution_id = 'Идентификационный номер распределения';
  distribution_last_modification = 'Последнее изменение: ';
  distribution_no_beneficiaries =
    'Бенефициары не были добавлены или удалены. Любые изменения, внесенные в импортированных бенефициаров, будут обновляться в системе.';
  distribution_no_random_sample = 'Случайная выборка не может быть сгенерирована...';
  distribution_no_right_transaction =
    'Вы не имеете права совершать транзакцию, запросите информацию у  менеджера проекта или главы представительства';
  distribution_no_right_validate =
    'Вы не имеете права проверять распределение, запросите информацию у  менеджера проекта';
  distribution_no_valid_commodity =
    'Не найден действительный товар для этого распределения.';
  distribution_not_modified = 'Это распределение до сих пор не было изменено.';
  distribution_not_validated = 'Распределение не может быть проверено';
  distribution_request_logs = 'Отправить журналы транзакций по электронной почте';
  distribution_select_beneficiaries = 'Пожалуйста, выберите бенефициаров из проекта';
  distribution_show_data = 'Все равно показывать данные';
  distribution_succes_completed = 'Распространение успешно завершено!';
  distribution_type = 'Цель';
  distribution_validate = 'Утверждать';
  distribution_validated = 'Распределение утверждено';
  distribution_validated_title = 'Утвержденное распределение';
  distribution_want_add = 'что вы хотите добавить в ';
  // Data columns mapping
  data_mapping_title = 'data columns mapping';

  // Donor
  donor_fullname = 'Имя донора';
  donor_shortname = 'Короткое имя';

  // Header
  'header_add-beneficiaries' = 'Добавить бенефициаров';
  'header_add-distribution' = 'Добавить выдачу';
  'header_admin' = 'Административные настройки';
  'header_data-mapping' = this.missingTranslation;
  'header_data-validation' = 'Подтверждение данных';
  'header_distributions' = 'выдача';
  'header_settings' = 'Конфигурация';
  'header_update-beneficiary' = 'Обновить информацию о бенефициаре';
  header_beneficiaries = 'бенефициары';
  header_disconnect = 'выйти';
  header_home = 'главная страница';
  header_household = this.household;
  header_import = 'Импорт данных бенефициара';
  header_imported = 'Импортированные данные бенефициаров';
  header_language = this.language;
  header_profile = this.profile;
  header_projects = this.projects;
  header_reports = this.reports;
  header_vouchers = this.voucher;
  header_vendors = this.vendors;

  // Household
  household_coping_strategies_index = 'Индекс стратегии преодоления';
  household_food_consumption_score = 'Оценка потребления пищи';
  household_full_address = 'Полный адрес домохозяйства';
  household_id = 'Полный адрес домохозяйства';
  household_income = 'уровень доходов';
  household_income_level = INCOMELEVELS.russian;
  household_info = 'Краткая информация о домохозяйстве';
  household_livelihood = 'Средства к существованию';
  household_location = 'Расположение домохозяйства';
  household_location_address = 'Адрес';
  household_location_camp = 'Лагерь';
  household_location_camp_name = 'Наименование лагеря';
  household_location_create_camp = 'Создать лагерь';
  household_location_current_address = 'Текущий адрес';
  household_location_current_location = 'Текущее местоположение';
  household_location_question =
    'Ваше текущее местоположение отличается от вашего адреса?';
  household_location_residence = 'Место проживания';
  household_location_resident_address = 'Адрес места проживания';
  household_location_resident_location = 'Расположение местожительства';
  household_location_settlement = 'Временное поселение';
  household_location_tent = 'Номер палатки';
  household_location_type = 'Тип расположения';
  household_members = 'Члены';
  household_no_data_offline = 'Эти данные не могут быть доступны в автономном режиме';
  household_sentence = 'Домохозяйство ';
  household_summary_members = 'Члены домохозяйства';
  household_debt_level = 'Уровень задолженности';
  household_support_received_other_org = 'Помощь полученная другими организациями';
  household_support_date_received = 'Дата получения помощи';
  household_support_organization = 'Организация по оказанию помощи';
  household_assets = 'Активы';
  household_shelter_status = 'Статус жилья';
  household_status = 'Положение домохозяйств';

  //Vendors
  vendor_redeemed_batches = 'Выкупленные партии';
  vendor_redemption_summary = 'Сводка погашений поставщика';
  vendor_transaction_summary = 'Сводка транзакций поставщика';
  vendor_total_number_transactions = 'Итоговое кол-во транзакций';
  vendor_total_value_transactions = 'Итоговая сумма транзакций';
  vendor_see_history = 'Посмотреть историю';
  vendor_unpaid_transactions = 'Неоплаченые транзакции';
  vendor_unpaid_transaction_value = 'Сумма неоплаченных транзакций';

  // Import
  import_added = 'Добавлено  существующими бенефициарами';
  import_back_to_beneficiaries = 'Назад к Бенефициарам';
  import_back_to_project = 'Назад к проекту';
  import_created = 'Вновь созданный';
  import_deleted = 'Будет удалено';
  import_description =
    'Импортируйте файл, содержащий измененное распределение. База данных будет обновлена новым списком бенефициаров для этого распределения, когда после импорта вы нажмете кнопку «Обновить».';
  import_distribution_no_right_update =
    'Вы не имеете права изменять распределение, запросите информацию у  менеджера проекта';
  import_distribution_updated = 'Распределение обновлено';
  import_select_new = 'Выберите все новое';
  import_select_old = 'Выберите все старое';
  import_updated = 'Будет обновлено';

  // Livelihoods
  livelihood_daily_labour = this.missingTranslation;
  livelihood_farming_agriculture = this.missingTranslation;
  livelihood_farming_livestock = this.missingTranslation;
  livelihood_government = this.missingTranslation;
  livelihood_home_duties = this.missingTranslation;
  livelihood_trading = this.missingTranslation;
  livelihood_own_business = this.missingTranslation;
  livelihood_textiles = this.missingTranslation;

  // Login
  login_bms = 'Система управления бенефициарами';
  login_captcha_invalid = 'Капча недействительна';
  login_forgot_password = 'Забыли пароль?';
  login_password = '*********';
  login_prompt = 'Авторизуйтесь, пожалуйста';
  login_title = 'Вход';

  // Map legend
  map_legend_completed = 'завершено';
  map_legend_not_validated = 'не подтверждено';
  map_legend_validated = 'подтверждено';

  // Modal
  modal_add_multiple_title = 'Создать новое';
  modal_add_no_value = 'Вам необходимо ввести значение';
  modal_add_title = 'Создать новое';
  modal_check_date = 'Неверные поля = дата начала не может быть позже даты окончания';
  modal_check_fields = 'Неверные поля = проверьте, заполнили ли вы все поля';
  modal_delete_beneficiary = 'Удалить бенефециара';
  modal_delete_beneficiary_sentence = 'Вы собираетесь удалить ';
  modal_delete_beneficiary_sentence_2 = 'от этого распределения';
  modal_delete_many = 'эти элементы';
  modal_complete_distribution = 'Вы уверены, что хотите закрыть это распределение??';
  modal_delete_sentence = 'Вы собираетесь удалить ';
  modal_delete_sentence_2 = 'Хотите ли вы продолжить? ';
  modal_details_title = 'Подробности этого';
  modal_edit_title = 'Редактировать это';
  modal_failure = 'Отказ';
  modal_file_extension_error = 'Расширение файла должно быть ';
  modal_language_actual = 'Текущий язык';
  modal_leave = 'Выход';
  modal_leave_sentence = 'Вы действительно хотите выйти, не сохранив изменения?';
  modal_no_file = 'Файл не выбран';
  modal_not_enough_strong =
    'Пароль недостаточно надежен ... Требуется минимум = 8 символов, 1 строчная буква, 1 заглавная буква, 1 цифра';
  modal_pending_requests = 'Ожидающие запросы';
  modal_pick_color = 'Выберите цвет';
  modal_request_error = 'Ошибка при отправке запроса: ';
  modal_request_success = 'послано';
  modal_required = 'необходимый';
  modal_save_language_as_default = 'Установите это в качестве моего языка по умолчанию';
  modal_success = 'Удача';
  modal_valid_email = 'Пожалуйста, введите действительный адрес электронной почты';
  modal_values_format_error =
    'Если вы хотите установить отдельные значения, введите числовые значения, разделенные запятыми (не более 5)';
  modal_warning_pending_requests_1 =
    'Найдите ниже запросы, которые вы создали в автономном режиме, вы можете отправить нужные, чтобы изменить базу данных..';
  modal_warning_pending_requests_2 =
    'ПРЕДУПРЕЖДЕНИЕ = Запросы, связанные с элементом, который вы создали в автономном режиме, не будут выполнены!';
  modal_no_pending_requests = 'Нет ожидающих запросов';

  // National ID
  national_id_card = 'Национальный идентификационный номер';
  national_id_family_registry = 'Семейное положение';
  national_id_license = 'Водительское удостоверение';
  national_id_number = 'Идентификационный номер';
  national_id_passport = 'Паспорт';
  national_id_birth_certificate = 'Свидетельство о рождении';
  national_id_type = 'Тип национального идентификационного номера';
  national_id_camp = 'идентификационный номер лагеря';
  national_id_social_service = 'Карта социального страхования';

  //Network
  network_access_offline = 'Эти данные не могут быть доступны в автономном режиме:';
  network_no_connection = 'Нет подключения к сети';
  network_no_connection_reconnect =
    'Нет подключения к сети, эти данные будут отправлены после повторного подключения';
  network_manipulate_offline = 'Эти данные не могут быть изменены в автономном режиме:';
  network_status_connected = 'Теперь вы подключены к сети';
  network_status_disconnected = 'Вы сейчас отключены от сети';

  // Null values
  null_none = 'Ничего';
  null_not_yet = 'еще нет';
  null_not_distributed = 'не распределены';
  null_not_yet_defined = 'еще не определено';

  // Number suffixes
  number_suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
  };
  number_suffix_other = 'th';

  // Organization
  organization_font = 'шрифт для применения в PDF';
  organization_footer = 'содержание нижнего колонтитула pdf';
  organization_logo = 'логотип организации';
  organization_name = 'наименование организации';
  organization_primary = 'основной цвет организации';
  organization_secondary = 'дополнительный цвет организации';

  // Phone
  phone_no = 'Номер телефона';
  phone_prefix = 'Расширение';
  phone_proxy = 'Прокси';
  phone_type_landline = 'Стационарный';
  phone_type_mobile = 'Мобильный';

  // Placeholder
  placeholder_one_many = 'Выберите один или несколько';

  // Product
  product_image = 'Изображение';

  // Profile
  profile_change_password = 'Вы должны изменить пароль';
  profile_password_changed = 'Пароль изменен';
  profile_password_would_not_be_changed = 'Два пароля идентичны, игнорируя обновление';
  profile_user_change_password = 'Сменить пароль';
  profile_user_hint_new_password = 'Новый пароль';
  profile_user_hint_new_password_again = 'Повторно введите новый пароль';
  profile_user_hint_old_password = 'Предыдущий пароль';
  profile_user_information = 'Информация о пользователе';

  // Project
  project_add = 'Пожалуйста, добавьте новый проект, чтобы начать!';
  project_add_household =
    'Пожалуйста, добавьте сначала несколько бенефициаров! Тогда вы сможете управлять некоторыми распределениями ...';
  project_click = 'Нажмите ' + this.add;
  project_create = 'Создать новый проект';
  project_description =
    'Вы сможете изменять название проекта до вашего первого.распределения';
  project_end_date = 'Дата окончания';
  project_go_import_beneficiaries = 'Импорт бенефициаров';
  project_name = 'Название проекта';
  project_internal_id = 'Внутренний ID';
  project_no_distribution =
    'Этот проект не содержит распределений. Создайте свое первое!';
  project_no_household = 'Этот проект не содержит домохозяйств.';
  project_no_projects = 'В этой стране в настоящее время нет активных проектов.';
  project_number_of_households = 'Количество домохозяйств';
  project_sectors_name = 'Сектора';
  project_start_date = 'Дата начала';
  project_value = 'Всего целевых бенефициаров';

  // Report
  report_active_project = 'активный проект';
  report_active_projects = this.dashboard_summary_2; // 'Active Projects'
  report_apply = 'применить';
  report_country = 'Страна';
  report_country_report = 'отчет по стране';
  report_distributions = this.distributions; // 'distributions'
  report_distribution_report = 'отчет о распределении';
  report_enrolled_beneficiary = 'зарегистрированный бенефициар';
  report_enrolled_beneficiaries = this.dashboard_summary_3; // 'Enrolled Beneficiaries'
  report_filter_chose_periode = 'выберите период';
  report_filter_per_month = 'помесячно';
  report_filter_per_quarter = 'поквартально';
  report_filter_per_year = 'ежегодно';
  report_frequency_month = 'Месяц';
  report_frequency_quarter = 'Квартал';
  report_frequency_year = 'Год';
  report_from = 'от';
  report_household = this.household; // 'household'
  report_loader = 'Загрузчик';
  report_period_selected = 'Выбранный период';
  report_project = 'Проект';
  report_project_report = 'отчет о проекте';
  report_select_frequency = 'Выберите частоту';
  report_time = 'Время';
  report_to = 'до';
  report_total_households = 'Всего домохозяйств';
  report_total_number_of_distributions = 'Общее количество распределений';
  report_total_transactions_completed = 'Всего выполненных транзакций';
  report_transactions_completed = 'транзакции завершены';
  report_upcoming_reporting = 'Предстоящий отчет';

  report_age_breakdown = 'Возрастная разбивка';
  report_donors = this.donors; // 'Donors'
  report_household_served = 'Домохозяйства обслуживаются';
  report_modality = this.commodity_modality; // 'Modality'
  report_number_men_and_women = 'Количество мужчин и женщин';
  report_number_of_enrolled_beneficiaries = 'Количество зарегистрированных бенефициаров';
  report_percentage_of_vulnerabilities_served =
    'Процент обслуженных уязвимостей в защите информационных систем';
  report_percentage_of_beneficiaries_reached = 'Процент достигших бенефициаров';
  report_total_distribution_value = 'Общая стоимость распределения';

  report_disabled = 'Неработоспособный';
  report_households = 'Домовладения';
  report_lactating = 'Кормящие';
  report_men = 'Мужчины';
  report_not_reached = 'Не достигнуто';
  report_nutritionalissues = 'Проблемы питания';
  report_percentage_of_beneficiaries = 'Процент бенефициаров';
  report_soloparent = 'Одинокий родитель';
  report_vulnerability_served = 'обслуженные уязвимости в защите информационных систем';
  report_women = 'Женщины';
  report_missing_distribution = 'Вы не выбрали распределение!';

  // Role
  role_user_admin = 'Администратор';
  role_user_country_manager = 'Глава миссии';
  role_user_enumerator = 'Счетчик';
  role_user_field_officer = 'Старший руководитель';
  role_user_project_manager = 'Менеджер по управлению проектами';
  role_user_project_officer = 'Руководитель проекта';
  role_user_regional_manager = 'Региональный менеджер';

  // Sectors tooltips
  sector_cccm = 'Координация и управление лагерем';
  sector_recovery = 'Раннее восстановление';
  sector_education = 'Образование';
  sector_telecom = 'Экстренная связь';
  sector_food = 'Продовольственная безопасность';
  sector_health = 'Здоровье';
  sector_logistics = 'Логистика';
  sector_nutrition = 'Питание';
  sector_protection = 'Защита';
  sector_shelter = 'Укрытие';
  sector_water = 'Мытье';
  sector_cash_for_work = 'Оплата за труд';
  sector_tvet = 'TVET';
  sector_food_kits = 'Еда, RTE комплекты';
  sector_nfi = 'NFIs';
  sector_livelihoods = this.missingTranslation;
  sector_mine_action = this.missingTranslation;
  sector_nonspecific = this.missingTranslation;
  sector_multipurpose_cash = this.missingTranslation;
  sector_education_tvet = this.missingTranslation;
  sector_drr_diligence = this.missingTranslation;

  // Settings
  settings_country_specific_options = 'дополнительные варианты для страны';
  settings_created = ' создано';
  settings_financial_provider = 'Сторонние подключения';
  settings_log_button = 'Получить журнал  пользователей по электронной почте';
  settings_organization = 'Моя организация';
  settings_print_starting = 'Ваша загрузка начинается';
  settings_project_exists = 'Проект с таким названием уже существует';

  // Snackbar
  snackbar_change_password_done = 'Пароль изменен !';
  snackbar_change_password_fail = 'Не удалось сменить пароль ...';
  snackbar_change_password_not_possible =
    'Пароль должен содержать более 1 символа и совпадать с повторной проверкой';
  snackbar_created_successfully = 'Создано успешно';
  snackbar_error_creating = 'Ошибка при создании ';
  snackbar_error_updating = 'Ошибка при обновлении ';
  snackbar_invalid_transaction_date = 'Срок транзакции истек';
  snackbar_no_data_export = 'Нет данных для экспорта';
  snackbar_pickup_error = 'В настоящее время невозможно проверить статус получения';
  snackbar_saved_language = 'Язык по умолчанию сохранен';
  snackbar_update = 'Доступно обновление';
  snackbar_updated_successfully = 'Успешно Обновлено';
  snackbar_verification_code = 'Код подтверждения отправлен на';
  snackbar_verification_code_error = 'Не удалось отправить код:';
  snackbar_verification_code_wait_error =
    'Последний код был отправлен менее 10 секунд назад, вы должны подождать';
  snackbar_pdf_export_failed =
    'Невозможно экспортировать файл PDF, потому что на веб-странице нет графиков.';

  // Table
  table_actions = 'Действия';
  table_assign = 'Назначить';
  table_element_deleted = ' удалено';
  table_element_updated = ' обновлено';
  table_filter = 'Поиск по ключевым словам';
  table_filtered = 'Позиции отфильтрованы';
  table_first_page = 'Первая страница';
  table_items_per_page = 'Пункты на странице';
  table_last_page = 'Последняя страница';
  table_logs_error = 'Журнал пользователя не может быть отправлен';
  table_logs_success = 'Журнал пользователя отправлен';
  table_next_page = 'Следующая страница';
  table_of_page = 'из';
  table_previous_page = 'Предыдущая страница';
  table_print = 'Печать';
  table_selected = 'Пункты выбраны';

  // Time
  time_just_now = 'Прямо сейчас';

  // Transaction
  transaction_accept_prevention = 'Я согласен с этими условиями.';
  transaction_again = 'Пошлите еще раз';
  transaction_amount_distributed = 'Распределенная сумма';
  transaction_amount_done = 'Отправленное количество';
  transaction_amount_total = 'Общее количество';
  transaction_amount_used = 'Использоанная сумма';
  transaction_amount_waiting = 'Сумма взята';
  transaction_confirm = 'Подтвердите транзакцию';
  transaction_confirm_button = 'Подтвердить';
  transaction_email_code = 'Письмо с кодом проверки было отправлено на адрес:';
  transaction_id_transaction = 'Идентификационный номер транзакции';
  transaction_info_export =
    'Если распределение не содержит транзакций, файл не будет экспортирован ",Транзакция выполняется...';
  transaction_inProgress = 'Транзакция в процессе...';
  transaction_message = 'Сообщение';
  transaction_no_transaction_sent =
    'Нет завершенной транзакции, не может быть экспортирован';
  transaction_paste_code =
    'Пожалуйста, вставьте код здесь и нажмите «Подтвердить», чтобы продолжить транзакцию ';
  transaction_pickupDate = 'Подобрать дату';
  transaction_prevention =
    'Эта платформа все еще находится в стадии разработки, и функциональность онлайн-транзакций с наличными средствами может быть еще не полностью стабильной. Команда разработчиков не несет ответственности за любые ошибки, которые могут возникнуть при потере денег. Установив флажок ниже, вы соглашаетесь использовать систему, хорошо зная ее ограничения, и берете на себя ответственность за результаты транзакции..';
  transaction_progress = 'прогресс распределения товаров:';
  transaction_refresh = 'Проверьте статус получения';
  transaction_state_already_sent = 'Послано'; // Means sent during a previous transaction (before loading the page)
  transaction_state_no_phone = 'Нет телефона';
  transaction_state_not_sent = 'Не послано';
  transaction_state_picked_up = 'Подхвачено';
  transaction_state_sending_failed = 'Отправка не удалась';
  transaction_state_sent = 'послано'; // Means sent during the current transaction (after loading the page)
  transaction_transaction = 'Старт транзакции';
  transaction_validate_distribution =
    'Вы действительно хотите проверить это распределение?';
  transaction_validation = 'Подтвердите валидацию';

  // Tooltip
  tooltip_admin =
    'На этой странице вы можете управлять пользователями, донорами и особенностями вашей организации';
  tooltip_add_beneficiaries =
    'Эта страница является формой для добавления нового домохозяйства на платформу.';
  tooltip_add_distribution =
    'Эта страница является формой для добавления нового распределения в проект. Вы будете использовать критерии отбора, чтобы определить домохозяйства или бенефициаров, которые будут участвовать в нем, и добавить определенное количество товаров, подлежащих распределению';
  tooltip_beneficiaries =
    'На этой странице вы можете увидеть все домохозяйства в стране. Если у вас есть право, вы можете добавлять новые домохозяйства с помощью кнопки \\ "+ \\", управлять домохозяйствами и фильтровать / проводить их в списке.';
  tooltip_dashboard =
    'На этой странице у вас есть глобальное представление о некоторых цифрах в стране и ее проектах. Существует карта, чтобы показать вам распределения в стране и сводку последних.';
  tooltip_data =
    'На этой странице представлена сводная информация о домохозяйствах, которые вы импортировали.';
  tooltip_data_validation =
    'На этой странице вы можете импортировать бенефициаров, используя файл. Вы должны подтвердить свой файл, следуя инструкциям.';
  tooltip_distributions =
    'На этой странице вы можете увидеть домохозяйства всех распределений. Если у вас есть право, вы можете добавить новые домохозяйства с помощью файла или, выбрав в списке, управлять домохозяйствами и подтвердить распределение.';
  tooltip_import =
    'На этой странице вы можете импортировать бенефициаров. Вы можете импортировать их, используя файл или API (внешний источник данных), чтобы импортировать все домохозяйства определенной общины.';
  tooltip_profile = 'На этой странице вы можете изменить свой пароль.';
  tooltip_projects =
    'На этой странице вы можете увидеть все проекты страны (только те, которые вы имеете право видеть). Если у вас есть право, вы можете добавить новое распределение  с домашними хозяйствами проекта, управлять распределениями и транзакциями.';
  tooltip_reports =
    'Эта страница используется для просмотра статистики по стране, такой как средние транзакции по проектам, количество распределений...';
  tooltip_settings =
    'На этой странице вы сможете добавить новый проект, конкретную страну, стороннее подключение, продукт, поставщика, отредактировать и удалить их в соответствии с вашими правами.';
  tooltip_update_beneficiary =
    'Эта страница является формой для обновления выбранного домохозяйства.';
  tooltip_vouchers =
    'На этой странице вы можете создавать, редактировать, назначать и распечатывать буклеты с ваучерами.';

  //Vouchers
  voucher_ask_code = 'Пожалуйста, попросите получателя ввести его 4-значный код здесь';
  voucher_assign = 'Назначить ваучеры';
  voucher_assignment_cancelled = 'Назначение ваучера отменено';
  voucher_assign_title = 'Назначить буклет бенефициару';
  voucher_assigned_success = 'Буклет был назначен ';
  voucher_confirm = 'Буклет назначен';
  voucher_created = 'Буклет был создан.';
  voucher_define_password = 'Определить пароль для буклета';
  voucher_for = 'для';
  voucher_no_device = 'Устройство не обнаружено';
  voucher_no_permission = 'Вы отказали в доступе к камере';
  voucher_only_digits = 'Ваш пароль должен состоять только из 4 цифр';
  voucher_password_changed = 'Ваш пароль должен быть изменен';
  voucher_print_error = 'Вы не можете распечатать буклет, если у него нет бенефициара';
  voucher_print_selection = 'Выбор печати';
  voucher_print_starting = 'Загрузка вашего ваучера начинается';
  voucher_purchased = 'купленные позиции';
  voucher_scan_text = 'Сканируйте QR код буклета';
  voucher_select_beneficiary = 'Вы должны выбрать бенефициара';
  voucher_select_distribution = 'Вы должны выбрать  распределение';
  voucher_select_project = 'Вы должны выбрать  проект';
  voucher_sending = 'Данные отправляются';
  voucher_step = 'Будет добавлено';
  vouchers_booklet = 'Буклет(ы) ваучера';

  // Vulnerability
  vulnerability_pregnant = 'беременная';
  vulnerability_disabled = 'неработоспособный';
  vulnerability_lactating = 'кормящая';
  vulnerability_solo_parent = 'одинокий родитель';
  vulnerability_nutrional = 'проблемы питания';

  // User
  user_only_one_country = 'Вы можете выбрать только одну страну';
  user_password_question = 'Обновить пароль при следующем входе';

  // Criteria (must be the last thing declared because uses the previous variables)
  criteria_operator = 'Условие';
  criteria_weight = 'Весомость балла';
  criteria_target = 'Цель критерия';
  currentAdm1 = this.household_location_current_location;
  currentAdm2 = this.household_location_current_location;
  currentAdm3 = this.household_location_current_location;
  currentAdm4 = this.household_location_current_location;
  currentLocation = this.household_location_current_location;
  dateOfBirth = this.beneficiary_date_of_birth;
  residencyStatus = this.beneficiary_residency_status;
  hasNotBeenInDistributionsSince = 'не был в распределении с ';
  disabledHeadOfHousehold = this.vulnerability_disabled;
  headOfHouseholdDateOfBirth = this.beneficiary_date_of_birth;
  headOfHouseholdGender = this.gender;
  livelihood = this.household_livelihood;
  foodConsumptionScore = this.household_food_consumption_score;
  copingStrategiesIndex = this.household_coping_strategies_index;
  incomeLevel = this.household_income;
  householdSize = 'Размер домашнего хозяйства';
  locationType = 'Тип местоположения';
  campName = this.household_location_camp_name;
  disabled = this.vulnerability_disabled;
  lactating = this.vulnerability_lactating;
  pregnant = this.vulnerability_pregnant;
  soloParent = this.vulnerability_solo_parent;
  nutritionalIssues = this.vulnerability_nutrional;
  false = 'Ложный';
  header_logs = 'Журнал пользователя';
  log_active_users_title = 'Наиболее активные пользователи';
  log_add_beneficiary = 'Бенефициары добавлены';
  log_add_households = 'Домохозяйства добавлены';
  log_archive = 'Заархивировано';
  log_assign = 'Назначено';
  log_beneficiary = 'Бенефициар';
  log_booklet = 'Буклет';
  log_code = 'Код';
  log_complete = 'Завершено';
  log_country = 'Специфика страны';
  log_create = 'Создано';
  log_deactivate = 'Деактивировано';
  log_deactivate_booklets = 'Деактивировано';
  log_delete = 'Удалено';
  log_delete_batch = 'Партия удалена';
  log_distribution = 'Выдача';
  log_donor = 'Донор';
  log_edit_general_relief_notes = 'Заметки по общим товарам помощи добавлены';
  log_family_name = 'Фамилия';
  log_field = 'Поле';
  log_field_action = 'Действие';
  log_field_country = 'Страна';
  log_field_date = 'Дата';
  log_field_details = 'Детали:';
  log_field_id = 'Идентификационный номер';
  log_field_object = 'Обьект';
  log_field_status = 'СТАТУС (местный житель, ВПЛ или беженец)';
  log_field_user = 'Пользователь';
  log_household = 'Домохозяйство';
  log_import = 'Импортировано';
  log_import_beneficiaries_from_api = 'Импортировано из Api';
  log_import_beneficiaries_from_syria_file = 'Импортировано из файла сирийской миссии';
  log_import_beneficiary = 'Импортированные бенефициары';
  log_name = 'Имя:';
  log_no_details = 'Нет данных для отображения';
  log_not_exists = 'Больше не существует';
  log_number_booklets = 'Количество буклетов';
  log_number_vouchers = 'Количество ваучеров';
  log_old_id = 'Предыдущая идентификация';
  log_organization = 'Организация';
  log_post_language = 'Язык по умолчанию изменен';
  log_update_password = 'Пароль обновлен';
  log_post_password = 'Пароль изменен';
  log_product = 'Продукт';
  log_project = 'Проект';
  log_remove_many = 'Удалено';
  log_remove_one_beneficiary = 'Удален один бенефициар';
  log_requests = 'Запросы';
  log_requests_country_title = 'Запросы по стране';
  log_requests_day_title = 'Запросы за день';
  log_scan = 'Отсканировано';
  log_send_transaction = 'Мобильный платеж отправлен';
  log_send_verification_email = 'Код отправлен';
  log_set_general_relief_items_as_distributed = 'Товары общей помощи распределены';
  log_status_200 = 'Успешно';
  log_status_300 = 'Перенаправлено';
  log_status_400 = 'Ошибка';
  log_status_401 = 'Неопознано';
  log_status_403 = 'Запрещено';
  log_status_404 = 'Не найдено';
  log_status_rate_title = 'Показатель статуса';
  log_time = 'Время';
  log_transaction = 'Операция';
  log_update = 'Обновлено';
  log_update_f_p = '3-х стороннее соединение отредактировано';
  log_upload_image = 'Изображение загружено';
  log_upload_logo = 'Логотип загружен';
  log_user = 'Пользователь';
  log_username = 'Имя пользователя';
  log_users = 'Пользователи';
  log_validate = 'Подтверждено';
  log_value = 'Стоимость';
  log_vendor = 'Продавец';
  log_voucher = 'Ваучер';
  login_title_google = 'Вход через Google';
  login_title_hid = 'Вход через HID';
  login_two_fa_invalid_code = 'Неверный код, пожалуйста, попробуйте еще раз';
  login_two_fa_message = 'Это ваш код идентификации Humansis';
  logs = 'Журнал пользователя';
  profile_change_phone = 'Изменить номер телефона';
  profile_phone_changed = 'Номер телефона успешно изменен';
  profile_phone_not_valid = 'Введенный номер телефона недействителен';
  profile_two_fa_disable = 'Отключить';
  profile_two_fa_disabled = 'Отключена двухфакторная аутентификация';
  profile_two_fa_enable = 'Включить';
  profile_two_fa_enabled = 'Успешно включена двухфакторная аутентификация';
  profile_two_fa_information =
    'Двухфакторная аутентификация обеспечивает дополнительную безопасность вашей учетной записи, требуя для входа не только пароль';
  profile_two_fa_title = 'Двухфакторная аутентификация';
  profile_two_fa_warning =
    'Вам нужен зарегистрированный телефонный номер, чтобы включить двухфакторную аутентификацию';
  profile_user_hint_new_phone_number = 'НОМЕР ТЕЛЕФОНА';
  profile_user_hint_new_phone_prefix = 'Приставка';
  true = 'правда';
  user_phone_number = 'Номер телефона';
  user_phone_prefix = 'Приставка';

  // Insituttion
  institution_name = 'Имя';
  institution_contact_name = 'Имя  контактного лица';
  institution_contact_family_name = 'Фамилия контактного лица';
  institution_contact_id_type = this.missingTranslation;
  institution_contact_id_number = this.missingTranslation;

  institution_type_school = 'Школа';
  institution_type_health = 'Больница/Медицинский центр';
  institution_type_community_center = 'Общественный центр';
  institution_type_government = 'Другое правительственное здание или сооружение';
  institution_type_production = 'Склад/фабрика';
  institution_type_commerce = 'Другое Коммерческое Здание';
}
