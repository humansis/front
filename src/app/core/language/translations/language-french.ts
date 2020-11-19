import { REFERRALTYPES } from 'src/app/models/constants/referral-types';
import { INCOMELEVELS } from '../../../models/constants/income-levels';
import { ADMINLEVELS } from '../adm-constants';
import { Language } from '../language';
/* tslint:disable */
export class French implements Language {
  // GENERAL VARIABLES
  LANGUAGE = 'french';
  LANGUAGE_ISO = 'fr';
  missingTranslation = '-- MISSING TRANSLATION --';
  direction = 'ltr';
  // Utils
  administrative_settings = 'Paramètres administratifs';
  back = 'Retour';
  characters = 'Caractères';
  done = 'Fin';
  email = 'Email';
  export = 'Export';
  false = 'Faux';
  export_selected = 'Exporter les items sélectionnés';
  general_settings = 'Configuration';
  home = 'Accueil';
  import = 'Import';
  information = 'Information';
  individual = 'Individual';
  is_required = 'est un champ obligatoire';
  name = 'nom';
  new = 'Nouveau';
  next = 'Suivant';
  no_data = 'Pas de données';
  no_data_to_export = 'Pas de données à exporter';
  or = 'ou';
  rights = 'Rôles';
  settings = 'Paramètres';
  summary = 'Sommaire';
  the = 'le';
  this = 'Ce';
  true = 'Vrai';
  selected = 'selectionné';
  history = this.missingTranslation;
  loading = this.missingTranslation;

  // Models
  beneficiaries = 'Bénéficiaires';
  beneficiary = 'Bénéficiaire';
  booklet = 'Brochure';
  booklets = 'Brochures';
  commodity = 'Ressource';
  country = 'Pays';
  criteria = 'Critère';
  distribution = 'Distribution';
  distributions = 'Distributions';
  donor = 'Donneur';
  donors = 'donateurs';
  general_relief = 'Item';
  head = 'Chef de famille';
  household = 'Ménage';
  households = 'Ménage';
  language = 'langue';
  location = 'Lieu';
  logs = 'Journaux';
  national_id = "Document d'identité";
  phone = 'Téléphone';
  products = 'Produits';
  profile = 'Profil';
  project = 'Projet';
  projects = 'Projets';
  reports = 'Rapports';
  sector = 'Secteur';
  user = 'Utilisateur';
  users = 'utilisateurs';
  vendor = 'Vendeur';
  vendors = 'vendeurs';
  voucher = 'Vouchers';
  institution = this.missingTranslation;
  institutions = this.missingTranslation;
  community = this.missingTranslation;
  communities = this.missingTranslation;

  // Actions
  add = 'Ajouter';
  cancel = 'Annuler';
  close = 'Fermer';
  complete = 'Terminer';
  create = 'Créer';
  delete = 'Supprimer';
  duplicate = 'dupliquer';
  remove = 'retirer';
  save = 'Enregistrer';
  update = 'Modifier';
  view = 'Voir';
  redeem = this.missingTranslation;
  print = this.missingTranslation;

  // Common Fields
  address = 'Adresse';
  currency = 'Devise';
  date = 'date';
  description = 'description';
  details = 'Détails';
  distributed = 'Distribué';
  female = 'Femme';
  gender = 'Sexe';
  id = 'ID';
  justification = 'justification';
  male = 'Homme';
  notes = 'Notes';
  other = 'Autre';
  password = 'Mot de passe';
  status = 'Satut';
  type = 'Type';
  unit = 'Unité';
  username = 'Identifiant';
  value = 'Valeur';
  latitude = this.missingTranslation;
  longitude = this.missingTranslation;
  amount = this.missingTranslation;
  price = this.missingTranslation;
  purchased_by = this.missingTranslation;
  quantity = 'Quantité';
  total = this.missingTranslation;

  // Error
  back_to_homepage = "Retour à la page d'accueil";
  error_interceptor_msg =
    "Un erreur est survenue, la requête n'a pas abouti (La réponse de retour est vide).";
  forbidden = 'Page interdite';
  forbidden_message = "Désolé, vous n'avez pas l'autorisation d'accéder à cette page";
  not_connected_error = 'Veuillez vous connecter';
  not_enough_rights = 'Pas assez de droits pour demander des journaux';
  not_found = 'Page non trouvée';
  not_found_message = "Désolé, cette page n'est pas disponible";

  // Months
  months_short = [
    'Jan',
    'Fév',
    'Mar',
    'Avr',
    'Mai',
    'Juin',
    'Jul',
    'Aoû',
    'Sep',
    'Oct',
    'Nov',
    'Déc',
  ];

  // Address and location
  adm1 = ADMINLEVELS.fr.adm1;
  adm2 = ADMINLEVELS.fr.adm2;
  adm3 = ADMINLEVELS.fr.adm3;
  adm4 = ADMINLEVELS.fr.adm4;
  address_number = 'Numero de rue';
  address_postcode = 'Code Postal';
  address_street = 'Rue';

  // Add beneficiary
  add_beneficiary_done = 'Récapitulatif du bénéficiaire à créer';
  add_beneficiary_title = "Ajout d'un bénéficiaire";
  add_beneficiary_code = 'Ext';
  add_beneficiary_occupation = 'Occupation';
  add_beneficiary_external_support = this.missingTranslation;
  add_beneficiary_project = 'Veuillez ajouter ce foyer a un ou plusieurs projets';

  // Add distribution
  add_distribution_advanced_option = 'Options avancées';
  add_distribution_beneficiaries_reached = 'Bénéficaires atteints';
  add_distribution_check_fields =
    'Remplissez les informations de la nouvelle distribution avant, incluant les commodités et le score minimum de sélection supérieur à 0.';
  add_distribution_commodities_delivered = 'a être délivrées';
  add_distribution_created = ' a été créée';
  add_distribution_date_inside_project =
    "Erreur lors de la création d'une nouvelle distribution, la date de la distribution doit être comprise entre les dates du projet";
  add_distribution_date_before_today =
    "Erreur lors de la création d'une nouvelle distribution, la date de la distribution doit être avant aujourd'hui";
  add_distribution_distributed_commodity = 'ressource distribuée';
  add_distribution_error_creating =
    'Erreur lors de la création de la nouvelle distribution';
  add_distribution_households_reached = 'Ménages atteints';
  add_distribution_missing_commodity = 'Une commodité est manquante';
  add_distribution_missing_date = 'La date est manquante';
  add_distribution_missing_location = 'Add a Province';
  add_distribution_missing_selection_criteria = 'Un critère de sélection est manquant';
  add_distribution_missing_threshold = this.missingTranslation;
  add_distribution_multiple_modalities =
    'Vous ne pouvez pas ajouter des commodités distribuées différemment';
  add_distribution_no_beneficiaries =
    'Le nombre de bénficiaires/ménages atteints doit être positif';
  add_distribution_selection_criteria = 'critères de sélection';
  add_distribution_text_explanation =
    'Le système va seulement sélectionner les bénéficiaires/ménages avec un score supérieur que le score minimum de sélection';
  add_distribution_threshold = 'Score minimum de sélection';
  add_distribution_zero = 'Le nombre de ménage atteint ou le montant à distribuer est 0';

  add_distribution_very_low = 'Très bas';
  add_distribution_low = 'Bas';
  add_distribution_average = 'Moyenne';
  add_distribution_high = 'Haut';
  add_distribution_very_high = 'Très haut';

  // Add project
  add_project_new_distribution = 'nouvelle distribution';
  add_project_title = 'nouveau projet';

  // Benficiary form errors
  beneficiary_error_location = 'Vous devez choisir une localisation';
  beneficiary_error_address_number = 'Vous devez entrer un numéro de voie';
  beneficiary_error_address_postcode = 'Vous devez entrer un code postal';
  beneficiary_error_address_street = 'Vous devez entrer un nom de voie';
  beneficiary_error_head = 'le chef de famille';
  beneficiary_error_member = ' membre';
  beneficiary_error_family_name = 'Vous devez entrer un nom de famille local pour ';
  beneficiary_error_given_name = 'Vous devez entrer un prénom local pour ';
  beneficiary_error_gender = 'Vous devez sélectionner un genre pour ';
  beneficiary_error_phone =
    'Le numéro de téléphone doit être uniquement composé de chiffres pour ';
  beneficiary_error_existing_country_code =
    'Veuillez sélectionner un préfixe valide pour ';
  beneficiary_error_country_code = 'Veuillez sélectionner un préfixe de la liste pour ';
  beneficiary_error_birth_date =
    'Veuillez sélectionner une date de naissance valide pour ';
  beneficiary_error_project = 'Veuillez sélectionner au moins un projet';
  beneficiary_error_camp = 'Vous devez sélectionner un camp ou en créer un';
  beneficiary_error_tent = 'Vous devez renseigner un numéro de tente';
  beneficiary_error_location_type = 'Vous devez sélectionner un type de lieu';

  // Beneficiaries
  beneficiary_add_list = 'Ajouter à un projet';
  beneficiary_add_project =
    "S'il vous plait, sélectionnez le(s) projet(s) dans le(s)quel(s) vous voudriez ajouter les";
  beneficiary_add_project_title = 'Ajouter les bénéficiaires à un projet';
  beneficiary_added = 'Les bénéficiaires ont été ajouté au projet sélectionné';
  beneficiary_advanced_research = 'Recherche avancée';
  beneficiary_clear_all_research = 'Réinitialiser les filtres';
  beneficiary_count = 'nombre de bénéficiaires';
  beneficiary_date_of_birth = 'Date de naissance';
  beneficiary_en_family_name = 'Nom de famille (Anglais)';
  beneficiary_en_given_name = 'Prénom (Anglais)';
  beneficiary_en_name = 'Nom (Anglais)';
  beneficiary_family_name = 'Nom';
  beneficiary_given_name = 'Prénom';
  beneficiary_head = 'Chef de famille';
  beneficiary_id = 'ID du bénéficiaire';
  beneficiary_justification_added = "Justification d'ajout";
  beneficiary_justification_removed = 'Justification de suppression';
  beneficiary_local_family_name = 'Nom de famille (Local)';
  beneficiary_local_given_name = 'Prénom (Local)';
  beneficiary_local_name = 'Nom (Local)';
  beneficiary_member = 'Membre';
  beneficiary_missing_selected_project =
    "Vous devez selectionner un projet avant l'importation";
  beneficiary_personnal = 'informations personnelles';
  beneficiary_plural = 'ces bénéficiaires';
  beneficiary_referral = 'Référence';
  beneficiary_referral_comment = 'Commentaire';
  beneficiary_referral_question = 'Ajouter une référence';
  beneficiary_referral_type = 'Type de référence';
  beneficiary_referral_types = REFERRALTYPES.fr;
  beneficiary_res_address = 'Adresse du résident';
  beneficiary_residency = 'résidence';
  beneficiary_residency_status = 'Status de résidence';
  beneficiary_residency_status_idp = 'IDP';
  beneficiary_residency_status_refugee = 'Réfugié';
  beneficiary_residency_status_resident = 'Résident';
  beneficiary_select_api = 'Sélectionner une API';
  beneficiary_selected_project = 'bénéficiaires sélectionnés:';
  beneficiary_update_title = 'Modifier un bénéficiaire';
  beneficiary_vulnerabilities = 'Vulnérabilités';

  // Benficiaries Imports
  beneficiary_import_addFile = 'ajouter un fichier ou glisser-déposer';
  beneficiary_import_addModal = 'ajouter un fichier';
  beneficiary_import_api = 'import depuis une source externe';
  beneficiary_import_beneficiaries_imported = ' bénéficiaires insérés';
  beneficiary_import_canceled = 'import annulé';
  beneficiary_import_check_fields =
    "Un champs est vide, s'il vous plaît remplissez tous les champs et sélectionner un projet";
  beneficiary_import_conversion_success = 'Fichier converti avec succès !';
  beneficiary_import_convert = 'convertir le fichier';
  beneficiary_import_csv = 'télécharger le modèle';
  beneficiary_import_error_file = 'Vous devez sélectionner un fichier';
  beneficiary_import_error_importing = "Erreur lors de l'importation des données";
  beneficiary_import_error_selection =
    'Vous devez sélectionner au moins un des choix proposés';
  beneficiary_import_file = 'import depuis un fichier';
  beneficiary_import_response = 'Préparez vous à recevoir le fichier';
  beneficiary_import_select_location =
    "Vous devez sélectionner une localisation et ajouter un fichier avant l'importation";
  beneficiary_import_select_project =
    "Vous devez selectionner un projet et ajouter un fichier avant l'importation";
  beneficiary_import_title = 'import de bénéficiaires';
  beneficiary_import_warning =
    "Attention : si le fichier importé est incomplet, le fichier résultant pourra nécessiter d'être complété pour que l'import fonctionne";

  // Booklets
  booklet_code = 'Code';
  booklet_deactivated = 'Désactivé';
  booklet_define_password = 'Définir un mot de passe';
  booklet_export_codes = 'Export des codes des brochures';
  booklet_individual_value = 'Valeur individuelle';
  booklet_number_booklets = 'Nombre de brochures';
  booklet_number_vouchers = 'Nombre de bons';
  booklet_password_pattern = 'Le mot de passe doit se composer de 4 chiffres';
  booklet_unassigned = 'Non assigné';
  booklet_update_password = 'Modifier le mot de passe';
  booklet_used = 'Utilisé';

  // Cache
  cache_distribution_added =
    'Distribution et bénéficiaires du projet ont été ajoutés dans le cache';
  cache_no_distribution =
    "Cette distribution n'est pas enregistrée dans le cache, vous ne pouvez pas y accéder hors-ligne";
  cache_store_beneficiaries = 'Mode Offline';
  cache_stored_beneficiaries = 'Sauvegardée Pour Le Mode Offline';

  // Commodities tooltips
  commodity_cash = 'cash';
  commodity_smartcard = this.missingTranslation;
  commodity_in_kind = 'en nature';
  commodity_modality_cash = 'Cash';
  commodity_modality_qr_voucher = 'Coupon QR Code';
  commodity_modality_paper_voucher = 'Coupon papier';
  commodity_modality_bread = 'Pain';
  commodity_modality_loan = 'Prêt';
  commodity_modality_food = 'Nourriture';
  commodity_modality_wash = "Kit d'hygiène";
  commodity_modality_agriculture = "Kit d'agriculture";
  commodity_modality_rte = 'Kit RTE';
  commodity_modality_shelter = "Kit d'abris";
  commodity_modality_hygiene = "kit d'hygiène";
  commodity_modality_dignity = 'kit de dignité';
  commodity_kgs = 'Kgs';
  commodity_kit = 'Kit';
  commodity_modality = 'Modalité';
  commodity_value = this.quantity;
  commodity_value_voucher = 'Valeur totale de la brochure';

  // Countries
  country_khm = 'Cambodge';
  country_syr = 'Syrie';
  country_specific = 'Option par pays';
  country_specific_field = 'Champ';

  // Dashboard
  dashboard_distribution_map = 'répartition des distributions';
  dashboard_recent_distributions = 'distributions récentes';
  dashboard_summary_1 = "total d'enregistrements";
  dashboard_summary_2 = 'projets en cours';
  dashboard_summary_3 = 'bénéficiaires enregistrés';
  dashboard_summary_4 = 'montant total des transactions';
  dashboard_summary_5 = 'bénéficiaires servis';
  dashboard_summary_6 = 'distributions terminées';

  // Data verification
  data_verification_chip_actual = 'Ménage ciblé';
  data_verification_chip_add = 'A ajouter';
  data_verification_chip_existing = 'Actuel';
  data_verification_chip_remove = 'A supprimer';
  data_verification_description_duplicates =
    "Ici sont affichés les bénéficiaires de votre fichier qui existent déjà dans la base de données comme membres d'un foyer. Si le bénéficiaire n'est pas un chef de famille, vous pouvez choisir de supprimer l'un ou l'autre, ou de conserver les deux dans le cas où vous êtes sûr qu'il s'agit de deux personnes différentes.";
  data_verification_description_end =
    "Les modifications ne seront ajoutées à la base de donnée qu'à la fin du processus de validation .";
  data_verification_description_less =
    'Ci-dessous sont listés les foyers déjà existants dans la base de données mais avec plus de bénéficiaires que dans le fichier importé. Vous pouvez vérifier les informations et supprimer ceux que vous désirez au foyer présent dans la base de données.';
  data_verification_description_more =
    'Ci-dessous sont listés les foyers déjà existants dans la base de données mais avec moins de bénéficiaires que dans le fichier importé. Vous pouvez vérifier les informations et ajouter ceux que vous désirez au foyer présent dans la base de données.';
  data_verification_description_typos =
    "Ci-dessous seront affichées les typos suspectes des bénéficiaires listés dans le fichier : S'il s'avère qu'un bénéficiaire est presque identique à un autre dans la base de données, il sera affiché ici. Vous pouvez choisir entre remplacer les valeurs par le bénéficiaire qui est importé, conserver celui déjà présent, ou les sauvegarder comme deux bénéficiaires distincts";
  data_verification_done = 'Toutes les données ont été vérifiées';
  data_verification_error = 'Erreur lors du parcours des données';
  data_verification_last_updated = 'Dernière mise à jour';
  data_verification_snackbar_duplicate_corrected = 'Problèmes de doublons corrigées';
  data_verification_snackbar_duplicate_no_corrected =
    'Toutes les erreurs de doublons ne sont pas corrigées';
  data_verification_snackbar_less_corrected = 'Bénéficiaires supprimer avec succès';
  data_verification_snackbar_more_corrected = 'Bénéficiaires ajouter avec succès';
  data_verification_snackbar_typo_corrected = "Erreurs d'orthographe corrigées";
  data_verification_snackbar_typo_no_corrected =
    "Toutes les erreurs d'orthographe ne sont pas corrigées";
  data_verification_step_duplicates = 'Doublons';
  data_verification_step_info = "Info de l'étape";
  data_verification_step_less = 'Suppression';
  data_verification_step_more = 'Ajout';
  data_verification_step_typos = "Erreurs d'orthographe";
  data_verification_title = 'vérification et validation des données';

  // Distribution
  distribution_accept_changed = 'Accepter les changements';
  distribution_add_beneficiaries = 'Ajouter des bénéficiaires à cette distribution';
  distribution_add_justification = 'Ajouter une justification';
  distribution_justify_added =
    "Veuillez justifier votre choix d'ajouter des bénéficiaires";
  distribution_justify_created =
    'Veuillez justifier votre choix de créer des bénéficiaires';
  distribution_justify_deleted =
    'Veuillez justifier votre choix de supprimer des bénéficiaires';
  distribution_beneficiary_added = 'Bénéficiaire ajouté';
  distribution_beneficiary_not_added = "Le bénéficiaire n'a pas pu être ajouté";
  distribution_cant_update = 'Vous ne pouvez pas modifier cette distribution';
  distribution_date = 'Date de la Distribution';
  distribution_details_export = 'liste de distribution';
  distribution_details_import = 'importer & comparer';
  distribution_details_random = 'échantillon aléatoire';
  distribution_details_sample_size = "Taille d'échantillon";
  distribution_details_validate = 'valider & verouiller';
  distribution_distribute = 'définir comme distribué';
  distribution_edit = 'Modifier la distribution';
  distribution_error_validate =
    'La distribution est vide, veuillez la remplir avant de la valider';
  distribution_id = 'ID de la distribution';
  distribution_last_modification = 'dernière modification : ';
  distribution_no_beneficiaries =
    "Aucun bénéficiaire n'a été ajouté ou supprimé. N'importe quel changement fait aux bénéficiaires importés vont être mis à jour dans le système.";
  distribution_no_random_sample = "L'échantillon aléatoire ne peut pas être généré";
  distribution_no_right_transaction =
    "Vous n'avait pas le droit nécessaire pour réaliser la transaction, demandez à votre responsable de projet ou à votre responsable de pays";
  distribution_no_right_validate =
    "Vous n'avez pas le droit nécessaire pour valider la distribution, demandez à votre responsable de projet";
  distribution_no_valid_commodity =
    'Aucune commodité valide detectée pour cette distribution.';
  distribution_not_modified = "Cette distribution n'a pas été modifiée";
  distribution_not_validated = "La distribution n'a pas pu être validée";
  distribution_request_logs = "Recevoir l'historique des transactions par mail";
  distribution_select_beneficiaries =
    "S'il vous plait, selectionner les bénéficiaires depuis le projet";
  distribution_show_data = 'Afficher les données quand même';
  distribution_succes_completed = 'La distribution a été complétée avec succès !';
  distribution_type = 'Cible';
  distribution_validate = 'Valider';
  distribution_validated = 'La distribution a été validée';
  distribution_validated_title = 'Distribution validée';
  distribution_want_add = 'que vous souhaitez ajouter à la ';

  // Data columns mapping
  data_mapping_title = 'data columns mapping';

  // Donor
  donor_fullname = 'Nom du donneur';
  donor_shortname = 'Surnom';

  // Header
  'header_add-beneficiaries' = 'Ajouter un ménage';
  'header_add-distribution' = 'Ajouter une distribution';
  'header_admin' = 'Paramètres administratifs';
  'header_data-mapping' = this.missingTranslation;
  'header_data-validation' = 'Validation de données';
  'header_distributions' = 'Distribution';
  'header_settings' = 'Configuration';
  'header_update-beneficiary' = 'Modifier';
  header_beneficiaries = 'Bénéficiaires';
  header_disconnect = 'déconnexion';
  header_home = 'Accueil';
  header_household = this.household;
  header_import = 'Import de bénéficiaires';
  header_imported = 'Données des bénéficiaires importés';
  header_language = this.language;
  header_logs = this.logs;
  header_profile = this.profile;
  header_projects = this.projects;
  header_reports = this.reports;
  header_vouchers = this.voucher;
  header_vendors = this.vendors;

  // Household
  household_coping_strategies_index = "Indice de stratégies d'adaptation";
  household_food_consumption_score = 'Score de consommation alimentaire';
  household_full_address = 'Adresse entière du ménage';
  household_id = 'ID du foyer';
  household_income = 'Niveau de revenu';
  household_income_level = INCOMELEVELS.french;
  household_info = 'Résumé des informations du ménage';
  household_livelihood = 'Métier';
  household_location = 'Localisation du ménage';
  household_location_address = 'Adresse';
  household_location_camp = 'Camp';
  household_location_camp_name = 'Nom du camp';
  household_location_create_camp = 'Créer un camp';
  household_location_current_address = 'Adresse actuelle';
  household_location_current_location = 'Lieu actuel';
  household_location_question =
    'Votre adresse actuelle est-elle différente de votre adresse habituelle ?';
  household_location_residence = 'Résidence';
  household_location_resident_address = 'adresse de résidence';
  household_location_resident_location = 'Lieu de résidence';
  household_location_settlement = 'Installation temporaire';
  household_location_tent = 'Numéro de tente';
  household_location_type = "Type d'habitation";
  household_members = 'Membres';
  household_no_data_offline = 'Ces données ne sont accessibles offline';
  household_sentence = 'Le ménage de ';
  household_summary_members = 'Membres du foyer';
  household_debt_level = this.missingTranslation;
  household_support_received_other_org = this.missingTranslation;
  household_support_date_received = this.missingTranslation;
  household_support_organization = this.missingTranslation;
  household_assets = this.missingTranslation;
  household_shelter_status = this.missingTranslation;
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
  import_added = 'Ajout';
  import_back_to_beneficiaries = 'Back to Beneficiaries';
  import_back_to_project = 'Back to Project';
  import_created = 'Création';
  import_deleted = 'Suppression';
  import_description =
    'Importez le fichier contenant la distribution après modifications. La base de donnée sera mise à jour lorsque vous cliquerez sur "upload" après validation de l\'import. Les bénéficiaires inconnus seront ignorés.';
  import_distribution_no_right_update =
    "Vous n'avez pas le droit nécessaire pour modifier la distribution, demandez à votre reponsable de projet";
  import_distribution_updated = 'Distribution modifiée';
  import_select_new = 'Sélectionner tous les nouveaux';
  import_select_old = 'Sélectionner tous les anciens';
  import_updated = 'Mis à jour';

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
  log_archive = 'Archivé';
  log_assign = 'Attribué';
  log_add_beneficiary = 'Bénéficiaires ajoutés';
  log_add_households = 'Ménages ajoutés';
  log_complete = 'Terminé';
  log_create = 'Établi';
  log_deactivate = 'Désactivé';
  log_deactivate_booklets = this.log_deactivate;
  log_delete = 'Supprimé';
  log_delete_batch = 'Lot supprimé';
  log_edit_general_relief_notes = 'Notes de soulagement général ajoutées';
  log_import = 'Importé';
  log_import_beneficiaries_from_api = "Importé d'Api";
  log_import_beneficiaries_from_syria_file = 'Fichier importé de Syrie';
  log_import_beneficiary = 'Bénéficiaires importés';
  log_post_password = 'Mot de passe modifié';
  log_scan = 'Scanné';
  log_remove_many = 'Supprimé';
  log_remove_one_beneficiary = 'Retiré un bénéficiaire';
  log_send_transaction = "Envoi d'argent mobile";
  log_send_verification_email = 'Code de transaction envoyé';
  log_set_general_relief_items_as_distributed = 'Élément de secours général distribué';
  log_update = 'Mis à jour';
  log_update_f_p = 'Connexion tierce modifiée';
  log_post_language = 'Changement de langue par défaut';
  log_update_password = 'Mot de passe mis à jour';
  log_upload_image = 'Téléchargé une image';
  log_upload_logo = 'Téléchargé un logo';
  log_validate = 'Validé';

  // Objects
  log_beneficiary = 'Bénéficiaire';
  log_booklet = 'Brochure';
  log_country = 'Spécificités du pays';
  log_distribution = 'Distribution';
  log_donor = 'Donneur';
  log_household = 'Ménage';
  log_organization = 'Organisation';
  log_product = 'Produit';
  log_project = 'Projet';
  log_transaction = 'Transaction';
  log_user = 'Utilisateur';
  log_vendor = 'Vendeur';
  log_voucher = 'Bon';

  //Fields
  log_field_action = 'action';
  log_field_country = 'Pays';
  log_field_date = 'Date';
  log_field_details = 'Les détails';
  log_field_id = 'Id';
  log_field_object = 'Objet';
  log_field_status = 'Statut';
  log_field_user = 'Utilisateur';

  //Reports
  log_active_users_title = 'Utilisateurs les plus actifs';
  log_code = 'Code';
  log_family_name = 'nom de famille';
  log_field = 'champ';
  log_old_id = 'Identifiant précédent';
  log_name = 'Prénom';
  log_not_exists = "N'existe plus";
  log_no_details = 'Aucun détail à afficher';
  log_number_booklets = 'Nombre de livrets';
  log_number_vouchers = 'Nombre de bons';
  log_requests = 'Demandes';
  log_requests_country_title = 'Demandes par pays';
  log_requests_day_title = 'Demandes par jour';
  log_status_rate_title = 'Taux de statut';
  log_time = 'Temps';
  log_users = 'Utilisateur';
  log_username = "Nom d'utilisateur";
  log_value = 'Valeur';

  //Status
  log_status_200 = 'succès';
  log_status_300 = 'redirigé';
  log_status_400 = 'erreur';
  log_status_401 = 'non authentifié';
  log_status_403 = 'interdit';
  log_status_404 = 'pas trouvé';

  // Login
  login_bms = 'Beneficiary management system';
  login_captcha_invalid = 'Le captcha est invalide';
  login_password = '*********';
  login_prompt = 'Veuillez vous connecter';
  login_title = 'Connexion';
  login_title_hid = 'Se connecter avec Humanitarian ID';
  login_title_google = 'Se connecter avec Google';
  login_two_fa_invalid_code = "Code invalide. S'il vous plaît essayer à nouveau";
  login_two_fa_message = "Ceci est votre code d'authentification Humansis";

  // Map legend
  map_legend_completed = 'completée';
  map_legend_not_validated = 'non validée';
  map_legend_validated = 'validée';

  // Modal
  modal_add_multiple_title = 'Ajouter plusieurs nouveaux';
  modal_add_no_value = 'Vous devez entrer une valeur';
  modal_add_title = 'Ajouter un nouveau';
  modal_check_date =
    'Champs invalides = La date de début ne peut pas être plus ancienne que la date de fin et vice versa';
  modal_check_fields = 'Champs invalides = vérifiez que vous avez rempli tous les champs';
  modal_delete_beneficiary = 'Retirer ce bénéficiaire';
  modal_delete_beneficiary_sentence: 'Vous êtes sur le point de retirer ';
  modal_delete_beneficiary_sentence_2 = ' de cette distribution';
  modal_delete_many = 'ces éléments';
  modal_complete_distribution = 'Etes-vous sûr de vouloir fermer cette distribution ?';
  modal_delete_sentence = 'Vous êtes sur le point de supprimer ';
  modal_delete_sentence_2 = 'Souhaitez-vous continuer ?';
  modal_details_title = 'Détails de ce';
  modal_edit_title = 'Modifier ce';
  modal_failure = 'Echecs';
  modal_file_extension_error = "Le fichier doit avoir l'extension ";
  modal_language_actual = 'Langue actuelle :';
  modal_leave = 'Quitter';
  modal_leave_sentence =
    'Souhaitez-vous réellement quitter sans enregistrer vos modifications ?';
  modal_no_file = 'Aucun fichier selectionné';
  modal_not_enough_strong =
    'Mot de passe insuffisant... Minimum requis = 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre';
  modal_pending_requests = 'Pending Requests';
  modal_pick_color = 'Veuillez selectionner une couleur';
  modal_request_error = "La requête n'a pas pu être envoyée";
  modal_request_success = 'a été envoyé';
  modal_required = 'obligatoire';
  modal_save_language_as_default = 'Définir ceci comme langage par défaut';
  modal_success = 'Succès';
  modal_valid_email = 'Veuillez utiliser un mail valide';
  modal_values_format_error =
    'Si vous souhaitez déterminer les valeurs individuellement, vous devez taper des nombres séparés par des virgules (maximum 5)';
  modal_warning_pending_requests_1 =
    'Find the requests you created during your offline time below, you can send those you want to apply to modify the database.';
  modal_warning_pending_requests_2 =
    'WARNING = Requests linked to an item you created offline will fail !';
  modal_no_pending_requests = "Il n'y a pas de demandes en attente";

  // National ID
  national_id_card = "Carte d'identité";
  national_id_family_registry = 'Livret de famille';
  national_id_license = 'Permis de conduire';
  national_id_number = 'Identifiant national';
  national_id_passport = 'Passeport';
  national_id_birth_certificate = 'Certificat de naissance';
  national_id_type = "Type d'identifiant national";
  national_id_camp = this.missingTranslation;
  national_id_social_service = this.missingTranslation;

  //Network
  network_access_offline = 'Ces données ne sont pas accessibles offline';
  network_no_connection = "Pas d'internet";
  network_no_connection_reconnect =
    "Pas d'internet, ces données seront envoyées lors que vous serez à nouveau connecté";
  network_manipulate_offline = 'Ces données ne peuvent pas être manipulées offline';
  network_status_connected = 'Vous êtes maintenant connecté au réseau';
  network_status_disconnected = 'Vous êtes maintenant déconnecté du réseau';

  // Null values
  null_none = 'aucun';
  null_not_yet = 'pas encore';
  null_not_distributed = 'pas distribué';
  null_not_yet_defined = 'pas encore défini';

  // Number suffixes
  number_suffixes = {
    1: 'er',
    2: 'ème',
    3: 'ème',
  };
  number_suffix_other = 'ème';

  // Organization
  organization_font = 'police à appliquer au pdf';
  organization_footer = 'contenu du pied de page du pdf';
  organization_logo = "logo de l'organisation";
  organization_name = "nom de l'organisation";
  organization_primary = "couleur principale de l'organisation";
  organization_secondary = "couleur secondaire de l'organisation";

  // Phone
  phone_no = 'Téléphone No. ';
  phone_prefix = 'Ext';
  phone_proxy = 'Proxy';
  phone_type_landline = 'Fixe';
  phone_type_mobile = 'Portable';

  // Placeholder
  placeholder_one_many = 'Select one or many';

  // Product
  product_image = 'Image';

  // Profile
  profile_change_password = 'Vous devez changer de mot de passe';
  profile_change_phone = 'Changer le numéro de téléphone';
  profile_password_would_not_be_changed =
    'Les deux mots de passe sont identiques, les changements seront ignorés.';
  profile_password_changed = 'Mot de passe changé';
  profile_phone_changed = 'Numéro de téléphone changé avec succès';
  profile_phone_not_valid = "Le numéro de téléphone introduit n'est pas valide";
  profile_two_fa_enable = 'Activer';
  profile_two_fa_enabled = 'Authentification à deux facteurs activée avec succès';
  profile_two_fa_disable = 'Désactiver';
  profile_two_fa_disabled = 'Authentification à deux facteurs désactivée';
  profile_two_fa_information =
    "L'authentification à deux facteurs ajoute une couche de sécurité supplémentaire à votre compte en nécessitant plus d'un mot de passe pour vous connecter.";
  profile_two_fa_title = 'Authentification à 2 facteurs';
  profile_two_fa_warning =
    "Vous avez besoin d'un numéro de téléphone enregistré pour activer l'authentification en deux phases";
  profile_user_change_password = 'Changer de mot de passe';
  profile_user_hint_new_password = 'Nouveau mot de passe';
  profile_user_hint_new_password_again = 'Ré-entrez votre nouveau mot de passe';
  profile_user_hint_new_phone_number = 'Numéro de téléphone';
  profile_user_hint_new_phone_prefix = 'Préfixe';
  profile_user_hint_old_password = 'Mot de passe actuel';
  profile_user_information = 'Informations utilisateur';

  // Project
  project_add = 'Veuillez créer un projet pour commencer !';
  project_add_household =
    "S'il vous plait, ajoutez d'abord des bénéficiaires ! Ensuite, vous pourrez gérer des distributions...";
  project_click = 'Cliquer sur ' + this.add;
  project_create = 'Créer un nouveau projet';
  project_description =
    "Vous pourrez modifier le nom du projet jusqu'à votre première distribution";
  project_end_date = 'Date de fin de projet';
  project_go_import_beneficiaries = 'Importer des bénéficiaires';
  project_name = 'Nom  du projet';
  project_internal_id = '-- MISSING TRANSLATION --';
  project_no_distribution =
    'Le projet ne contient aucune distribution. Créer votre première !';
  project_no_household = 'Le projet ne contient aucun ménage.';
  project_no_projects = 'Le pays ne contient aucun projet actif pour le moment.';
  project_number_of_households = 'Nombre de ménages';
  project_sectors_name = 'Secteurs';
  project_start_date = 'Date de début de projet';
  project_value = 'Nombre de bénéficiaires ciblés';

  // Report
  report_active_project = 'projet actif';
  report_active_projects = this.dashboard_summary_2; // 'Active Projects'
  report_apply = 'appliquer';
  report_country = 'par pays';
  report_country_report = 'graphiques par pays';
  report_distributions = this.distributions; // 'distributions'
  report_distribution_report = 'graphiques par distribution';
  report_enrolled_beneficiary = 'bénéficiaire inscrit';
  report_enrolled_beneficiaries = this.dashboard_summary_3; // 'Enrolled Beneficiaries'
  report_filter_chose_periode = 'choisir période';
  report_filter_per_month = 'par mois';
  report_filter_per_quarter = 'par trimestre';
  report_filter_per_year = 'par année';
  report_frequency_month = 'Mois';
  report_frequency_quarter = 'Trimestre';
  report_frequency_year = 'Année';
  report_from = 'de';
  report_household = this.household; // 'household'
  report_loader = 'Chargement';
  report_period_selected = 'période choisie';
  report_project = 'par projet';
  report_project_report = 'graphiques par projet';
  report_select_frequency = 'Choisir fréquence';
  report_time = 'Temps';
  report_to = 'à';
  report_total_households = 'Total des ménages';
  report_total_transactions_completed = 'Nombre total de transactions terminées';
  report_total_number_of_distributions = 'Nombre total de distributions';
  report_transactions_completed = 'transactions complétées';
  report_upcoming_reporting = 'Graphiques à venir';

  report_age_breakdown = 'Répartition par âge';
  report_donors = this.donors; // 'Donors'
  report_household_served = 'Ménages desservis';
  report_modality = this.commodity_modality; // 'Modality'
  report_number_men_and_women = "Nombre d'hommes et de femmes";
  report_number_of_enrolled_beneficiaries = 'Nombre de bénéficiaires inscrits';
  report_percentage_of_vulnerabilities_served =
    'Pourcentage de vulnérabilités desservies';
  report_percentage_of_beneficiaries_reached = 'Pourcentage de bénéficiaires servis';
  report_total_distribution_value = 'Valeur totale de la distribution';

  report_disabled = 'Handicapé';
  report_households = 'Ménages';
  report_lactating = 'En lactation';
  report_men = 'Hommes';
  report_not_reached = 'Non atteint';
  report_nutritionalissues = 'Problèmes nutritionnels';
  report_percentage_of_beneficiaries = 'Pourcentage de bénéficiaires';
  report_soloparent = 'Seul Parent';
  report_vulnerability_served = 'Vulnérabilité desservie';
  report_women = 'Femmes';
  report_missing_distribution = this.missingTranslation;

  // Role
  role_user_admin = 'Administrateur';
  role_user_country_manager = 'Responsable de pays';
  role_user_enumerator = 'Enumérateur';
  role_user_field_officer = 'Agent de terrain';
  role_user_project_manager = 'Responsable de projet';
  role_user_project_officer = 'Agent de projet';
  role_user_regional_manager = 'Responsable de région';

  // Sectors tooltips
  sector_cccm = 'Management et organisation de camp';
  sector_recovery = 'Relèvement précoce';
  sector_education = 'Education';
  sector_telecom = 'Urgence télécommunications';
  sector_food = 'Sécurité alimentaire';
  sector_health = 'Santé';
  sector_logistics = 'Logistique';
  sector_nutrition = 'Nutrition';
  sector_protection = 'Protection';
  sector_shelter = 'Hébergement';
  sector_water = "Assainissement de l'eau";
  sector_cash_for_work = 'cash for work';
  sector_tvet = 'TVET';
  sector_food_kits = 'nourriture, kits RTE';
  sector_nfi = 'NFIs';
  sector_livelihoods = this.missingTranslation;
  sector_mine_action = this.missingTranslation;
  sector_nonspecific = this.missingTranslation;
  sector_multipurpose_cash = this.missingTranslation;
  sector_education_tvet = this.missingTranslation;
  sector_drr_diligence = this.missingTranslation;

  // Settings
  settings_country_specific_options = 'options par pays';
  settings_created = ' créé(e)';
  settings_financial_provider = 'Connexions tiers';
  settings_log_button = 'Recevoir les logs de cet utilisateur par email';
  settings_organization = 'Mon organisation';
  settings_print_starting = 'Le téléchargement va démarrer';
  settings_project_exists = 'Un projet avec le même nom existe déjà';

  // Snackbar
  snackbar_change_password_done = 'Mot de passe modifié !';
  snackbar_change_password_fail = "Le mot de passe n'a pas pu être changé...";
  snackbar_change_password_not_possible =
    'Mot de passe pas assez long ou différent de la vérification';
  snackbar_created_successfully = 'Créé avec succès !';
  snackbar_error_creating = 'Erreur lors de la création = ';
  snackbar_error_updating = 'Erreur lors de la modification = ';
  snackbar_invalid_transaction_date = 'La date valide de transaction est dépassée.';
  snackbar_no_data_export = 'Pas de données à exporter';
  snackbar_pickup_error =
    'Il est impossile de vérifier le statut de la récupération pour le moment';
  snackbar_saved_language = 'Langage par défaut enregistré';
  snackbar_update = 'Une mise à jour est disponible';
  snackbar_updated_successfully = 'Modifié avec succès !';
  snackbar_verification_code = 'Le code de vérification a été envoyé à';
  snackbar_verification_code_error = "Impossible d'envoyer le code:";
  snackbar_verification_code_wait_error =
    'Le dernier code a été envoyé il y a moins de 10 secondes, vous devriez attendre.';
  snackbar_pdf_export_failed = this.missingTranslation;

  // Table
  table_actions = 'Actions';
  table_assign = 'assigner';
  table_element_deleted = ' supprimé(e)';
  table_element_updated = ' modifié(e)';
  table_filter = 'Rechercher par mot clé';
  table_filtered = 'Articles filtrés';
  table_first_page = 'Début';
  table_items_per_page = 'Items par page';
  table_last_page = 'Fin';
  table_logs_error = 'Les logs ne peuvent pas être envoyé';
  table_logs_success = 'Les logs ont été envoyé';
  table_next_page = 'Page suivante';
  table_of_page = 'sur';
  table_previous_page = 'Page précédente';
  table_print = 'imprimer';
  table_selected = 'Articles sélectionnés';

  // Time
  time_just_now = "à l'instant";

  // Transaction
  transaction_accept_prevention = "J'accepte ces conditions.";
  transaction_again = 'Renvoyer';
  transaction_amount_distributed = 'Quantité distribuée';
  transaction_amount_done = 'Quantité envoyée';
  transaction_amount_total = 'Quantité totale';
  transaction_amount_used = 'Quantité utilisée';
  transaction_amount_waiting = 'Reste à envoyer';
  transaction_confirm = 'Confirmer la transaction';
  transaction_confirm_button = 'Confirmer';
  transaction_email_code =
    'Un email contenant votre code de validation a été envoyé à  = ';
  transaction_id_transaction = 'ID de la Transaction';
  transaction_info_export =
    "Si la distribution n'a pas de transactions, vous n'aurez aucun fichier exporté";
  transaction_inProgress = 'Transaction en cours...';
  transaction_message = 'Message';
  transaction_no_transaction_sent =
    "Aucune transaction n'est envoyée, impossible d'exporter";
  transaction_paste_code =
    "S'il vous plait, coller le code ici et cliquer sur 'Confirmer' pour procéder à la transaction";
  transaction_pickupDate = 'Date de récupération';
  transaction_prevention =
    'This platform is still under development and the online cash transaction functionality may not be fully stable yet. The development team denies responsibility for any errors that may occur in terms of money loss. By ticking the box below, you agree to use the system knowing fully well its limitations and take responsibility for the results of the transaction.';
  transaction_progress = 'progrès de la distribution des produits:';
  transaction_refresh = 'Vérifier les retraits';
  transaction_state_already_sent = 'Envoyé';
  transaction_state_no_phone = 'Pas de téléphone';
  transaction_state_not_sent = 'Non envoyé';
  transaction_state_picked_up = 'Récupéré';
  transaction_state_sending_failed = 'Envoie échoué';
  transaction_state_sent = 'Envoyé';
  transaction_transaction = 'Démarrer la transaction';
  transaction_validate_distribution = 'Voulez vous vraiment valider la distribution ?';
  transaction_validation = 'Confirmer la validation';

  // Tooltip
  tooltip_admin =
    "C'est sur cette page que vous pouvez gérer les utilisateurs, donneurs ainsi que les spécificités de votre organization";
  tooltip_add_beneficiaries =
    'Cette page est un formulaire pour ajouter un nouveau ménage à la platforme.';
  tooltip_add_distribution =
    'Cette page est un formulaire pour ajouter une nouvelle distribution au projet. Vous allez pouvoir choisir des critères de sélection pour déterminer les ménages qui en feront partie et ajouter un montant spécifique de commodités pour la distribution.';
  tooltip_beneficiaries =
    'C\'est sur cette page que vous pouvez voir tous les ménages du pays. Si vous en avez le droit, vous pouvez ajouter de nouveaux ménages avec le bouton "+", gérer des ménages et filtrer/rechercher dans la liste.';
  tooltip_dashboard =
    "C'est sur cette page que vous avez une vue générale de chiffres clés à propos du pays et de ses projets. Vous avez accès à une carte avec les distribution du pays ainsi qu'un résumé des dernières distributions.";
  tooltip_data = "Cette page est un résumé des ménages que vous venez d'importer.";
  tooltip_data_validation =
    "Cette page vous permet d'importer des bénéficiaires en utilisant un fichier. Vous devez vérifier votre fichier en suivant les étapes.";
  tooltip_distributions =
    "C'est sur cette page que vous pouvez voir tous les ménages de la distribution. Si vous avez le droit, vous pouvez ajouter de nouveaux ménages en important un fichier ou en les sélectionnant dans la liste, gérer des ménages et valider la disitrbution.";
  tooltip_import =
    "Cette page vous permet d'importer des bénéficiaires. Vous pouvez choisir entre importer un nouveau ménage en utilisant un fichier ou l'API (la source de données externe) pour importer tous les ménages d'une commune spécifique.";
  tooltip_profile = "C'est sur cette page que vous pouvez changer votre mot de passe.";
  tooltip_projects =
    "C'est sur cette page que vous pouvez voir les projets du pays (seulement ceux que vous avez le droit de voir). Si vous avez le droit, vous pouvez ajouter une nouvelle distribution avec les ménages du projet, gérer des distributions et des transactions.";
  tooltip_reports =
    "Cette page est utilisée pour voir les statistiques du pays, comme la moyenne des transactions d'un projet, le nombre de distributions d'un projet...";
  tooltip_settings =
    "C'est sur cette page que vous pouvez ajouter un nouvel projet, de nouvelle options pour le pays, de nouvelles connexions, produits et vendeurs.";
  tooltip_update_beneficiary =
    'Cette page est un formulaire pour modifier le ménage selectionné.';
  tooltip_vouchers =
    "C'est sur cette page que vous pouvez créer, modifier, assigner et imprimer des brochures de coupons";

  //Vouchers
  voucher_ask_code =
    "S'il vous plaît, demandez au bénéficiaire de saisir 4 chiffres ci-dessous";
  voucher_assign = 'Assigner aux vouchers';
  voucher_assignment_cancelled = 'Affectation de vouchers annulée';
  voucher_assign_title = 'Assigner la brochure à un bénéficiaire';
  voucher_assigned_success = 'La brochure a été assignée à ';
  voucher_confirm = 'Brochure assignée à';
  voucher_created = 'La brochure a été créée';
  voucher_define_password = 'Définissez un mot de passe pour la brochure';
  voucher_for = 'pour';
  voucher_no_device = "Il n'y a pas de caméra connectée";
  voucher_no_permission = "Vous avez refusé la permission d'accéder à la caméra";
  voucher_only_digits = 'Votre mot de passe ne doit contenir que 4 chiffres';
  voucher_password_changed = 'Votre mot de passe a été changé';
  voucher_print_error = 'Vous ne pouvez pas imprimer un booklet sans bénéficiaire';
  voucher_print_selection = 'Imprimer la sélection';
  voucher_print_starting = 'Le téléchargement du coupon va démarrer';
  voucher_purchased = 'produits achetés';
  voucher_scan_text = 'Scanner le QR code de la brochure';
  voucher_select_beneficiary = 'Vous devez sélectionner un bénéficiaire';
  voucher_select_distribution = 'Vous devez sélectionner une distribution';
  voucher_select_project = 'Vous devez sélectionner un projet';
  voucher_sending = "Les données sont en cours d'envoi";
  voucher_step = 'va être assignée à';
  vouchers_booklet = 'Brochures de coupons';

  // Vulnerability
  vulnerability_disabled = 'handicap';
  vulnerability_lactating = 'allaitement';
  vulnerability_nutrional = 'malnutrition';
  vulnerability_pregnant = 'grossesse';
  vulnerability_solo_parent = 'parent célibataire';

  // User
  user_only_one_country = "Vous ne pouvez sélectionner qu'un pays";
  user_password_question = 'Modifier le mot de passe à la prochaine connexion';
  user_phone_number = this.profile_user_hint_new_phone_number;
  user_phone_prefix = this.profile_user_hint_new_phone_prefix;

  // Criteria (must be the last thing declared because uses the previous variables)
  criteria_operator = 'Condition';
  criteria_weight = 'Score du poids';
  criteria_target = 'Cible du critère';
  currentAdm1 = this.household_location_current_location;
  currentAdm2 = this.household_location_current_location;
  currentAdm3 = this.household_location_current_location;
  currentAdm4 = this.household_location_current_location;
  currentLocation = this.household_location_current_location;
  dateOfBirth = this.beneficiary_date_of_birth;
  residencyStatus = this.beneficiary_residency_status;
  hasNotBeenInDistributionsSince = "n'a pas été dans une distribution depuis ";
  disabledHeadOfHousehold = this.vulnerability_disabled;
  headOfHouseholdDateOfBirth = this.beneficiary_date_of_birth;
  headOfHouseholdGender = this.gender;
  livelihood = this.household_livelihood;
  foodConsumptionScore = this.household_food_consumption_score;
  copingStrategiesIndex = this.household_coping_strategies_index;
  incomeLevel = this.household_income;
  householdSize = 'taille du foyer';
  locationType = 'type de résidence';
  campName = this.household_location_camp_name;
  disabled = this.vulnerability_disabled;
  lactating = this.vulnerability_lactating;
  pregnant = this.vulnerability_pregnant;
  soloParent = this.vulnerability_solo_parent;
  nutritionalIssues = this.vulnerability_nutrional;

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
