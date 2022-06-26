export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** Duration custom scalar type */
  Duration: any;
  GraphQLJSON: any;
  /** Interval custom scalar type */
  Interval: any;
  /** MultiLanguage custom scalar type */
  MultiLanguage: any;
  MultiLanguageNullable: any;
  /** Time custom scalar type */
  Time: any;
  Upload: any;
};

export enum AccessEntity {
  AccessEntityStatusAvailable = 'ACCESS_ENTITY_STATUS_AVAILABLE',
  AccessEntityStatusAvailableBySubscription = 'ACCESS_ENTITY_STATUS_AVAILABLE_BY_SUBSCRIPTION',
  AccessEntityStatusCanBeActivated = 'ACCESS_ENTITY_STATUS_CAN_BE_ACTIVATED',
  AccessEntityStatusHold = 'ACCESS_ENTITY_STATUS_HOLD'
}

export enum AccessTask {
  AccessTaskRecalculateAllUserAccess = 'ACCESS_TASK_RECALCULATE_ALL_USER_ACCESS',
  AccessTaskRecalculateUserAccess = 'ACCESS_TASK_RECALCULATE_USER_ACCESS'
}

export type Appointment = {
  __typename?: 'Appointment';
  Consultation?: Maybe<Consultation>;
  active?: Maybe<Scalars['Boolean']>;
  bookedByMe?: Maybe<Scalars['Boolean']>;
  consultationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  startAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
};

export enum AppointmentField {
  AppointmentFieldStartAt = 'APPOINTMENT_FIELD_START_AT'
}

export type AppointmentMoveInput = {
  id: Scalars['Int'];
  targetId: Scalars['Int'];
};

export type AppointmentsFilterInput = {
  consultationId?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<DateRange>;
};

export type AppointmentsMyFilterInput = {
  consultationId: Scalars['String'];
};

export type AppointmentsSortInput = {
  field: AppointmentField;
  type: SortType;
};

export type AudioFile = {
  __typename?: 'AudioFile';
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  avatar?: Maybe<Array<Maybe<Media>>>;
  description?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  landingUrl?: Maybe<Scalars['String']>;
  regalia?: Maybe<Scalars['String']>;
  type?: Maybe<AuthorEntityType>;
};

export enum AuthorEntityType {
  AuthorEntityTypeConsultation = 'AUTHOR_ENTITY_TYPE_CONSULTATION',
  AuthorEntityTypeCourse = 'AUTHOR_ENTITY_TYPE_COURSE',
  AuthorEntityTypeDocument = 'AUTHOR_ENTITY_TYPE_DOCUMENT'
}

export enum AuthorField {
  AuthorFieldIndex = 'AUTHOR_FIELD_INDEX'
}

export type AuthorsFilterInput = {
  type?: InputMaybe<AuthorEntityType>;
};

export type AuthorsSortInput = {
  field: AuthorField;
  type: SortType;
};

export type Banner = {
  __typename?: 'Banner';
  Sale?: Maybe<Sale>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  oldPrice?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum BannerTask {
  BannerTaskRecalculateUserBanners = 'BANNER_TASK_RECALCULATE_USER_BANNERS'
}

export type Card = {
  __typename?: 'Card';
  id?: Maybe<Scalars['String']>;
  masked?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  status?: Maybe<CardStatus>;
  type?: Maybe<CardType>;
};

export enum CardStatus {
  CardStatusActive = 'CARD_STATUS_ACTIVE',
  CardStatusDeleted = 'CARD_STATUS_DELETED',
  CardStatusMain = 'CARD_STATUS_MAIN'
}

export enum CardType {
  CardTypeMaestro = 'CARD_TYPE_MAESTRO',
  CardTypeMastercard = 'CARD_TYPE_MASTERCARD',
  CardTypeVisa = 'CARD_TYPE_VISA'
}

export type CategoriesFilterInput = {
  type: CategoryEntityType;
};

export type CategoriesSortInput = {
  field: CategoryField;
  type: SortType;
};

export type Category = {
  __typename?: 'Category';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isGeneral?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<CategoryEntityType>;
};

export enum CategoryEntityType {
  CategoryEntityTypeConsultation = 'CATEGORY_ENTITY_TYPE_CONSULTATION',
  CategoryEntityTypeCourse = 'CATEGORY_ENTITY_TYPE_COURSE',
  CategoryEntityTypeDocument = 'CATEGORY_ENTITY_TYPE_DOCUMENT'
}

export enum CategoryField {
  CategoryFieldIndex = 'CATEGORY_FIELD_INDEX'
}

export type CitiesFilterInput = {
  countryId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  regionId?: InputMaybe<Scalars['Int']>;
};

export type CitiesResponse = {
  __typename?: 'CitiesResponse';
  Cities?: Maybe<Array<Maybe<City>>>;
  Pagination?: Maybe<Pagination>;
};

export type City = {
  __typename?: 'City';
  Country?: Maybe<Country>;
  Region?: Maybe<Region>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CmsDepartment = {
  __typename?: 'CmsDepartment';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CmsRole = {
  __typename?: 'CmsRole';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['GraphQLJSON']>;
};

export enum CmsRoleName {
  CmsRoleNameAdmin = 'CMS_ROLE_NAME_ADMIN',
  CmsRoleNameSuperadmin = 'CMS_ROLE_NAME_SUPERADMIN'
}

export type CmsUser = {
  __typename?: 'CmsUser';
  CmsDepartment?: Maybe<CmsDepartment>;
  CmsRole?: Maybe<CmsRole>;
  Language?: Maybe<Language>;
  active?: Maybe<Scalars['Boolean']>;
  departmentId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export enum CmsUserField {
  CmsUserFieldActive = 'CMS_USER_FIELD_ACTIVE',
  CmsUserFieldEmail = 'CMS_USER_FIELD_EMAIL',
  CmsUserFieldFullname = 'CMS_USER_FIELD_FULLNAME',
  CmsUserFieldPhone = 'CMS_USER_FIELD_PHONE'
}

export type Consultation = {
  __typename?: 'Consultation';
  Appointments?: Maybe<Array<Maybe<Appointment>>>;
  Author?: Maybe<Author>;
  Categories?: Maybe<Array<Maybe<Category>>>;
  Consultant?: Maybe<User>;
  ConsultationContent?: Maybe<Content>;
  ConsultationFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  Curators?: Maybe<Array<Maybe<User>>>;
  Faq?: Maybe<Faq>;
  Languages?: Maybe<Array<Maybe<Language>>>;
  MeetingMethod?: Maybe<MeetingMethod>;
  Product?: Maybe<Product>;
  Tag?: Maybe<Array<Maybe<Tag>>>;
  beforeBookingDuration?: Maybe<Scalars['Interval']>;
  beforeCancelDuration?: Maybe<Scalars['Interval']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<ConsultationDuration>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  ticketsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export enum ConsultationDuration {
  ConsultationDuration_15M = 'CONSULTATION_DURATION_15M',
  ConsultationDuration_30M = 'CONSULTATION_DURATION_30M',
  ConsultationDuration_60M = 'CONSULTATION_DURATION_60M'
}

export enum ConsultationField {
  ConsultationFieldIndex = 'CONSULTATION_FIELD_INDEX'
}

export type ConsultationResponse = {
  __typename?: 'ConsultationResponse';
  Consultations?: Maybe<Array<Maybe<Consultation>>>;
  Pagination?: Maybe<Pagination>;
};

export type ConsultationsFilterInput = {
  authorIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Content = {
  __typename?: 'Content';
  Language?: Maybe<Language>;
  content?: Maybe<Scalars['GraphQLJSON']>;
  id?: Maybe<Scalars['Int']>;
};

export type ContentUpdateInput = {
  content?: InputMaybe<Scalars['GraphQLJSON']>;
  id: Scalars['Int'];
};

export type CountiesFilterInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CountriesResponse = {
  __typename?: 'CountriesResponse';
  Countries?: Maybe<Array<Maybe<Country>>>;
  Pagination?: Maybe<Pagination>;
};

export type Country = {
  __typename?: 'Country';
  Regions?: Maybe<Array<Maybe<Region>>>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  multiUse?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  saleId?: Maybe<Scalars['String']>;
  useCountPerUser?: Maybe<Scalars['Int']>;
};

export enum CouponField {
  CouponFieldCode = 'COUPON_FIELD_CODE',
  CouponFieldMultiUse = 'COUPON_FIELD_MULTI_USE',
  CouponFieldUseCountPerUser = 'COUPON_FIELD_USE_COUNT_PER_USER'
}

export type Course = {
  __typename?: 'Course';
  Authors?: Maybe<Array<Maybe<Author>>>;
  Categories?: Maybe<Array<Maybe<Category>>>;
  CourseContent?: Maybe<Content>;
  CourseEndContent?: Maybe<Content>;
  CourseFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  DefaultThread?: Maybe<Thread>;
  Faq?: Maybe<Faq>;
  Gifts?: Maybe<Array<Maybe<Gift>>>;
  OwnThread?: Maybe<Thread>;
  RecommendedCourses?: Maybe<Array<Maybe<Course>>>;
  Surveys?: Maybe<Array<Maybe<Survey>>>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  Threads?: Maybe<Array<Maybe<Thread>>>;
  audioDuration?: Maybe<Scalars['Interval']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  exclusive?: Maybe<Scalars['Boolean']>;
  freeDescription?: Maybe<Scalars['String']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<CourseStatus>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalHomeworks?: Maybe<Scalars['Int']>;
  totalModules?: Maybe<Scalars['Int']>;
  totalTests?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  usersImages?: Maybe<Array<Maybe<Array<Maybe<Media>>>>>;
  videoDuration?: Maybe<Scalars['Interval']>;
};

export enum CourseField {
  CourseFieldIndex = 'COURSE_FIELD_INDEX'
}

export enum CoursePreview {
  CoursePreviewDefaultThread = 'COURSE_PREVIEW_DEFAULT_THREAD',
  CoursePreviewOwnThread = 'COURSE_PREVIEW_OWN_THREAD'
}

export enum CourseStatus {
  CourseStatusAvailable = 'COURSE_STATUS_AVAILABLE',
  CourseStatusCompleted = 'COURSE_STATUS_COMPLETED',
  CourseStatusFreeAccess = 'COURSE_STATUS_FREE_ACCESS',
  CourseStatusFullAccess = 'COURSE_STATUS_FULL_ACCESS'
}

export type CoursesDescription = {
  __typename?: 'CoursesDescription';
  description?: Maybe<Scalars['String']>;
};

export type CoursesFilterInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CoursesResponse = {
  __typename?: 'CoursesResponse';
  Courses?: Maybe<Array<Maybe<Course>>>;
  Pagination?: Maybe<Pagination>;
};

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum CurrencyName {
  CurrencyNameRub = 'CURRENCY_NAME_RUB',
  CurrencyNameUah = 'CURRENCY_NAME_UAH',
  CurrencyNameUsd = 'CURRENCY_NAME_USD'
}

export type DateRange = {
  from?: InputMaybe<Scalars['Date']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type Document = {
  __typename?: 'Document';
  Author?: Maybe<Author>;
  Categories?: Maybe<Array<Maybe<Category>>>;
  Course?: Maybe<Course>;
  DocumentContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  chatCreated?: Maybe<Scalars['Boolean']>;
  courseId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  durationLabel?: Maybe<LearnDuration>;
  externalVideoUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  quizQuestionCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DocumentType>;
  url?: Maybe<Scalars['String']>;
  usersImages?: Maybe<Array<Maybe<Array<Maybe<Media>>>>>;
  visibleSince?: Maybe<Scalars['Date']>;
  visibleUntil?: Maybe<Scalars['Date']>;
};

export enum DocumentField {
  DocumentFieldActive = 'DOCUMENT_FIELD_ACTIVE',
  DocumentFieldChatCreated = 'DOCUMENT_FIELD_CHAT_CREATED',
  DocumentFieldIndex = 'DOCUMENT_FIELD_INDEX',
  DocumentFieldStartDate = 'DOCUMENT_FIELD_START_DATE',
  DocumentFieldType = 'DOCUMENT_FIELD_TYPE',
  DocumentFieldVisibleSince = 'DOCUMENT_FIELD_VISIBLE_SINCE',
  DocumentFieldVisibleUntil = 'DOCUMENT_FIELD_VISIBLE_UNTIL'
}

export type DocumentResponse = {
  __typename?: 'DocumentResponse';
  Documents?: Maybe<Array<Maybe<Document>>>;
  Pagination?: Maybe<Pagination>;
};

export enum DocumentType {
  DocumentTypeArticle = 'DOCUMENT_TYPE_ARTICLE',
  DocumentTypeCourse = 'DOCUMENT_TYPE_COURSE',
  DocumentTypeExternalVideo = 'DOCUMENT_TYPE_EXTERNAL_VIDEO',
  DocumentTypeFile = 'DOCUMENT_TYPE_FILE',
  DocumentTypeLesson = 'DOCUMENT_TYPE_LESSON',
  DocumentTypeLive = 'DOCUMENT_TYPE_LIVE',
  DocumentTypeNews = 'DOCUMENT_TYPE_NEWS',
  DocumentTypeWebinar = 'DOCUMENT_TYPE_WEBINAR'
}

export type DocumentsFilterInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<DocumentType>>>;
};

export type DocumentsSortInput = {
  field: DocumentField;
  type: SortType;
};

export enum EntityName {
  EntityNameAppointment = 'ENTITY_NAME_APPOINTMENT',
  EntityNameAudio = 'ENTITY_NAME_AUDIO',
  EntityNameAudioMark = 'ENTITY_NAME_AUDIO_MARK',
  EntityNameAuthor = 'ENTITY_NAME_AUTHOR',
  EntityNameBanner = 'ENTITY_NAME_BANNER',
  EntityNameCategory = 'ENTITY_NAME_CATEGORY',
  EntityNameCmsDepartment = 'ENTITY_NAME_CMS_DEPARTMENT',
  EntityNameCmsRole = 'ENTITY_NAME_CMS_ROLE',
  EntityNameCmsUser = 'ENTITY_NAME_CMS_USER',
  EntityNameConsultation = 'ENTITY_NAME_CONSULTATION',
  EntityNameConsultationContent = 'ENTITY_NAME_CONSULTATION_CONTENT',
  EntityNameConsultationFeedback = 'ENTITY_NAME_CONSULTATION_FEEDBACK',
  EntityNameCoupon = 'ENTITY_NAME_COUPON',
  EntityNameCourse = 'ENTITY_NAME_COURSE',
  EntityNameCourseContent = 'ENTITY_NAME_COURSE_CONTENT',
  EntityNameCourseEndContent = 'ENTITY_NAME_COURSE_END_CONTENT',
  EntityNameCourseFeedback = 'ENTITY_NAME_COURSE_FEEDBACK',
  EntityNameCourseType = 'ENTITY_NAME_COURSE_TYPE',
  EntityNameCurrency = 'ENTITY_NAME_CURRENCY',
  EntityNameDepartment = 'ENTITY_NAME_DEPARTMENT',
  EntityNameDocument = 'ENTITY_NAME_DOCUMENT',
  EntityNameDocumentContent = 'ENTITY_NAME_DOCUMENT_CONTENT',
  EntityNameFaq = 'ENTITY_NAME_FAQ',
  EntityNameFaqOption = 'ENTITY_NAME_FAQ_OPTION',
  EntityNameFavorite = 'ENTITY_NAME_FAVORITE',
  EntityNameFile = 'ENTITY_NAME_FILE',
  EntityNameGift = 'ENTITY_NAME_GIFT',
  EntityNameGiftContent = 'ENTITY_NAME_GIFT_CONTENT',
  EntityNameHomework = 'ENTITY_NAME_HOMEWORK',
  EntityNameHomeworkContent = 'ENTITY_NAME_HOMEWORK_CONTENT',
  EntityNameHomeworkFluentContent = 'ENTITY_NAME_HOMEWORK_FLUENT_CONTENT',
  EntityNameHomeworkQuestionOption = 'ENTITY_NAME_HOMEWORK_QUESTION_OPTION',
  EntityNameHomeworkResult = 'ENTITY_NAME_HOMEWORK_RESULT',
  EntityNameHomeworkTask = 'ENTITY_NAME_HOMEWORK_TASK',
  EntityNameHomeworkTestQuestion = 'ENTITY_NAME_HOMEWORK_TEST_QUESTION',
  EntityNameHomeworkTestQuestionContent = 'ENTITY_NAME_HOMEWORK_TEST_QUESTION_CONTENT',
  EntityNameHomeworkTestQuestionOption = 'ENTITY_NAME_HOMEWORK_TEST_QUESTION_OPTION',
  EntityNameImage = 'ENTITY_NAME_IMAGE',
  EntityNameLanguage = 'ENTITY_NAME_LANGUAGE',
  EntityNameLesson = 'ENTITY_NAME_LESSON',
  EntityNameLessonContent = 'ENTITY_NAME_LESSON_CONTENT',
  EntityNameMeetingMethod = 'ENTITY_NAME_MEETING_METHOD',
  EntityNameMerchant = 'ENTITY_NAME_MERCHANT',
  EntityNameMessage = 'ENTITY_NAME_MESSAGE',
  EntityNameModule = 'ENTITY_NAME_MODULE',
  EntityNameModuleContent = 'ENTITY_NAME_MODULE_CONTENT',
  EntityNameOrder = 'ENTITY_NAME_ORDER',
  EntityNamePage = 'ENTITY_NAME_PAGE',
  EntityNamePaymentMethod = 'ENTITY_NAME_PAYMENT_METHOD',
  EntityNamePaymentSystem = 'ENTITY_NAME_PAYMENT_SYSTEM',
  EntityNamePlan = 'ENTITY_NAME_PLAN',
  EntityNamePriceList = 'ENTITY_NAME_PRICE_LIST',
  EntityNamePriceListOption = 'ENTITY_NAME_PRICE_LIST_OPTION',
  EntityNamePriceListProperty = 'ENTITY_NAME_PRICE_LIST_PROPERTY',
  EntityNameProduct = 'ENTITY_NAME_PRODUCT',
  EntityNameProductMeta = 'ENTITY_NAME_PRODUCT_META',
  EntityNameProfile = 'ENTITY_NAME_PROFILE',
  EntityNamePurchase = 'ENTITY_NAME_PURCHASE',
  EntityNameQuiz = 'ENTITY_NAME_QUIZ',
  EntityNameQuizContent = 'ENTITY_NAME_QUIZ_CONTENT',
  EntityNameQuizQuestion = 'ENTITY_NAME_QUIZ_QUESTION',
  EntityNameQuizQuestionContent = 'ENTITY_NAME_QUIZ_QUESTION_CONTENT',
  EntityNameQuizQuestionOption = 'ENTITY_NAME_QUIZ_QUESTION_OPTION',
  EntityNameQuizQuestionOptionQuizQuestion = 'ENTITY_NAME_QUIZ_QUESTION_OPTION_QUIZ_QUESTION',
  EntityNameRoom = 'ENTITY_NAME_ROOM',
  EntityNameSale = 'ENTITY_NAME_SALE',
  EntityNameSaleContent = 'ENTITY_NAME_SALE_CONTENT',
  EntityNameSurvey = 'ENTITY_NAME_SURVEY',
  EntityNameSurveyOption = 'ENTITY_NAME_SURVEY_OPTION',
  EntityNameSurveyQuestion = 'ENTITY_NAME_SURVEY_QUESTION',
  EntityNameTag = 'ENTITY_NAME_TAG',
  EntityNameTerm = 'ENTITY_NAME_TERM',
  EntityNameThread = 'ENTITY_NAME_THREAD',
  EntityNameThreadContent = 'ENTITY_NAME_THREAD_CONTENT',
  EntityNameTicket = 'ENTITY_NAME_TICKET',
  EntityNameTildaPage = 'ENTITY_NAME_TILDA_PAGE',
  EntityNameTildaProject = 'ENTITY_NAME_TILDA_PROJECT',
  EntityNameTransaction = 'ENTITY_NAME_TRANSACTION',
  EntityNameUser = 'ENTITY_NAME_USER',
  EntityNameUserVideoMark = 'ENTITY_NAME_USER_VIDEO_MARK',
  EntityNameVideo = 'ENTITY_NAME_VIDEO',
  EntityNameVideoMark = 'ENTITY_NAME_VIDEO_MARK',
  EntityNameVideoSubtitle = 'ENTITY_NAME_VIDEO_SUBTITLE'
}

export type Enums = {
  __typename?: 'Enums';
  AuthorEntityType?: Maybe<Array<Maybe<EnumPoint>>>;
  CategoryEntityType?: Maybe<Array<Maybe<EnumPoint>>>;
  CmsUserField?: Maybe<Array<Maybe<EnumPoint>>>;
  ConsultationDuration?: Maybe<Array<Maybe<EnumPoint>>>;
  CouponField?: Maybe<Array<Maybe<EnumPoint>>>;
  DocumentField?: Maybe<Array<Maybe<EnumPoint>>>;
  DocumentType?: Maybe<Array<Maybe<EnumPoint>>>;
  EntityName?: Maybe<Array<Maybe<EnumPoint>>>;
  FavoriteTarget?: Maybe<Array<Maybe<EnumPoint>>>;
  GiftEntityType?: Maybe<Array<Maybe<EnumPoint>>>;
  GraphQlSubscriptionType?: Maybe<Array<Maybe<EnumPoint>>>;
  HomeworkType?: Maybe<Array<Maybe<EnumPoint>>>;
  MessageAvatarTheme?: Maybe<Array<Maybe<EnumPoint>>>;
  MessageTheme?: Maybe<Array<Maybe<EnumPoint>>>;
  MessageType?: Maybe<Array<Maybe<EnumPoint>>>;
  PgJobState?: Maybe<Array<Maybe<EnumPoint>>>;
  PriceListPropertyType?: Maybe<Array<Maybe<EnumPoint>>>;
  PurchaseStatus?: Maybe<Array<Maybe<EnumPoint>>>;
  QuizQuestionType?: Maybe<Array<Maybe<EnumPoint>>>;
  QuizType?: Maybe<Array<Maybe<EnumPoint>>>;
  SaleType?: Maybe<Array<Maybe<EnumPoint>>>;
  SortType?: Maybe<Array<Maybe<EnumPoint>>>;
  SurveyQuestionType?: Maybe<Array<Maybe<EnumPoint>>>;
};

export enum EventName {
  EventNameAcceptTerm = 'EVENT_NAME_ACCEPT_TERM',
  EventNameAppointmentBook = 'EVENT_NAME_APPOINTMENT_BOOK',
  EventNameAppointmentBookMove = 'EVENT_NAME_APPOINTMENT_BOOK_MOVE',
  EventNameAppointmentCancel = 'EVENT_NAME_APPOINTMENT_CANCEL',
  EventNameAppointmentConsultationStartAfterDay = 'EVENT_NAME_APPOINTMENT_CONSULTATION_START_AFTER_DAY',
  EventNameAppointmentConsultationStartAfterHalfAnHour = 'EVENT_NAME_APPOINTMENT_CONSULTATION_START_AFTER_HALF_AN_HOUR',
  EventNameAppointmentCreate = 'EVENT_NAME_APPOINTMENT_CREATE',
  EventNameAppointmentDelete = 'EVENT_NAME_APPOINTMENT_DELETE',
  EventNameAppointmentUpdate = 'EVENT_NAME_APPOINTMENT_UPDATE',
  EventNameAppointmentUrlUpdate = 'EVENT_NAME_APPOINTMENT_URL_UPDATE',
  EventNameAudioCreate = 'EVENT_NAME_AUDIO_CREATE',
  EventNameAudioDelete = 'EVENT_NAME_AUDIO_DELETE',
  EventNameAudioMarkCreate = 'EVENT_NAME_AUDIO_MARK_CREATE',
  EventNameAudioMarkDelete = 'EVENT_NAME_AUDIO_MARK_DELETE',
  EventNameAudioUpdate = 'EVENT_NAME_AUDIO_UPDATE',
  EventNameAuthorCreate = 'EVENT_NAME_AUTHOR_CREATE',
  EventNameAuthorDelete = 'EVENT_NAME_AUTHOR_DELETE',
  EventNameAuthorUpdate = 'EVENT_NAME_AUTHOR_UPDATE',
  EventNameAvailableLesson = 'EVENT_NAME_AVAILABLE_LESSON',
  EventNameAvailableModule = 'EVENT_NAME_AVAILABLE_MODULE',
  EventNameBannerCreate = 'EVENT_NAME_BANNER_CREATE',
  EventNameBannerDelete = 'EVENT_NAME_BANNER_DELETE',
  EventNameBannerUpdate = 'EVENT_NAME_BANNER_UPDATE',
  EventNameCategoryCreate = 'EVENT_NAME_CATEGORY_CREATE',
  EventNameCategoryDelete = 'EVENT_NAME_CATEGORY_DELETE',
  EventNameCategoryUpdate = 'EVENT_NAME_CATEGORY_UPDATE',
  EventNameCmsDepartmentCreate = 'EVENT_NAME_CMS_DEPARTMENT_CREATE',
  EventNameCmsDepartmentDelete = 'EVENT_NAME_CMS_DEPARTMENT_DELETE',
  EventNameCmsDepartmentUpdate = 'EVENT_NAME_CMS_DEPARTMENT_UPDATE',
  EventNameCmsRoleCreate = 'EVENT_NAME_CMS_ROLE_CREATE',
  EventNameCmsRoleDelete = 'EVENT_NAME_CMS_ROLE_DELETE',
  EventNameCmsRoleUpdate = 'EVENT_NAME_CMS_ROLE_UPDATE',
  EventNameCmsUserCreate = 'EVENT_NAME_CMS_USER_CREATE',
  EventNameCmsUserDelete = 'EVENT_NAME_CMS_USER_DELETE',
  EventNameCmsUserLogin = 'EVENT_NAME_CMS_USER_LOGIN',
  EventNameCmsUserPasswordChange = 'EVENT_NAME_CMS_USER_PASSWORD_CHANGE',
  EventNameCmsUserPasswordForgotConfirm = 'EVENT_NAME_CMS_USER_PASSWORD_FORGOT_CONFIRM',
  EventNameCmsUserPasswordForgotRequest = 'EVENT_NAME_CMS_USER_PASSWORD_FORGOT_REQUEST',
  EventNameCmsUserUpdate = 'EVENT_NAME_CMS_USER_UPDATE',
  EventNameCmsUserUserLogin = 'EVENT_NAME_CMS_USER_USER_LOGIN',
  EventNameConsultationAvailable = 'EVENT_NAME_CONSULTATION_AVAILABLE',
  EventNameConsultationContentCreate = 'EVENT_NAME_CONSULTATION_CONTENT_CREATE',
  EventNameConsultationContentDelete = 'EVENT_NAME_CONSULTATION_CONTENT_DELETE',
  EventNameConsultationContentUpdate = 'EVENT_NAME_CONSULTATION_CONTENT_UPDATE',
  EventNameConsultationCreate = 'EVENT_NAME_CONSULTATION_CREATE',
  EventNameConsultationDelete = 'EVENT_NAME_CONSULTATION_DELETE',
  EventNameConsultationDuplicate = 'EVENT_NAME_CONSULTATION_DUPLICATE',
  EventNameConsultationFeedbackCreate = 'EVENT_NAME_CONSULTATION_FEEDBACK_CREATE',
  EventNameConsultationFeedbackDelete = 'EVENT_NAME_CONSULTATION_FEEDBACK_DELETE',
  EventNameConsultationFeedbackUpdate = 'EVENT_NAME_CONSULTATION_FEEDBACK_UPDATE',
  EventNameConsultationUpdate = 'EVENT_NAME_CONSULTATION_UPDATE',
  EventNameCouponCreate = 'EVENT_NAME_COUPON_CREATE',
  EventNameCouponDelete = 'EVENT_NAME_COUPON_DELETE',
  EventNameCouponGenerate = 'EVENT_NAME_COUPON_GENERATE',
  EventNameCouponUpdate = 'EVENT_NAME_COUPON_UPDATE',
  EventNameCourseContentCreate = 'EVENT_NAME_COURSE_CONTENT_CREATE',
  EventNameCourseContentDelete = 'EVENT_NAME_COURSE_CONTENT_DELETE',
  EventNameCourseContentUpdate = 'EVENT_NAME_COURSE_CONTENT_UPDATE',
  EventNameCourseCreate = 'EVENT_NAME_COURSE_CREATE',
  EventNameCourseDelete = 'EVENT_NAME_COURSE_DELETE',
  EventNameCourseDuplicate = 'EVENT_NAME_COURSE_DUPLICATE',
  EventNameCourseEndContentCreate = 'EVENT_NAME_COURSE_END_CONTENT_CREATE',
  EventNameCourseEndContentDelete = 'EVENT_NAME_COURSE_END_CONTENT_DELETE',
  EventNameCourseEndContentUpdate = 'EVENT_NAME_COURSE_END_CONTENT_UPDATE',
  EventNameCourseFeedbackCreate = 'EVENT_NAME_COURSE_FEEDBACK_CREATE',
  EventNameCourseFeedbackDelete = 'EVENT_NAME_COURSE_FEEDBACK_DELETE',
  EventNameCourseFeedbackUpdate = 'EVENT_NAME_COURSE_FEEDBACK_UPDATE',
  EventNameCourseTypeCreate = 'EVENT_NAME_COURSE_TYPE_CREATE',
  EventNameCourseTypeDelete = 'EVENT_NAME_COURSE_TYPE_DELETE',
  EventNameCourseTypeUpdate = 'EVENT_NAME_COURSE_TYPE_UPDATE',
  EventNameCourseUpdate = 'EVENT_NAME_COURSE_UPDATE',
  EventNameCurrencyCreate = 'EVENT_NAME_CURRENCY_CREATE',
  EventNameCurrencyUpdate = 'EVENT_NAME_CURRENCY_UPDATE',
  EventNameDocumentContentCreate = 'EVENT_NAME_DOCUMENT_CONTENT_CREATE',
  EventNameDocumentContentDelete = 'EVENT_NAME_DOCUMENT_CONTENT_DELETE',
  EventNameDocumentContentUpdate = 'EVENT_NAME_DOCUMENT_CONTENT_UPDATE',
  EventNameDocumentCreate = 'EVENT_NAME_DOCUMENT_CREATE',
  EventNameDocumentDelete = 'EVENT_NAME_DOCUMENT_DELETE',
  EventNameDocumentDuplicate = 'EVENT_NAME_DOCUMENT_DUPLICATE',
  EventNameDocumentUpdate = 'EVENT_NAME_DOCUMENT_UPDATE',
  EventNameFaqCreate = 'EVENT_NAME_FAQ_CREATE',
  EventNameFaqDelete = 'EVENT_NAME_FAQ_DELETE',
  EventNameFaqOptionCreate = 'EVENT_NAME_FAQ_OPTION_CREATE',
  EventNameFaqOptionDelete = 'EVENT_NAME_FAQ_OPTION_DELETE',
  EventNameFaqOptionUpdate = 'EVENT_NAME_FAQ_OPTION_UPDATE',
  EventNameFaqUpdate = 'EVENT_NAME_FAQ_UPDATE',
  EventNameFavoriteCreate = 'EVENT_NAME_FAVORITE_CREATE',
  EventNameFavoriteDelete = 'EVENT_NAME_FAVORITE_DELETE',
  EventNameFileCreate = 'EVENT_NAME_FILE_CREATE',
  EventNameFileDelete = 'EVENT_NAME_FILE_DELETE',
  EventNameGiftContentCreate = 'EVENT_NAME_GIFT_CONTENT_CREATE',
  EventNameGiftContentDelete = 'EVENT_NAME_GIFT_CONTENT_DELETE',
  EventNameGiftContentUpdate = 'EVENT_NAME_GIFT_CONTENT_UPDATE',
  EventNameGiftCreate = 'EVENT_NAME_GIFT_CREATE',
  EventNameGiftDelete = 'EVENT_NAME_GIFT_DELETE',
  EventNameGiftDuplicate = 'EVENT_NAME_GIFT_DUPLICATE',
  EventNameGiftUpdate = 'EVENT_NAME_GIFT_UPDATE',
  EventNameHomeworkContentCreate = 'EVENT_NAME_HOMEWORK_CONTENT_CREATE',
  EventNameHomeworkContentDelete = 'EVENT_NAME_HOMEWORK_CONTENT_DELETE',
  EventNameHomeworkContentUpdate = 'EVENT_NAME_HOMEWORK_CONTENT_UPDATE',
  EventNameHomeworkCreate = 'EVENT_NAME_HOMEWORK_CREATE',
  EventNameHomeworkDelete = 'EVENT_NAME_HOMEWORK_DELETE',
  EventNameHomeworkDuplicate = 'EVENT_NAME_HOMEWORK_DUPLICATE',
  EventNameHomeworkFluentContentCreate = 'EVENT_NAME_HOMEWORK_FLUENT_CONTENT_CREATE',
  EventNameHomeworkFluentContentDelete = 'EVENT_NAME_HOMEWORK_FLUENT_CONTENT_DELETE',
  EventNameHomeworkFluentContentUpdate = 'EVENT_NAME_HOMEWORK_FLUENT_CONTENT_UPDATE',
  EventNameHomeworkFluentScore = 'EVENT_NAME_HOMEWORK_FLUENT_SCORE',
  EventNameHomeworkResultCreate = 'EVENT_NAME_HOMEWORK_RESULT_CREATE',
  EventNameHomeworkResultDelete = 'EVENT_NAME_HOMEWORK_RESULT_DELETE',
  EventNameHomeworkResultUpdate = 'EVENT_NAME_HOMEWORK_RESULT_UPDATE',
  EventNameHomeworkTestQuestionContentCreate = 'EVENT_NAME_HOMEWORK_TEST_QUESTION_CONTENT_CREATE',
  EventNameHomeworkTestQuestionContentDelete = 'EVENT_NAME_HOMEWORK_TEST_QUESTION_CONTENT_DELETE',
  EventNameHomeworkTestQuestionContentUpdate = 'EVENT_NAME_HOMEWORK_TEST_QUESTION_CONTENT_UPDATE',
  EventNameHomeworkUpdate = 'EVENT_NAME_HOMEWORK_UPDATE',
  EventNameImageCreate = 'EVENT_NAME_IMAGE_CREATE',
  EventNameImageDelete = 'EVENT_NAME_IMAGE_DELETE',
  EventNameImageUpdate = 'EVENT_NAME_IMAGE_UPDATE',
  EventNameIndexChange = 'EVENT_NAME_INDEX_CHANGE',
  EventNameInitiatorCmsUser = 'EVENT_NAME_INITIATOR_CMS_USER',
  EventNameInitiatorCommonUser = 'EVENT_NAME_INITIATOR_COMMON_USER',
  EventNameLanguageCreate = 'EVENT_NAME_LANGUAGE_CREATE',
  EventNameLanguageUpdate = 'EVENT_NAME_LANGUAGE_UPDATE',
  EventNameLessonContentCreate = 'EVENT_NAME_LESSON_CONTENT_CREATE',
  EventNameLessonContentDelete = 'EVENT_NAME_LESSON_CONTENT_DELETE',
  EventNameLessonContentUpdate = 'EVENT_NAME_LESSON_CONTENT_UPDATE',
  EventNameLessonCreate = 'EVENT_NAME_LESSON_CREATE',
  EventNameLessonDelete = 'EVENT_NAME_LESSON_DELETE',
  EventNameLessonDone = 'EVENT_NAME_LESSON_DONE',
  EventNameLessonDuplicate = 'EVENT_NAME_LESSON_DUPLICATE',
  EventNameLessonUpdate = 'EVENT_NAME_LESSON_UPDATE',
  EventNameMeetingMethodCreate = 'EVENT_NAME_MEETING_METHOD_CREATE',
  EventNameMeetingMethodDelete = 'EVENT_NAME_MEETING_METHOD_DELETE',
  EventNameMeetingMethodUpdate = 'EVENT_NAME_MEETING_METHOD_UPDATE',
  EventNameMerchantCreate = 'EVENT_NAME_MERCHANT_CREATE',
  EventNameMerchantUpdate = 'EVENT_NAME_MERCHANT_UPDATE',
  EventNameModuleContentCreate = 'EVENT_NAME_MODULE_CONTENT_CREATE',
  EventNameModuleContentDelete = 'EVENT_NAME_MODULE_CONTENT_DELETE',
  EventNameModuleContentUpdate = 'EVENT_NAME_MODULE_CONTENT_UPDATE',
  EventNameModuleCreate = 'EVENT_NAME_MODULE_CREATE',
  EventNameModuleDelete = 'EVENT_NAME_MODULE_DELETE',
  EventNameModuleDone = 'EVENT_NAME_MODULE_DONE',
  EventNameModuleDuplicate = 'EVENT_NAME_MODULE_DUPLICATE',
  EventNameModuleUpdate = 'EVENT_NAME_MODULE_UPDATE',
  EventNameNewThreadInCourse = 'EVENT_NAME_NEW_THREAD_IN_COURSE',
  EventNameOrderCheck = 'EVENT_NAME_ORDER_CHECK',
  EventNameOrderCreate = 'EVENT_NAME_ORDER_CREATE',
  EventNameOrderError = 'EVENT_NAME_ORDER_ERROR',
  EventNameOrderSuccess = 'EVENT_NAME_ORDER_SUCCESS',
  EventNamePageCreate = 'EVENT_NAME_PAGE_CREATE',
  EventNamePageDelete = 'EVENT_NAME_PAGE_DELETE',
  EventNamePageUpdate = 'EVENT_NAME_PAGE_UPDATE',
  EventNamePaymentMethodUpdate = 'EVENT_NAME_PAYMENT_METHOD_UPDATE',
  EventNamePaymentSystemUpdate = 'EVENT_NAME_PAYMENT_SYSTEM_UPDATE',
  EventNamePlanCreate = 'EVENT_NAME_PLAN_CREATE',
  EventNamePlanDuplicate = 'EVENT_NAME_PLAN_DUPLICATE',
  EventNamePlanUpdate = 'EVENT_NAME_PLAN_UPDATE',
  EventNamePriceListCreate = 'EVENT_NAME_PRICE_LIST_CREATE',
  EventNamePriceListDelete = 'EVENT_NAME_PRICE_LIST_DELETE',
  EventNamePriceListOptionCreate = 'EVENT_NAME_PRICE_LIST_OPTION_CREATE',
  EventNamePriceListOptionDelete = 'EVENT_NAME_PRICE_LIST_OPTION_DELETE',
  EventNamePriceListOptionUpdate = 'EVENT_NAME_PRICE_LIST_OPTION_UPDATE',
  EventNamePriceListPropertyCreate = 'EVENT_NAME_PRICE_LIST_PROPERTY_CREATE',
  EventNamePriceListPropertyDelete = 'EVENT_NAME_PRICE_LIST_PROPERTY_DELETE',
  EventNamePriceListPropertyUpdate = 'EVENT_NAME_PRICE_LIST_PROPERTY_UPDATE',
  EventNamePriceListUpdate = 'EVENT_NAME_PRICE_LIST_UPDATE',
  EventNameProductMetaCreate = 'EVENT_NAME_PRODUCT_META_CREATE',
  EventNameProductMetaUpdate = 'EVENT_NAME_PRODUCT_META_UPDATE',
  EventNameProductUpdate = 'EVENT_NAME_PRODUCT_UPDATE',
  EventNameProductUpgrade = 'EVENT_NAME_PRODUCT_UPGRADE',
  EventNameProfileUpdate = 'EVENT_NAME_PROFILE_UPDATE',
  EventNamePurchaseUse = 'EVENT_NAME_PURCHASE_USE',
  EventNameQuizContentCreate = 'EVENT_NAME_QUIZ_CONTENT_CREATE',
  EventNameQuizContentDelete = 'EVENT_NAME_QUIZ_CONTENT_DELETE',
  EventNameQuizContentUpdate = 'EVENT_NAME_QUIZ_CONTENT_UPDATE',
  EventNameQuizCreate = 'EVENT_NAME_QUIZ_CREATE',
  EventNameQuizDelete = 'EVENT_NAME_QUIZ_DELETE',
  EventNameQuizQuestionContentCreate = 'EVENT_NAME_QUIZ_QUESTION_CONTENT_CREATE',
  EventNameQuizQuestionContentDelete = 'EVENT_NAME_QUIZ_QUESTION_CONTENT_DELETE',
  EventNameQuizQuestionContentUpdate = 'EVENT_NAME_QUIZ_QUESTION_CONTENT_UPDATE',
  EventNameQuizQuestionCreate = 'EVENT_NAME_QUIZ_QUESTION_CREATE',
  EventNameQuizQuestionDelete = 'EVENT_NAME_QUIZ_QUESTION_DELETE',
  EventNameQuizQuestionUpdate = 'EVENT_NAME_QUIZ_QUESTION_UPDATE',
  EventNameQuizUpdate = 'EVENT_NAME_QUIZ_UPDATE',
  EventNameRegistration = 'EVENT_NAME_REGISTRATION',
  EventNameRoomNewMessage = 'EVENT_NAME_ROOM_NEW_MESSAGE',
  EventNameRoomNewMessageFromCurator = 'EVENT_NAME_ROOM_NEW_MESSAGE_FROM_CURATOR',
  EventNameRoomReplyToMessage = 'EVENT_NAME_ROOM_REPLY_TO_MESSAGE',
  EventNameRoomUserBan = 'EVENT_NAME_ROOM_USER_BAN',
  EventNameRoomUserUnban = 'EVENT_NAME_ROOM_USER_UNBAN',
  EventNameSaleContentCreate = 'EVENT_NAME_SALE_CONTENT_CREATE',
  EventNameSaleContentDelete = 'EVENT_NAME_SALE_CONTENT_DELETE',
  EventNameSaleContentUpdate = 'EVENT_NAME_SALE_CONTENT_UPDATE',
  EventNameSaleCreate = 'EVENT_NAME_SALE_CREATE',
  EventNameSaleDelete = 'EVENT_NAME_SALE_DELETE',
  EventNameSaleUpdate = 'EVENT_NAME_SALE_UPDATE',
  EventNameSurveyCreate = 'EVENT_NAME_SURVEY_CREATE',
  EventNameSurveyDelete = 'EVENT_NAME_SURVEY_DELETE',
  EventNameSurveyDuplicate = 'EVENT_NAME_SURVEY_DUPLICATE',
  EventNameSurveyUpdate = 'EVENT_NAME_SURVEY_UPDATE',
  EventNameTagCreate = 'EVENT_NAME_TAG_CREATE',
  EventNameTagDelete = 'EVENT_NAME_TAG_DELETE',
  EventNameTagUpdate = 'EVENT_NAME_TAG_UPDATE',
  EventNameThreadChangedByUser = 'EVENT_NAME_THREAD_CHANGED_BY_USER',
  EventNameThreadContentCreate = 'EVENT_NAME_THREAD_CONTENT_CREATE',
  EventNameThreadContentDelete = 'EVENT_NAME_THREAD_CONTENT_DELETE',
  EventNameThreadContentUpdate = 'EVENT_NAME_THREAD_CONTENT_UPDATE',
  EventNameThreadCreate = 'EVENT_NAME_THREAD_CREATE',
  EventNameThreadDoneByUser = 'EVENT_NAME_THREAD_DONE_BY_USER',
  EventNameThreadDuplicate = 'EVENT_NAME_THREAD_DUPLICATE',
  EventNameThreadFreeActivatedByUser = 'EVENT_NAME_THREAD_FREE_ACTIVATED_BY_USER',
  EventNameThreadLeaveByUser = 'EVENT_NAME_THREAD_LEAVE_BY_USER',
  EventNameThreadUpdate = 'EVENT_NAME_THREAD_UPDATE',
  EventNameTicketCreate = 'EVENT_NAME_TICKET_CREATE',
  EventNameTicketUpdate = 'EVENT_NAME_TICKET_UPDATE',
  EventNameTildaPageCreate = 'EVENT_NAME_TILDA_PAGE_CREATE',
  EventNameTildaPageUpdate = 'EVENT_NAME_TILDA_PAGE_UPDATE',
  EventNameTildaProjectsUpdate = 'EVENT_NAME_TILDA_PROJECTS_UPDATE',
  EventNameTransaction = 'EVENT_NAME_TRANSACTION',
  EventNameUnpaidOrder = 'EVENT_NAME_UNPAID_ORDER',
  EventNameUserCreate = 'EVENT_NAME_USER_CREATE',
  EventNameUserDelete = 'EVENT_NAME_USER_DELETE',
  EventNameUserDeleteAvatar = 'EVENT_NAME_USER_DELETE_AVATAR',
  EventNameUserGenerate = 'EVENT_NAME_USER_GENERATE',
  EventNameUserJoinedToThread = 'EVENT_NAME_USER_JOINED_TO_THREAD',
  EventNameUserJoinRoom = 'EVENT_NAME_USER_JOIN_ROOM',
  EventNameUserLogin = 'EVENT_NAME_USER_LOGIN',
  EventNameUserMe = 'EVENT_NAME_USER_ME',
  EventNameUserPasswordChange = 'EVENT_NAME_USER_PASSWORD_CHANGE',
  EventNameUserPasswordForgotConfirm = 'EVENT_NAME_USER_PASSWORD_FORGOT_CONFIRM',
  EventNameUserPasswordForgotRequest = 'EVENT_NAME_USER_PASSWORD_FORGOT_REQUEST',
  EventNameUserThreadChange = 'EVENT_NAME_USER_THREAD_CHANGE',
  EventNameUserThreadDone = 'EVENT_NAME_USER_THREAD_DONE',
  EventNameUserThreadFreeActivate = 'EVENT_NAME_USER_THREAD_FREE_ACTIVATE',
  EventNameUserThreadLeave = 'EVENT_NAME_USER_THREAD_LEAVE',
  EventNameUserThreadPlanActivate = 'EVENT_NAME_USER_THREAD_PLAN_ACTIVATE',
  EventNameUserTrialActivate = 'EVENT_NAME_USER_TRIAL_ACTIVATE',
  EventNameUserUpdate = 'EVENT_NAME_USER_UPDATE',
  EventNameUserUpdateMe = 'EVENT_NAME_USER_UPDATE_ME',
  EventNameUserVideoMarkCreate = 'EVENT_NAME_USER_VIDEO_MARK_CREATE',
  EventNameUserVideoMarkDelete = 'EVENT_NAME_USER_VIDEO_MARK_DELETE',
  EventNameUserVideoMarkUpdate = 'EVENT_NAME_USER_VIDEO_MARK_UPDATE',
  EventNameVideoCreate = 'EVENT_NAME_VIDEO_CREATE',
  EventNameVideoDelete = 'EVENT_NAME_VIDEO_DELETE',
  EventNameVideoMarkCreate = 'EVENT_NAME_VIDEO_MARK_CREATE',
  EventNameVideoMarkDelete = 'EVENT_NAME_VIDEO_MARK_DELETE',
  EventNameVideoSubtitlesCreate = 'EVENT_NAME_VIDEO_SUBTITLES_CREATE',
  EventNameVideoSubtitlesDelete = 'EVENT_NAME_VIDEO_SUBTITLES_DELETE',
  EventNameVideoUpdate = 'EVENT_NAME_VIDEO_UPDATE'
}

export enum EventType {
  EventNameCourseTypeCreate = 'EVENT_NAME_COURSE_TYPE_CREATE',
  EventNameCourseTypeDelete = 'EVENT_NAME_COURSE_TYPE_DELETE',
  EventNameCourseTypeUpdate = 'EVENT_NAME_COURSE_TYPE_UPDATE'
}

export type FaAppointment = {
  __typename?: 'FAAppointment';
  Consultation?: Maybe<Consultation>;
  User?: Maybe<User>;
  active?: Maybe<Scalars['Boolean']>;
  consultationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  startAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
};

export type FaAudio = {
  __typename?: 'FAAudio';
  AudioFile?: Maybe<AudioFile>;
  AudioMarks?: Maybe<Array<Maybe<Mark>>>;
  Subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaAuthor = {
  __typename?: 'FAAuthor';
  avatar?: Maybe<Array<Maybe<Media>>>;
  description?: Maybe<Scalars['MultiLanguage']>;
  fullName?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  landingUrl?: Maybe<Scalars['String']>;
  regalia?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<AuthorEntityType>;
};

export type FaAuthorTranslate = {
  __typename?: 'FAAuthorTranslate';
  avatar?: Maybe<Array<Maybe<Media>>>;
  description?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  landingUrl?: Maybe<Scalars['String']>;
  regalia?: Maybe<Scalars['String']>;
  type?: Maybe<AuthorEntityType>;
};

export type FaBanner = {
  __typename?: 'FABanner';
  Sale?: Maybe<FaSale>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['Int']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  oldPrice?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['MultiLanguage']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  titleUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
};

export type FaCard = {
  __typename?: 'FACard';
  User?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  masked?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  status?: Maybe<CardStatus>;
  type?: Maybe<CardType>;
};

export type FaCategory = {
  __typename?: 'FACategory';
  displayName?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isGeneral?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<CategoryEntityType>;
};

export type FaCategoryTranslate = {
  __typename?: 'FACategoryTranslate';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isGeneral?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<CategoryEntityType>;
};

export type FaConsultation = {
  __typename?: 'FAConsultation';
  Author?: Maybe<FaAuthor>;
  Categories?: Maybe<Array<Maybe<FaCategory>>>;
  Consultant?: Maybe<User>;
  ConsultationContents?: Maybe<Array<Maybe<Content>>>;
  ConsultationFeedbacks?: Maybe<Array<Maybe<FaFeedback>>>;
  Curators?: Maybe<Array<Maybe<User>>>;
  Faq?: Maybe<FaFaq>;
  Languages?: Maybe<Array<Maybe<FaLanguage>>>;
  MeetingMethod?: Maybe<MeetingMethod>;
  Product?: Maybe<FaProduct>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  active?: Maybe<Scalars['Boolean']>;
  beforeBookingDuration?: Maybe<Scalars['Interval']>;
  beforeCancelDuration?: Maybe<Scalars['Interval']>;
  defaultUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  duration: ConsultationDuration;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['MultiLanguage']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  zohoProductId?: Maybe<Scalars['String']>;
};

export type FaConsultationTranslate = {
  __typename?: 'FAConsultationTranslate';
  Author?: Maybe<FaAuthorTranslate>;
  Categories?: Maybe<Array<Maybe<FaCategoryTranslate>>>;
  Consultant?: Maybe<User>;
  ConsultationContents?: Maybe<Array<Maybe<Content>>>;
  ConsultationFeedbacks?: Maybe<Array<Maybe<FaFeedback>>>;
  Curators?: Maybe<Array<Maybe<User>>>;
  Languages?: Maybe<Array<Maybe<FaLanguage>>>;
  MeetingMethod?: Maybe<MeetingMethod>;
  Product?: Maybe<FaProductTranslate>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  active?: Maybe<Scalars['Boolean']>;
  beforeBookingDuration?: Maybe<Scalars['Interval']>;
  beforeCancelDuration?: Maybe<Scalars['Interval']>;
  defaultUrl?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  duration: ConsultationDuration;
  hasAppointment?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FaCourse = {
  __typename?: 'FACourse';
  Authors?: Maybe<Array<Maybe<FaAuthor>>>;
  Categories?: Maybe<Array<Maybe<FaCategory>>>;
  CourseContents?: Maybe<Array<Maybe<Content>>>;
  CourseEndContents?: Maybe<Array<Maybe<Content>>>;
  CourseFeedbacks?: Maybe<Array<Maybe<FaFeedback>>>;
  Faq?: Maybe<FaFaq>;
  Gifts?: Maybe<Array<Maybe<FaGift>>>;
  Modules?: Maybe<Array<Maybe<FaModule>>>;
  Product?: Maybe<FaProduct>;
  RecommendedCourses?: Maybe<Array<Maybe<FaCourse>>>;
  Survey?: Maybe<FaSurvey>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  active?: Maybe<Scalars['Boolean']>;
  audioDuration?: Maybe<Scalars['Interval']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  exclusive?: Maybe<Scalars['Boolean']>;
  freeDescription?: Maybe<Scalars['MultiLanguage']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeModuleCount?: Maybe<Scalars['Int']>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['MultiLanguage']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  initStudentsCount?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['MultiLanguage']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  publishedThreadsCount?: Maybe<Scalars['Int']>;
  realStudentsCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  studentsCount?: Maybe<Scalars['Int']>;
  threadsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  videoDuration?: Maybe<Scalars['Interval']>;
};

export type FaCourseTranslate = {
  __typename?: 'FACourseTranslate';
  Authors?: Maybe<Array<Maybe<FaAuthorTranslate>>>;
  Categories?: Maybe<Array<Maybe<FaCategoryTranslate>>>;
  CourseContents?: Maybe<Array<Maybe<Content>>>;
  CourseEndContents?: Maybe<Array<Maybe<Content>>>;
  Gifts?: Maybe<Array<Maybe<FaGiftTranslate>>>;
  Modules?: Maybe<Array<Maybe<FaModuleTranslate>>>;
  Survey?: Maybe<FaSurveyTranslate>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  active?: Maybe<Scalars['Boolean']>;
  audioDuration?: Maybe<Scalars['Interval']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  exclusive?: Maybe<Scalars['Boolean']>;
  freeDescription?: Maybe<Scalars['String']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeModuleCount?: Maybe<Scalars['Int']>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  initStudentsCount?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  publishedThreadsCount?: Maybe<Scalars['Int']>;
  realStudentsCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  studentsCount?: Maybe<Scalars['Int']>;
  studentsFeedback?: Maybe<Scalars['GraphQLJSON']>;
  threadsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  videoDuration?: Maybe<Scalars['Interval']>;
};

export type FaCurrency = {
  __typename?: 'FACurrency';
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  default?: Maybe<Scalars['Boolean']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaDocument = {
  __typename?: 'FADocument';
  Author?: Maybe<FaAuthor>;
  Categories?: Maybe<Array<Maybe<FaCategory>>>;
  Course?: Maybe<FaCourse>;
  DocumentContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  chatCreated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  durationLabel?: Maybe<LearnDuration>;
  externalVideoUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  initStudentsCount?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['MultiLanguage']>;
  publishDate?: Maybe<Scalars['Date']>;
  quizQuestionCount?: Maybe<Scalars['Int']>;
  realStudentsCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<DocumentType>;
  url?: Maybe<Scalars['String']>;
  usersImages?: Maybe<Array<Maybe<Array<Maybe<Media>>>>>;
  visibleSince?: Maybe<Scalars['Date']>;
  visibleUntil?: Maybe<Scalars['Date']>;
};

export type FaDocumentTranslate = {
  __typename?: 'FADocumentTranslate';
  Author?: Maybe<FaAuthorTranslate>;
  Categories?: Maybe<Array<Maybe<FaCategoryTranslate>>>;
  Course?: Maybe<FaCourseTranslate>;
  DocumentContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  chatCreated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  durationLabel?: Maybe<LearnDuration>;
  externalVideoUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  quizQuestionCount?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DocumentType>;
  url?: Maybe<Scalars['String']>;
  visibleSince?: Maybe<Scalars['Date']>;
  visibleUntil?: Maybe<Scalars['Date']>;
};

export type FaFaq = {
  __typename?: 'FAFaq';
  FaqOptions?: Maybe<Array<Maybe<FaFaqOption>>>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type FaFaqOption = {
  __typename?: 'FAFaqOption';
  body?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaFeedback = {
  __typename?: 'FAFeedback';
  avatar?: Maybe<Array<Maybe<Media>>>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  regalia?: Maybe<Scalars['MultiLanguage']>;
  text?: Maybe<Scalars['String']>;
};

export type FaGift = {
  __typename?: 'FAGift';
  Document?: Maybe<FaDocument>;
  GiftContents?: Maybe<Array<Maybe<Content>>>;
  Tariff?: Maybe<FaTariff>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isReusable?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<GiftEntityType>;
};

export type FaGiftTranslate = {
  __typename?: 'FAGiftTranslate';
  Document?: Maybe<FaDocumentTranslate>;
  GiftContents?: Maybe<Array<Maybe<Content>>>;
  Tariff?: Maybe<FaTariff>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<GiftEntityType>;
};

export type FaHomework = {
  __typename?: 'FAHomework';
  HomeworkContents?: Maybe<Array<Maybe<Content>>>;
  HomeworkFluentContents?: Maybe<Array<Maybe<Content>>>;
  HomeworkTasks?: Maybe<Array<Maybe<FaHomeworkTask>>>;
  HomeworkTestQuestions?: Maybe<Array<Maybe<FaHomeworkTestQuestion>>>;
  Lesson?: Maybe<FaLesson>;
  Module?: Maybe<FaModule>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  maxScore?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<HomeworkType>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaHomeworkTask = {
  __typename?: 'FAHomeworkTask';
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaHomeworkTestQuestion = {
  __typename?: 'FAHomeworkTestQuestion';
  HomeworkTestQuestionContents?: Maybe<Array<Maybe<Content>>>;
  HomeworkTestQuestionOptions?: Maybe<Array<Maybe<FaHomeworkTestQuestionOption>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<HomeworkQuestionType>;
};

export type FaHomeworkTestQuestionOption = {
  __typename?: 'FAHomeworkTestQuestionOption';
  clarification?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaHomeworkTranslate = {
  __typename?: 'FAHomeworkTranslate';
  HomeworkContents?: Maybe<Array<Maybe<Content>>>;
  HomeworkTasks?: Maybe<Array<Maybe<FaHomeworkTask>>>;
  HomeworkTestQuestions?: Maybe<Array<Maybe<FaHomeworkTestQuestion>>>;
  Lesson?: Maybe<FaLessonTranslate>;
  Module?: Maybe<FaModuleTranslate>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<HomeworkType>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaLanguage = {
  __typename?: 'FALanguage';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
};

export type FaLesson = {
  __typename?: 'FALesson';
  Author?: Maybe<FaAuthor>;
  Homework?: Maybe<Array<Maybe<FaHomework>>>;
  LessonContents?: Maybe<Array<Maybe<Content>>>;
  Module?: Maybe<FaModule>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaLessonTranslate = {
  __typename?: 'FALessonTranslate';
  Author?: Maybe<FaAuthor>;
  Homework?: Maybe<Array<Maybe<FaHomeworkTranslate>>>;
  LessonContents?: Maybe<Array<Maybe<Content>>>;
  Module?: Maybe<FaModule>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaMerchant = {
  __typename?: 'FAMerchant';
  PaymentSystem?: Maybe<FaPaymentSystem>;
  displayName?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<MerchantMeta>;
  residentOfUkraine?: Maybe<Scalars['Boolean']>;
};

export type FaModule = {
  __typename?: 'FAModule';
  Homework?: Maybe<Array<Maybe<FaHomework>>>;
  Lessons?: Maybe<Array<Maybe<FaLesson>>>;
  ModuleContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  courseId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isFree?: Maybe<Scalars['Boolean']>;
  lessonsCount?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Float']>;
  root?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaModuleTranslate = {
  __typename?: 'FAModuleTranslate';
  Homework?: Maybe<Array<Maybe<FaHomeworkTranslate>>>;
  Lessons?: Maybe<Array<Maybe<FaLessonTranslate>>>;
  ModuleContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  courseId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isFree?: Maybe<Scalars['Boolean']>;
  lessonsCount?: Maybe<Scalars['Int']>;
  root?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FaOrder = {
  __typename?: 'FAOrder';
  Merchant?: Maybe<FaMerchant>;
  Owner?: Maybe<User>;
  Payer?: Maybe<User>;
  Products?: Maybe<Array<Maybe<FaProduct>>>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  paidDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Int']>;
};

export type FaOrderTranslate = {
  __typename?: 'FAOrderTranslate';
  Merchant?: Maybe<FaMerchant>;
  Owner?: Maybe<User>;
  Payer?: Maybe<User>;
  Products?: Maybe<Array<Maybe<FaProductTranslate>>>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  paidDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Int']>;
};

export type FaPaymentMethod = {
  __typename?: 'FAPaymentMethod';
  DefaultMerchant?: Maybe<FaMerchant>;
  Faq?: Maybe<FaFaq>;
  GlobalMerchant?: Maybe<FaMerchant>;
  displayName?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type FaPaymentSystem = {
  __typename?: 'FAPaymentSystem';
  Merchants?: Maybe<Array<Maybe<FaMerchant>>>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type FaPlan = {
  __typename?: 'FAPlan';
  Product?: Maybe<FaProduct>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  duePeriod?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Duration']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  infinity?: Maybe<Scalars['Boolean']>;
  landingUrl?: Maybe<Scalars['String']>;
  lifetime?: Maybe<Scalars['Boolean']>;
  productId?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['MultiLanguage']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  trialPeriod?: Maybe<Scalars['Int']>;
};

export type FaPlanTranslate = {
  __typename?: 'FAPlanTranslate';
  Product?: Maybe<FaProductTranslate>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  duePeriod?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Duration']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  infinity?: Maybe<Scalars['Boolean']>;
  landingUrl?: Maybe<Scalars['String']>;
  lifetime?: Maybe<Scalars['Boolean']>;
  productId?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trialPeriod?: Maybe<Scalars['Int']>;
};

export type FaPriceList = {
  __typename?: 'FAPriceList';
  Product?: Maybe<FaProduct>;
  Sale?: Maybe<FaSale>;
  Tariff?: Maybe<FaTariff>;
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isHighlight?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaPriceListOption = {
  __typename?: 'FAPriceListOption';
  PriceListProperties?: Maybe<Array<Maybe<FaPriceListProperty>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaPriceListOptionTranslate = {
  __typename?: 'FAPriceListOptionTranslate';
  PriceListProperties?: Maybe<Array<Maybe<FaPriceListPropertyTranslate>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FaPriceListProperty = {
  __typename?: 'FAPriceListProperty';
  PriceList?: Maybe<FaPriceList>;
  PriceListOption?: Maybe<FaPriceListOption>;
  boolValue?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  stringValue?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<PriceListPropertyType>;
};

export type FaPriceListPropertyTranslate = {
  __typename?: 'FAPriceListPropertyTranslate';
  PriceList?: Maybe<FaPriceListTranslate>;
  PriceListOption?: Maybe<FaPriceListOptionTranslate>;
  boolValue?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  stringValue?: Maybe<Scalars['String']>;
  type?: Maybe<PriceListPropertyType>;
};

export type FaPriceListTranslate = {
  __typename?: 'FAPriceListTranslate';
  Product?: Maybe<FaProductTranslate>;
  Sale?: Maybe<FaSale>;
  Tariff?: Maybe<FaTariff>;
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isHighlight?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type FaProduct = {
  __typename?: 'FAProduct';
  Consultation?: Maybe<FaConsultation>;
  Course?: Maybe<FaCourse>;
  Faq?: Maybe<FaFaq>;
  Merchant?: Maybe<FaMerchant>;
  Plan?: Maybe<FaPlan>;
  Tariffs?: Maybe<Array<Maybe<FaTariff>>>;
  Thread?: Maybe<FaThread>;
  availableBySubscription?: Maybe<Scalars['Boolean']>;
  availableDuration?: Maybe<Scalars['Duration']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  forSale?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  landingUrl?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  productMeta?: Maybe<Scalars['GraphQLJSON']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaProductTranslate = {
  __typename?: 'FAProductTranslate';
  Consultation?: Maybe<FaConsultationTranslate>;
  Course?: Maybe<FaCourseTranslate>;
  Plan?: Maybe<FaPlanTranslate>;
  Thread?: Maybe<FaThreadTranslate>;
  availableDuration?: Maybe<Scalars['Duration']>;
  description?: Maybe<Scalars['String']>;
  forSale?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  landingUrl?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  productMeta?: Maybe<Scalars['GraphQLJSON']>;
  title?: Maybe<Scalars['String']>;
};

export type FaPurchase = {
  __typename?: 'FAPurchase';
  Order?: Maybe<FaOrderTranslate>;
  Product?: Maybe<Product>;
  Tariff?: Maybe<Tariff>;
  User?: Maybe<User>;
  availableTo?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<PurchaseStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaQuiz = {
  __typename?: 'FAQuiz';
  QuizContents?: Maybe<Array<Maybe<Content>>>;
  QuizQuestions?: Maybe<Array<Maybe<FaQuizQuestion>>>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  duration?: Maybe<Scalars['Interval']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['MultiLanguage']>;
  questionCount?: Maybe<Scalars['Int']>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<QuizType>;
  updatedAt?: Maybe<Scalars['Date']>;
  usersImages?: Maybe<Array<Maybe<Array<Maybe<Media>>>>>;
};

export type FaQuizQuestion = {
  __typename?: 'FAQuizQuestion';
  Quiz?: Maybe<FaQuiz>;
  QuizQuestionContents?: Maybe<Array<Maybe<Content>>>;
  QuizQuestionOptions?: Maybe<Array<Maybe<FaQuizQuestionOption>>>;
  forGuest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<QuizQuestionType>;
};

export type FaQuizQuestionOption = {
  __typename?: 'FAQuizQuestionOption';
  NextQuestions?: Maybe<Array<Maybe<FaQuizQuestion>>>;
  QuizQuestion?: Maybe<FaQuizQuestion>;
  QuizQuestionOptionGroup?: Maybe<FaQuizQuestionOptionGroup>;
  RateDuration?: Maybe<QuizQuestionOptionRateDuration>;
  RecommendedConsultation?: Maybe<FaConsultation>;
  RecommendedCourse?: Maybe<FaCourse>;
  RecommendedDocument?: Maybe<FaDocument>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['MultiLanguage']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  updatedAt?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['Int']>;
};

export type FaQuizQuestionOptionGroup = {
  __typename?: 'FAQuizQuestionOptionGroup';
  description?: Maybe<Scalars['MultiLanguage']>;
  iconDisabled?: Maybe<Array<Maybe<Media>>>;
  iconEnabled?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaQuizQuestionOptionGroupTranslate = {
  __typename?: 'FAQuizQuestionOptionGroupTranslate';
  description?: Maybe<Scalars['String']>;
  iconDisabled?: Maybe<Array<Maybe<Media>>>;
  iconEnabled?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FaQuizQuestionOptionQuizQuestion = {
  __typename?: 'FAQuizQuestionOptionQuizQuestion';
  QuizOption?: Maybe<FaQuizQuestionOption>;
  QuizQuestion?: Maybe<FaQuizQuestion>;
  index?: Maybe<Scalars['Int']>;
};

export type FaQuizResult = {
  __typename?: 'FAQuizResult';
  Quiz?: Maybe<Quiz>;
  QuizRecommendationResults?: Maybe<Array<Maybe<QuizRecommendationResult>>>;
  QuizRecommendedConsultationResults?: Maybe<Array<Maybe<QuizRecommendedConsultationResult>>>;
  QuizRecommendedCourseResults?: Maybe<Array<Maybe<QuizRecommendedCourseResult>>>;
  QuizRecommendedDocumentResults?: Maybe<Array<Maybe<QuizRecommendedDocumentResult>>>;
  User?: Maybe<User>;
};

export type FaQuizTranslate = {
  __typename?: 'FAQuizTranslate';
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Interval']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuizType>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FaSale = {
  __typename?: 'FASale';
  AvailableProducts?: Maybe<Array<Maybe<FaProduct>>>;
  Coupons?: Maybe<Array<Maybe<Coupon>>>;
  PaymentSystems?: Maybe<Array<Maybe<PaymentSystem>>>;
  SaleContents?: Maybe<Array<Maybe<Content>>>;
  ShouldHaveProducts?: Maybe<Array<Maybe<FaProduct>>>;
  UserAccess?: Maybe<Array<Maybe<User>>>;
  active?: Maybe<Scalars['Boolean']>;
  activeFrom: Scalars['Date'];
  activeTo?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  discount: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  multiUse: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type: SaleType;
  useCountPerUser?: Maybe<Scalars['Int']>;
  useCountTotal?: Maybe<Scalars['Int']>;
};

export type FaSubscription = {
  __typename?: 'FASubscription';
  PaymentSystem?: Maybe<FaPaymentSystem>;
  Plan?: Maybe<FaPlan>;
  User?: Maybe<User>;
  activationsLeft?: Maybe<Scalars['Int']>;
  activationsUsed?: Maybe<Scalars['Int']>;
  activeEndDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  isTrial?: Maybe<Scalars['Boolean']>;
  lastPaymentDate?: Maybe<Scalars['Date']>;
  maxActivated?: Maybe<Scalars['Int']>;
  pastDueEndDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Int']>;
  startFromTrial?: Maybe<Scalars['Boolean']>;
  status?: Maybe<SubscriptionStatus>;
  stopReason?: Maybe<SubscriptionStopReason>;
};

export type FaSubscriptionTranslate = {
  __typename?: 'FASubscriptionTranslate';
  PaymentSystem?: Maybe<PaymentSystem>;
  Plan?: Maybe<FaPlanTranslate>;
  activeEndDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  isTrial?: Maybe<Scalars['Boolean']>;
  lastPaymentDate?: Maybe<Scalars['Date']>;
  pastDueEndDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Int']>;
  startFromTrial?: Maybe<Scalars['Boolean']>;
  status?: Maybe<SubscriptionStatus>;
  stopReason?: Maybe<SubscriptionStopReason>;
};

export type FaSurvey = {
  __typename?: 'FASurvey';
  Course?: Maybe<FaCourse>;
  SurveyQuestions?: Maybe<Array<Maybe<FaSurveyQuestion>>>;
  Thread?: Maybe<FaThread>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaSurveyOption = {
  __typename?: 'FASurveyOption';
  hasFluentAnswer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
};

export type FaSurveyQuestion = {
  __typename?: 'FASurveyQuestion';
  SurveyOptions?: Maybe<Array<Maybe<FaSurveyOption>>>;
  description?: Maybe<Scalars['MultiLanguage']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  type?: Maybe<SurveyQuestionType>;
};

export type FaSurveyTranslate = {
  __typename?: 'FASurveyTranslate';
  SurveyQuestions?: Maybe<Array<Maybe<FaSurveyQuestion>>>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FaTariff = {
  __typename?: 'FATariff';
  Gifts?: Maybe<Array<Maybe<FaGift>>>;
  Product?: Maybe<FaProduct>;
  active?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  internalName?: Maybe<Scalars['String']>;
  meta?: Maybe<FaTariffMeta>;
  name?: Maybe<Scalars['MultiLanguage']>;
  priceDifference?: Maybe<Scalars['Int']>;
  zohoProductId?: Maybe<Scalars['String']>;
};

export type FaTariffMeta = {
  __typename?: 'FATariffMeta';
  avatarTheme?: Maybe<MessageAvatarTheme>;
  maxActivatedBySubscription?: Maybe<Scalars['Int']>;
};

export type FaThread = {
  __typename?: 'FAThread';
  Course?: Maybe<FaCourse>;
  Curators?: Maybe<Array<Maybe<User>>>;
  Modules?: Maybe<Array<Maybe<FaModule>>>;
  Product?: Maybe<FaProduct>;
  Survey?: Maybe<FaSurvey>;
  Tariffs?: Maybe<Array<Maybe<FaTariff>>>;
  ThreadContents?: Maybe<Array<Maybe<Content>>>;
  audioDuration?: Maybe<Scalars['Interval']>;
  description?: Maybe<Scalars['MultiLanguage']>;
  endSubmissionDate?: Maybe<Scalars['Date']>;
  freeDescription?: Maybe<Scalars['MultiLanguage']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['MultiLanguage']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Float']>;
  startSubmissionDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['MultiLanguage']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  userAccessDuration?: Maybe<Scalars['Duration']>;
  videoDuration?: Maybe<Scalars['Interval']>;
  viewStudents?: Maybe<Scalars['Boolean']>;
  visibleFrom?: Maybe<Scalars['Date']>;
};

export type FaThreadTranslate = {
  __typename?: 'FAThreadTranslate';
  Course?: Maybe<FaCourseTranslate>;
  Curators?: Maybe<Array<Maybe<User>>>;
  Gifts?: Maybe<Array<Maybe<FaGiftTranslate>>>;
  Modules?: Maybe<Array<Maybe<FaModuleTranslate>>>;
  Product?: Maybe<FaProductTranslate>;
  Survey?: Maybe<FaSurveyTranslate>;
  ThreadContents?: Maybe<Array<Maybe<Content>>>;
  audioDuration?: Maybe<Scalars['Interval']>;
  description?: Maybe<Scalars['String']>;
  endSubmissionDate?: Maybe<Scalars['Date']>;
  freeDescription?: Maybe<Scalars['String']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  startSubmissionDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  userAccessDuration?: Maybe<Scalars['Duration']>;
  videoDuration?: Maybe<Scalars['Interval']>;
  viewStudents?: Maybe<Scalars['Boolean']>;
  visibleFrom?: Maybe<Scalars['Date']>;
};

export type FaTicket = {
  __typename?: 'FATicket';
  Room?: Maybe<Room>;
  User?: Maybe<User>;
  body?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type FaTransaction = {
  __typename?: 'FATransaction';
  Merchant?: Maybe<FaMerchant>;
  Order?: Maybe<FaOrder>;
  User?: Maybe<User>;
  actualAmount?: Maybe<Scalars['Int']>;
  actualCurrency?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  dateOfStatusChange?: Maybe<Scalars['Date']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<TransactionStatus>;
};

export type FaVideo = {
  __typename?: 'FAVideo';
  Subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  VideoFiles?: Maybe<Array<Maybe<VideoFile>>>;
  VideoMarks?: Maybe<Array<Maybe<Mark>>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Media>>>;
  redirectUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type FcHomeworkResultUpdateInput = {
  chatCreated?: InputMaybe<Scalars['Boolean']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['GraphQLJSON']>;
  id: Scalars['Int'];
  score?: InputMaybe<Scalars['Int']>;
  submitted?: InputMaybe<Scalars['Boolean']>;
};

export type FcLessonsFilterInput = {
  moduleId?: InputMaybe<Scalars['String']>;
};

export type FcLessonsResponse = {
  __typename?: 'FCLessonsResponse';
  Lessons?: Maybe<Array<Maybe<Lesson>>>;
  Pagination?: Maybe<Pagination>;
};

export type FcLessonsSortInput = {
  field: LessonField;
  type: SortType;
};

export type FcModulesFilterInput = {
  threadId?: InputMaybe<Scalars['String']>;
};

export type FcModulesResponse = {
  __typename?: 'FCModulesResponse';
  Modules?: Maybe<Array<Maybe<Module>>>;
  Pagination?: Maybe<Pagination>;
};

export type FcModulesSortInput = {
  field: ModuleField;
  type: SortType;
};

export type FcThreadsFilterInput = {
  courseId?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type FcThreadsResponse = {
  __typename?: 'FCThreadsResponse';
  Pagination?: Maybe<Pagination>;
  Threads?: Maybe<Array<Maybe<Thread>>>;
};

export type FcThreadsSortInput = {
  field: ThreadField;
  type: SortType;
};

export type Faq = {
  __typename?: 'Faq';
  FaqOptions?: Maybe<Array<Maybe<FaqOption>>>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type FaqOption = {
  __typename?: 'FaqOption';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export enum FavoriteTarget {
  FavoriteTargetConsultation = 'FAVORITE_TARGET_CONSULTATION',
  FavoriteTargetCourse = 'FAVORITE_TARGET_COURSE',
  FavoriteTargetDocument = 'FAVORITE_TARGET_DOCUMENT'
}

export type FavoritesResponse = {
  __typename?: 'FavoritesResponse';
  Consultations?: Maybe<Array<Maybe<Consultation>>>;
  Courses?: Maybe<Array<Maybe<Course>>>;
  Documents?: Maybe<Array<Maybe<Document>>>;
};

export type Feedback = {
  __typename?: 'Feedback';
  avatar?: Maybe<Array<Maybe<Media>>>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  regalia?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type FeedbackInput = {
  avatar?: InputMaybe<Scalars['GraphQLJSON']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['MultiLanguage']>;
};

export type File = {
  __typename?: 'File';
  entityId?: Maybe<Scalars['String']>;
  file?: Maybe<Media>;
  id?: Maybe<Scalars['Int']>;
  parentEntity?: Maybe<FileParentEntity>;
};

export type FileCreateInput = {
  entity: FileParentEntity;
  entityId: Scalars['String'];
  file: Scalars['Upload'];
};

export enum FileExtension {
  FileExtensionPng = 'FILE_EXTENSION_PNG'
}

export enum FileParentEntity {
  FileParentEntityConsultationContent = 'FILE_PARENT_ENTITY_CONSULTATION_CONTENT',
  FileParentEntityCourseContent = 'FILE_PARENT_ENTITY_COURSE_CONTENT',
  FileParentEntityCourseEndContent = 'FILE_PARENT_ENTITY_COURSE_END_CONTENT',
  FileParentEntityDocumentContent = 'FILE_PARENT_ENTITY_DOCUMENT_CONTENT',
  FileParentEntityGiftContent = 'FILE_PARENT_ENTITY_GIFT_CONTENT',
  FileParentEntityHomeworkResult = 'FILE_PARENT_ENTITY_HOMEWORK_RESULT',
  FileParentEntityHomeworkTestQuestionContent = 'FILE_PARENT_ENTITY_HOMEWORK_TEST_QUESTION_CONTENT',
  FileParentEntityLessonContent = 'FILE_PARENT_ENTITY_LESSON_CONTENT',
  FileParentEntityModuleContent = 'FILE_PARENT_ENTITY_MODULE_CONTENT',
  FileParentEntityPlanContent = 'FILE_PARENT_ENTITY_PLAN_CONTENT',
  FileParentEntityQuizContent = 'FILE_PARENT_ENTITY_QUIZ_CONTENT',
  FileParentEntityQuizQuestionContent = 'FILE_PARENT_ENTITY_QUIZ_QUESTION_CONTENT',
  FileParentEntitySaleContent = 'FILE_PARENT_ENTITY_SALE_CONTENT',
  FileParentEntityThreadContent = 'FILE_PARENT_ENTITY_THREAD_CONTENT'
}

export type FilesFilterInput = {
  entityId: Scalars['String'];
  parentEntity: FileParentEntity;
};

export type FloatRange = {
  from?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type Gift = {
  __typename?: 'Gift';
  Document?: Maybe<Document>;
  Tariff?: Maybe<Tariff>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isReusable?: Maybe<Scalars['Boolean']>;
  tariffIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<GiftEntityType>;
};

export enum GiftEntityType {
  GiftEntityTypeDocument = 'GIFT_ENTITY_TYPE_DOCUMENT',
  GiftEntityTypeTariff = 'GIFT_ENTITY_TYPE_TARIFF'
}

export enum GiftField {
  GiftFieldIndex = 'GIFT_FIELD_INDEX'
}

export enum GraphQlSubscriptionName {
  SubscriptionNameMessage = 'SUBSCRIPTION_NAME_MESSAGE',
  SubscriptionNameNotification = 'SUBSCRIPTION_NAME_NOTIFICATION'
}

export enum GraphQlSubscriptionType {
  SubscriptionTypeDeleteMessage = 'SUBSCRIPTION_TYPE_DELETE_MESSAGE',
  SubscriptionTypeNewMessage = 'SUBSCRIPTION_TYPE_NEW_MESSAGE',
  SubscriptionTypeNewNotification = 'SUBSCRIPTION_TYPE_NEW_NOTIFICATION',
  SubscriptionTypeTest = 'SUBSCRIPTION_TYPE_TEST',
  SubscriptionTypeUpdateMessage = 'SUBSCRIPTION_TYPE_UPDATE_MESSAGE'
}

export type HelpFormCreateInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  message: Scalars['String'];
  phone: Scalars['String'];
  tariffId: Scalars['Int'];
};

export type Homework = {
  __typename?: 'Homework';
  HomeworkContent?: Maybe<Content>;
  HomeworkFluentContent?: Maybe<Content>;
  HomeworkTasks?: Maybe<Array<Maybe<HomeworkTask>>>;
  HomeworkTestQuestions?: Maybe<Array<Maybe<HomeworkTestQuestion>>>;
  Lesson?: Maybe<Lesson>;
  Module?: Maybe<Module>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  maxScore?: Maybe<Scalars['Int']>;
  status?: Maybe<UserHomeworkStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<HomeworkType>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum HomeworkField {
  HomeworkFieldIndex = 'HOMEWORK_FIELD_INDEX'
}

export enum HomeworkParentEntity {
  HomeworkParentEntityLesson = 'HOMEWORK_PARENT_ENTITY_LESSON',
  HomeworkParentEntityModule = 'HOMEWORK_PARENT_ENTITY_MODULE'
}

export enum HomeworkQuestionField {
  HomeworkQuestionFieldIndex = 'HOMEWORK_QUESTION_FIELD_INDEX'
}

export enum HomeworkQuestionType {
  HomeworkQuestionTypeSelectMany = 'HOMEWORK_QUESTION_TYPE_SELECT_MANY',
  HomeworkQuestionTypeSelectOne = 'HOMEWORK_QUESTION_TYPE_SELECT_ONE'
}

export type HomeworkResult = {
  __typename?: 'HomeworkResult';
  Homework?: Maybe<Homework>;
  User?: Maybe<User>;
  chatCreated?: Maybe<Scalars['Boolean']>;
  completeDate?: Maybe<Scalars['Date']>;
  completed?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['GraphQLJSON']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  scoreDate?: Maybe<Scalars['Date']>;
  submitted?: Maybe<Scalars['Boolean']>;
};

export type HomeworkResultCreate = {
  content: Scalars['GraphQLJSON'];
  homeworkId: Scalars['String'];
};

export type HomeworkResultUpdateInput = {
  content?: InputMaybe<Scalars['GraphQLJSON']>;
  homeworkId: Scalars['String'];
};

export type HomeworkResultsFilterInput = {
  onlyVip?: InputMaybe<Scalars['String']>;
  threadId?: InputMaybe<Scalars['String']>;
};

export type HomeworkResultsResponse = {
  __typename?: 'HomeworkResultsResponse';
  HomeworkResults?: Maybe<Array<Maybe<HomeworkResult>>>;
  Pagination?: Maybe<Pagination>;
};

export type HomeworkTask = {
  __typename?: 'HomeworkTask';
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeworkTestQuestion = {
  __typename?: 'HomeworkTestQuestion';
  HomeworkTestQuestionContent?: Maybe<Content>;
  HomeworkTestQuestionOptions?: Maybe<Array<Maybe<HomeworkTestQuestionOption>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<HomeworkQuestionType>;
};

export type HomeworkTestQuestionOption = {
  __typename?: 'HomeworkTestQuestionOption';
  clarification?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export enum HomeworkType {
  HomeworkTypeFluent = 'HOMEWORK_TYPE_FLUENT',
  HomeworkTypeNoHomework = 'HOMEWORK_TYPE_NO_HOMEWORK',
  HomeworkTypeTasks = 'HOMEWORK_TYPE_TASKS',
  HomeworkTypeTest = 'HOMEWORK_TYPE_TEST'
}

export type IdOrSlug = {
  id?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  createdAt?: Maybe<Scalars['Date']>;
  file?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum ImageField {
  ImageFieldCreatedAt = 'IMAGE_FIELD_CREATED_AT'
}

export type IntRange = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type Language = {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
};

export type LearnDuration = {
  __typename?: 'LearnDuration';
  days?: Maybe<Scalars['Int']>;
  hours?: Maybe<Scalars['Int']>;
  minutes?: Maybe<Scalars['Int']>;
  months?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['Int']>;
  weeks?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['Int']>;
};

export type LearnDurationInput = {
  days?: InputMaybe<Scalars['Int']>;
  hours?: InputMaybe<Scalars['Int']>;
  minutes?: InputMaybe<Scalars['Int']>;
  months?: InputMaybe<Scalars['Int']>;
  seconds?: InputMaybe<Scalars['Int']>;
  weeks?: InputMaybe<Scalars['Int']>;
  years?: InputMaybe<Scalars['Int']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  Author?: Maybe<Author>;
  Course?: Maybe<Course>;
  Homework?: Maybe<Array<Maybe<Homework>>>;
  LessonContents?: Maybe<Array<Maybe<Content>>>;
  Module?: Maybe<Module>;
  UserLessonProgress?: Maybe<Progress>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  availableHomeworkCount?: Maybe<Scalars['Int']>;
  completedHomeworkCount?: Maybe<Scalars['Int']>;
  completionRate?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Float']>;
  submittedHomeworkCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uncompletedHomeworkResultCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum LessonField {
  LessonFieldIndex = 'LESSON_FIELD_INDEX',
  LessonFieldRate = 'LESSON_FIELD_RATE'
}

export type LessonRateInput = {
  id: Scalars['String'];
  rate: Scalars['Int'];
};

export type LessonsResponse = {
  __typename?: 'LessonsResponse';
  Pagination?: Maybe<Pagination>;
};

export type Mark = {
  __typename?: 'Mark';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timing?: Maybe<Scalars['Time']>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  City?: Maybe<City>;
  Country?: Maybe<Country>;
  Currency?: Maybe<Currency>;
  Language?: Maybe<Language>;
  Role?: Maybe<Role>;
  Sale?: Maybe<Sale>;
  Subscription?: Maybe<UserSubscription>;
  Timezone?: Maybe<Timezone>;
  autoGenerated?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Array<Maybe<Media>>>;
  birthDate?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hadSubscriptionBefore?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isResident?: Maybe<Scalars['Boolean']>;
  monthsFromRegistration?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  smartSenderId?: Maybe<Scalars['String']>;
};

export type Media = {
  __typename?: 'Media';
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  isOriginal?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MeetingMethod = {
  __typename?: 'MeetingMethod';
  icon?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Merchant = {
  __typename?: 'Merchant';
  PaymentSystem?: Maybe<PaymentSystem>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<MerchantMeta>;
  residentOfUkraine?: Maybe<Scalars['Boolean']>;
};

export type MerchantMeta = {
  __typename?: 'MerchantMeta';
  accountNumber?: Maybe<Scalars['String']>;
  edrpoyCode?: Maybe<Scalars['String']>;
  mfo?: Maybe<Scalars['String']>;
  purposeOfPayment?: Maybe<Scalars['String']>;
};

export type MerchantMetaInput = {
  accountNumber?: InputMaybe<Scalars['String']>;
  edrpoyCode?: InputMaybe<Scalars['String']>;
  mfo?: InputMaybe<Scalars['String']>;
  purposeOfPayment?: InputMaybe<Scalars['String']>;
};

export enum MerchantName {
  MerchantNameActivate = 'MERCHANT_NAME_ACTIVATE',
  MerchantNameCash = 'MERCHANT_NAME_CASH',
  MerchantNameGift = 'MERCHANT_NAME_GIFT',
  MerchantNameRestore = 'MERCHANT_NAME_RESTORE',
  MerchantNameTrial = 'MERCHANT_NAME_TRIAL'
}

export type Message = {
  __typename?: 'Message';
  belongsToMyCompany?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  isEdited?: Maybe<Scalars['Boolean']>;
  isMy?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<MessageMeta>;
  repliedMessage?: Maybe<Message>;
  theme?: Maybe<MessageTheme>;
  type?: Maybe<MessageType>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum MessageAvatarTheme {
  MessageAvatarThemeDefault = 'MESSAGE_AVATAR_THEME_DEFAULT',
  MessageAvatarThemeVip = 'MESSAGE_AVATAR_THEME_VIP',
  MessageAvatarThemeVipPlus = 'MESSAGE_AVATAR_THEME_VIP_PLUS'
}

export type MessageChangeTheme = {
  id: Scalars['String'];
  theme: MessageTheme;
};

export type MessageCreateInput = {
  body?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  roomId: Scalars['String'];
  type: MessageType;
};

export type MessageMeta = {
  __typename?: 'MessageMeta';
  Author?: Maybe<User>;
  Parent?: Maybe<MessageMetaParent>;
  avatarTheme?: Maybe<MessageAvatarTheme>;
  file?: Maybe<Media>;
};

export type MessageMetaParent = {
  __typename?: 'MessageMetaParent';
  entityName?: Maybe<EntityName>;
  id?: Maybe<Scalars['String']>;
};

export type MessageReplyInput = {
  body: Scalars['String'];
  repliedMessageId: Scalars['String'];
};

export enum MessageTheme {
  MessageAvatarThemeDefault = 'MESSAGE_AVATAR_THEME_DEFAULT',
  MessageAvatarThemeVip = 'MESSAGE_AVATAR_THEME_VIP',
  MessageAvatarThemeVipPlus = 'MESSAGE_AVATAR_THEME_VIP_PLUS',
  MessageThemeCurator = 'MESSAGE_THEME_CURATOR',
  MessageThemeOrdinary = 'MESSAGE_THEME_ORDINARY',
  MessageThemeVip = 'MESSAGE_THEME_VIP'
}

export enum MessageType {
  MessageTypeAttachment = 'MESSAGE_TYPE_ATTACHMENT',
  MessageTypeAudio = 'MESSAGE_TYPE_AUDIO',
  MessageTypeImage = 'MESSAGE_TYPE_IMAGE',
  MessageTypeText = 'MESSAGE_TYPE_TEXT',
  MessageTypeVideo = 'MESSAGE_TYPE_VIDEO'
}

export type MessageUpdateInput = {
  body: Scalars['String'];
  id: Scalars['String'];
};

export type MessageWithAction = {
  __typename?: 'MessageWithAction';
  Message?: Maybe<Message>;
  type?: Maybe<GraphQlSubscriptionType>;
};

export type MessagesFilterInput = {
  fromMessageId?: InputMaybe<Scalars['String']>;
  roomId: Scalars['String'];
  toMessageId?: InputMaybe<Scalars['String']>;
  toMessageShift?: InputMaybe<Scalars['Int']>;
};

export type MessagesResponse = {
  __typename?: 'MessagesResponse';
  Messages?: Maybe<Array<Maybe<Message>>>;
  Pagination?: Maybe<Pagination>;
};

export type Module = {
  __typename?: 'Module';
  Homework?: Maybe<Array<Maybe<Homework>>>;
  Lessons?: Maybe<Array<Maybe<Lesson>>>;
  ModuleContents?: Maybe<Array<Maybe<Content>>>;
  Thread?: Maybe<Thread>;
  UserModuleProgress?: Maybe<Progress>;
  active?: Maybe<Scalars['Boolean']>;
  availabilityDate?: Maybe<Scalars['Date']>;
  availableByDate?: Maybe<Scalars['Boolean']>;
  availableByPrevCompleted?: Maybe<Scalars['Boolean']>;
  availableHomeworkCount?: Maybe<Scalars['Int']>;
  completedHomeworkCount?: Maybe<Scalars['Int']>;
  completionRate?: Maybe<Scalars['Float']>;
  courseId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isFree?: Maybe<Scalars['Boolean']>;
  lessonsCount?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Float']>;
  root?: Maybe<Scalars['Boolean']>;
  submittedHomeworkCount?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uncompletedHomeworkResultCount?: Maybe<Scalars['Int']>;
};

export enum ModuleField {
  ModuleFieldIndex = 'MODULE_FIELD_INDEX',
  ModuleFieldRate = 'MODULE_FIELD_RATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  FCHomeworkResultUpdate?: Maybe<HomeworkResult>;
  acceptTerm?: Maybe<Scalars['Boolean']>;
  appointmentBook?: Maybe<Appointment>;
  appointmentCancel?: Maybe<Appointment>;
  appointmentMove?: Maybe<Appointment>;
  cardDelete?: Maybe<Scalars['Boolean']>;
  favoriteCreate?: Maybe<Scalars['Boolean']>;
  favoriteDelete?: Maybe<Scalars['Boolean']>;
  fileCreate?: Maybe<File>;
  fileDelete?: Maybe<Scalars['Boolean']>;
  generateUser?: Maybe<Token>;
  helpFormCreate?: Maybe<Scalars['Boolean']>;
  homeworkResultCalculate?: Maybe<HomeworkResult>;
  homeworkResultCreate?: Maybe<HomeworkResult>;
  homeworkResultDelete?: Maybe<HomeworkResult>;
  homeworkResultUpdate?: Maybe<HomeworkResult>;
  homeworkTaskResultCreate?: Maybe<Scalars['Boolean']>;
  homeworkTestQuestionOptionCreate?: Maybe<Scalars['Boolean']>;
  lessonRate?: Maybe<Scalars['Boolean']>;
  messageChangeTheme?: Maybe<Message>;
  messageCreate?: Maybe<Message>;
  messageDelete?: Maybe<Message>;
  messagePin?: Maybe<Message>;
  messageReply?: Maybe<Message>;
  messageUnpin?: Maybe<Room>;
  messageUpdate?: Maybe<Message>;
  orderCreate?: Maybe<OrderCreateResponse>;
  orderPaySavedCard?: Maybe<Scalars['Boolean']>;
  passwordChange?: Maybe<Token>;
  passwordForgotConfirm?: Maybe<Token>;
  passwordForgotRequest?: Maybe<Token>;
  planTrialActivate?: Maybe<PlanTrialActivateResponse>;
  profileUpdate?: Maybe<MeResponse>;
  purchaseUse?: Maybe<Scalars['Boolean']>;
  quizNextQuestion?: Maybe<QuizQuestion>;
  quizReset?: Maybe<Scalars['Boolean']>;
  registration?: Maybe<Token>;
  request?: Maybe<Scalars['String']>;
  roomBanUser?: Maybe<Room>;
  roomUnbanUser?: Maybe<Room>;
  subscriptionUpdate?: Maybe<UserSubscription>;
  surveyQuestionResultCreate?: Maybe<Scalars['Boolean']>;
  testLogin?: Maybe<Token>;
  threadFreeActivate?: Maybe<Scalars['Boolean']>;
  threadLeave?: Maybe<Scalars['Boolean']>;
  ticketCommentCreate?: Maybe<Message>;
  ticketCreate?: Maybe<Ticket>;
  ticketUpdate?: Maybe<Ticket>;
  userVideoMarkCreate?: Maybe<UserVideoMark>;
  userVideoMarkDelete?: Maybe<Scalars['Boolean']>;
  userVideoMarkUpdate?: Maybe<UserVideoMark>;
};


export type MutationFcHomeworkResultUpdateArgs = {
  record: FcHomeworkResultUpdateInput;
};


export type MutationAcceptTermArgs = {
  termId: Scalars['Int'];
};


export type MutationAppointmentBookArgs = {
  id: Scalars['Int'];
};


export type MutationAppointmentCancelArgs = {
  id: Scalars['Int'];
};


export type MutationAppointmentMoveArgs = {
  record: AppointmentMoveInput;
};


export type MutationCardDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationFavoriteCreateArgs = {
  targetId: Scalars['String'];
  targetType: FavoriteTarget;
};


export type MutationFavoriteDeleteArgs = {
  targetId: Scalars['String'];
  targetType: FavoriteTarget;
};


export type MutationFileCreateArgs = {
  record: FileCreateInput;
};


export type MutationFileDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationHelpFormCreateArgs = {
  record: HelpFormCreateInput;
};


export type MutationHomeworkResultCalculateArgs = {
  homeworkId: Scalars['String'];
};


export type MutationHomeworkResultCreateArgs = {
  record?: InputMaybe<HomeworkResultCreate>;
};


export type MutationHomeworkResultDeleteArgs = {
  homeworkId: Scalars['String'];
};


export type MutationHomeworkResultUpdateArgs = {
  record: HomeworkResultUpdateInput;
};


export type MutationHomeworkTaskResultCreateArgs = {
  taskId: Scalars['Int'];
};


export type MutationHomeworkTestQuestionOptionCreateArgs = {
  optionId: Scalars['Int'];
};


export type MutationLessonRateArgs = {
  record?: InputMaybe<LessonRateInput>;
};


export type MutationMessageChangeThemeArgs = {
  record: MessageChangeTheme;
};


export type MutationMessageCreateArgs = {
  record?: InputMaybe<MessageCreateInput>;
};


export type MutationMessageDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationMessagePinArgs = {
  id: Scalars['String'];
};


export type MutationMessageReplyArgs = {
  record?: InputMaybe<MessageReplyInput>;
};


export type MutationMessageUnpinArgs = {
  roomId: Scalars['String'];
};


export type MutationMessageUpdateArgs = {
  record?: InputMaybe<MessageUpdateInput>;
};


export type MutationOrderCreateArgs = {
  record: OrderCreateInput;
};


export type MutationOrderPaySavedCardArgs = {
  record: OrderPaySavedCardInput;
};


export type MutationPasswordChangeArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationPasswordForgotConfirmArgs = {
  forgotToken: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationPasswordForgotRequestArgs = {
  email: Scalars['String'];
};


export type MutationPlanTrialActivateArgs = {
  id: Scalars['String'];
  responseUrl: Scalars['String'];
};


export type MutationProfileUpdateArgs = {
  record: ProfileUpdateInput;
};


export type MutationPurchaseUseArgs = {
  id: Scalars['String'];
};


export type MutationQuizNextQuestionArgs = {
  answer?: InputMaybe<QuizQuestionAnswerCreateInput>;
  quizId: Scalars['String'];
};


export type MutationQuizResetArgs = {
  quizId: Scalars['String'];
};


export type MutationRegistrationArgs = {
  record: UserRegistrationData;
};


export type MutationRoomBanUserArgs = {
  record?: InputMaybe<RoomBanUserInput>;
};


export type MutationRoomUnbanUserArgs = {
  record?: InputMaybe<RoomBanUserInput>;
};


export type MutationSubscriptionUpdateArgs = {
  record: SubscriptionUpdateInput;
};


export type MutationSurveyQuestionResultCreateArgs = {
  record: SurveyQuestionResultCreateInput;
};


export type MutationTestLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationThreadFreeActivateArgs = {
  id: Scalars['String'];
};


export type MutationThreadLeaveArgs = {
  id: Scalars['String'];
};


export type MutationTicketCommentCreateArgs = {
  record?: InputMaybe<TicketCommentCreateInput>;
};


export type MutationTicketCreateArgs = {
  record: TicketCreateInput;
};


export type MutationTicketUpdateArgs = {
  record: TicketUpdateInput;
};


export type MutationUserVideoMarkCreateArgs = {
  record: UserVideoMarkCreateInput;
};


export type MutationUserVideoMarkDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUserVideoMarkUpdateArgs = {
  record: UserVideoMarkUpdateInput;
};

export type MyTicketsFilterInput = {
  body?: InputMaybe<Scalars['String']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MyTicketsResponse = {
  __typename?: 'MyTicketsResponse';
  Pagination?: Maybe<Pagination>;
  Tickets?: Maybe<Array<Maybe<Ticket>>>;
};

export type NextLearningStep = {
  __typename?: 'NextLearningStep';
  Course?: Maybe<Course>;
  entityId?: Maybe<Scalars['String']>;
  entityName?: Maybe<EntityName>;
};

export type NotificationWithType = {
  __typename?: 'NotificationWithType';
  Notification?: Maybe<PushNotification>;
  type?: Maybe<GraphQlSubscriptionType>;
};

export type Order = {
  __typename?: 'Order';
  Merchant?: Maybe<Merchant>;
  OrderAlias?: Maybe<OrderAlias>;
  Products?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type OrderAlias = {
  __typename?: 'OrderAlias';
  alias?: Maybe<Scalars['String']>;
};

export type OrderAvailableCardsInput = {
  paymentMethodId: Scalars['Int'];
  productId: Scalars['String'];
};

export type OrderCheckInput = {
  couponCode?: InputMaybe<Scalars['String']>;
  productCount: Scalars['Int'];
  productId: Scalars['String'];
  saleId?: InputMaybe<Scalars['String']>;
  tariffId?: InputMaybe<Scalars['Int']>;
};

export type OrderCreateInput = {
  couponCode?: InputMaybe<Scalars['String']>;
  paymentMethodId: Scalars['Int'];
  productCount: Scalars['Int'];
  productId: Scalars['String'];
  responseUrl?: InputMaybe<Scalars['String']>;
  saleId?: InputMaybe<Scalars['String']>;
  tariffId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrderCreateResponse = {
  __typename?: 'OrderCreateResponse';
  Order?: Maybe<Order>;
  paymentLink?: Maybe<Scalars['String']>;
};

export enum OrderField {
  OrderFieldCreatedAt = 'ORDER_FIELD_CREATED_AT'
}

export type OrderPrice = {
  __typename?: 'OrderPrice';
  default?: Maybe<Scalars['Int']>;
  difference?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum OrderType {
  OrderTypeAddCard = 'ORDER_TYPE_ADD_CARD',
  OrderTypeGeneral = 'ORDER_TYPE_GENERAL',
  OrderTypeInternal = 'ORDER_TYPE_INTERNAL',
  OrderTypeRecurring = 'ORDER_TYPE_RECURRING',
  OrderTypeUpgrade = 'ORDER_TYPE_UPGRADE'
}

export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['Int']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage?: Maybe<Scalars['Int']>;
  nextPageExists?: Maybe<Scalars['Boolean']>;
  previousPageExists?: Maybe<Scalars['Boolean']>;
  total?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Parent = {
  __typename?: 'Parent';
  Parent?: Maybe<Parent>;
  entityName?: Maybe<EntityName>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  DefaultMerchant?: Maybe<FaMerchant>;
  Faq?: Maybe<Faq>;
  GlobalMerchant?: Maybe<FaMerchant>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum PaymentMethodField {
  PaymentSystemFieldIndex = 'PAYMENT_SYSTEM_FIELD_INDEX'
}

export enum PaymentMethodName {
  PaymentMethodNameCard = 'PAYMENT_METHOD_NAME_CARD',
  PaymentMethodNameCash = 'PAYMENT_METHOD_NAME_CASH',
  PaymentMethodNameInstallment = 'PAYMENT_METHOD_NAME_INSTALLMENT'
}

export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  Cards?: Maybe<Array<Maybe<Card>>>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export enum PaymentSystemName {
  PaymentSystemNameCash = 'PAYMENT_SYSTEM_NAME_CASH',
  PaymentSystemNameFondy = 'PAYMENT_SYSTEM_NAME_FONDY',
  PaymentSystemNameInternal = 'PAYMENT_SYSTEM_NAME_INTERNAL',
  PaymentSystemNameWayForPay = 'PAYMENT_SYSTEM_NAME_WAY_FOR_PAY'
}

export type PgBossJob = {
  __typename?: 'PgBossJob';
  completedon?: Maybe<Scalars['Date']>;
  createdon?: Maybe<Scalars['Date']>;
  data?: Maybe<Scalars['GraphQLJSON']>;
  expirein?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  keepuntil?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  on_complete?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Int']>;
  retrybackoff?: Maybe<Scalars['Boolean']>;
  retrycount?: Maybe<Scalars['Int']>;
  retrydelay?: Maybe<Scalars['Int']>;
  retrylimit?: Maybe<Scalars['Int']>;
  singletonkey?: Maybe<Scalars['String']>;
  singletonon?: Maybe<Scalars['Date']>;
  startafter?: Maybe<Scalars['Date']>;
  startedon?: Maybe<Scalars['Date']>;
  state?: Maybe<PgJobState>;
};

export enum PgJobState {
  PgJobStateActive = 'PG_JOB_STATE_ACTIVE',
  PgJobStateCancelled = 'PG_JOB_STATE_CANCELLED',
  PgJobStateCompleted = 'PG_JOB_STATE_COMPLETED',
  PgJobStateCreated = 'PG_JOB_STATE_CREATED',
  PgJobStateExpired = 'PG_JOB_STATE_EXPIRED',
  PgJobStateFailed = 'PG_JOB_STATE_FAILED',
  PgJobStateRetry = 'PG_JOB_STATE_RETRY'
}

export type Plan = {
  __typename?: 'Plan';
  Product?: Maybe<FaProduct>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  duePeriod?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Interval']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  infinity?: Maybe<Scalars['Boolean']>;
  landingUrl?: Maybe<Scalars['String']>;
  lifetime?: Maybe<Scalars['Boolean']>;
  productId?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trialPeriod?: Maybe<Scalars['Int']>;
};

export type PlanTrialActivateResponse = {
  __typename?: 'PlanTrialActivateResponse';
  activated?: Maybe<Scalars['Boolean']>;
  paymentLink?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  Currency?: Maybe<Currency>;
  default?: Maybe<Scalars['Int']>;
  old?: Maybe<Scalars['Int']>;
  sale?: Maybe<Scalars['Int']>;
  withSale?: Maybe<Scalars['Int']>;
};

export type PriceList = {
  __typename?: 'PriceList';
  PriceListProperties?: Maybe<Array<Maybe<PriceListProperty>>>;
  Product?: Maybe<Product>;
  Sale?: Maybe<Sale>;
  Tariff?: Maybe<Tariff>;
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isHighlight?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type PriceListOption = {
  __typename?: 'PriceListOption';
  PriceListProperties?: Maybe<Array<Maybe<PriceListProperty>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum PriceListOptionField {
  PriceListOptionFieldIndex = 'PRICE_LIST_OPTION_FIELD_INDEX'
}

export type PriceListOptionTest = {
  __typename?: 'PriceListOptionTest';
  PriceListProperties?: Maybe<Array<Maybe<PriceListProperty>>>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PriceListProperty = {
  __typename?: 'PriceListProperty';
  PriceList?: Maybe<PriceList>;
  PriceListOption?: Maybe<PriceListOption>;
  boolValue?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  stringValue?: Maybe<Scalars['String']>;
  type?: Maybe<PriceListPropertyType>;
};

export enum PriceListPropertyField {
  PriceListPropertyFieldIndex = 'PRICE_LIST_PROPERTY_FIELD_INDEX'
}

export enum PriceListPropertyType {
  PriceListPropertyTypeBoolean = 'PRICE_LIST_PROPERTY_TYPE_BOOLEAN',
  PriceListPropertyTypeString = 'PRICE_LIST_PROPERTY_TYPE_STRING'
}

export type PriceListTestResponse = {
  __typename?: 'PriceListTestResponse';
  Options?: Maybe<Array<Maybe<PriceListOptionTest>>>;
  PriceLists?: Maybe<Array<Maybe<PriceList>>>;
};

export type Product = {
  __typename?: 'Product';
  Consultation?: Maybe<Consultation>;
  Course?: Maybe<Course>;
  Faq?: Maybe<Faq>;
  Gifts?: Maybe<Array<Maybe<Gift>>>;
  Plan?: Maybe<Plan>;
  Tariffs?: Maybe<Array<Maybe<Tariff>>>;
  Thread?: Maybe<Thread>;
  availableBySubscription?: Maybe<Scalars['Boolean']>;
  availableDuration?: Maybe<Scalars['Duration']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  landingUrl?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type ProductCreateInput = {
  availableBySubscription?: InputMaybe<Scalars['Boolean']>;
  availableDuration?: InputMaybe<Scalars['Duration']>;
  description: Scalars['MultiLanguage'];
  landingUrl?: InputMaybe<Scalars['String']>;
  merchantId?: InputMaybe<Scalars['String']>;
  oldPrice?: InputMaybe<Scalars['Int']>;
  price: Scalars['Int'];
  productByGiftIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['MultiLanguage'];
};

export enum ProductField {
  ProductFieldCreatedAt = 'PRODUCT_FIELD_CREATED_AT',
  ProductFieldDescription = 'PRODUCT_FIELD_DESCRIPTION',
  ProductFieldLandingUrl = 'PRODUCT_FIELD_LANDING_URL',
  ProductFieldTitle = 'PRODUCT_FIELD_TITLE'
}

export type ProductUpgradeInput = {
  paymentMethodId: Scalars['Int'];
  productId: Scalars['String'];
  tariffId: Scalars['Int'];
};

export type ProfileUpdateInput = {
  avatar?: InputMaybe<Scalars['Upload']>;
  birthDate?: InputMaybe<Scalars['Date']>;
  cityId?: InputMaybe<Scalars['Int']>;
  countryId?: InputMaybe<Scalars['Int']>;
  currencyId?: InputMaybe<Scalars['Int']>;
  fullName?: InputMaybe<Scalars['String']>;
  isResident?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['String']>;
  primaryLanguageId?: InputMaybe<Scalars['Int']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type Progress = {
  __typename?: 'Progress';
  efficiency?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  Product?: Maybe<Product>;
  availableTo?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<PurchaseStatus>;
};

export enum PurchaseEntity {
  PurchaseEntityConsultation = 'PURCHASE_ENTITY_CONSULTATION',
  PurchaseEntityCourse = 'PURCHASE_ENTITY_COURSE',
  PurchaseEntityPlan = 'PURCHASE_ENTITY_PLAN',
  PurchaseEntityThread = 'PURCHASE_ENTITY_THREAD'
}

export enum PurchaseField {
  PurchaseFieldAvailableTo = 'PURCHASE_FIELD_AVAILABLE_TO',
  PurchaseFieldCreatedAt = 'PURCHASE_FIELD_CREATED_AT',
  PurchaseFieldStatus = 'PURCHASE_FIELD_STATUS',
  PurchaseFieldUsed = 'PURCHASE_FIELD_USED'
}

export enum PurchaseStartReason {
  PurchaseStartReasonBuy = 'PURCHASE_START_REASON_BUY',
  PurchaseStartReasonSubscription = 'PURCHASE_START_REASON_SUBSCRIPTION'
}

export enum PurchaseStatus {
  PurchaseStatusAvailable = 'PURCHASE_STATUS_AVAILABLE',
  PurchaseStatusHold = 'PURCHASE_STATUS_HOLD',
  PurchaseStatusSpent = 'PURCHASE_STATUS_SPENT'
}

export enum PurchaseStopReason {
  PurchaseStopReasonLifetimeExpired = 'PURCHASE_STOP_REASON_LIFETIME_EXPIRED',
  PurchaseStopReasonReplace = 'PURCHASE_STOP_REASON_REPLACE',
  PurchaseStopReasonSpent = 'PURCHASE_STOP_REASON_SPENT',
  PurchaseStopReasonStopped = 'PURCHASE_STOP_REASON_STOPPED'
}

export type PurchasesFilterInput = {
  entity?: InputMaybe<PurchaseEntity>;
};

export type PurchasesResponse = {
  __typename?: 'PurchasesResponse';
  Pagination?: Maybe<Pagination>;
  Purchases?: Maybe<Array<Maybe<Purchase>>>;
};

export type PurchasesSortInput = {
  field: PurchaseField;
  type: SortType;
};

export type PushNotification = {
  __typename?: 'PushNotification';
  event?: Maybe<EventName>;
  message?: Maybe<Scalars['String']>;
};

export type PushNotificationsFilterInput = {
  entityName?: InputMaybe<EntityName>;
  fromMessageId?: InputMaybe<Scalars['String']>;
  toMessageId?: InputMaybe<Scalars['String']>;
  toMessageShift?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  Date?: Maybe<Scalars['Date']>;
  Duration?: Maybe<Scalars['Duration']>;
  FCHomeworkResultById?: Maybe<HomeworkResult>;
  FCLessons?: Maybe<FcLessonsResponse>;
  FCModules?: Maybe<FcModulesResponse>;
  FCThreadById?: Maybe<Thread>;
  FCThreads?: Maybe<FcThreadsResponse>;
  Interval?: Maybe<Scalars['Interval']>;
  MultiLanguage?: Maybe<Scalars['MultiLanguage']>;
  Time?: Maybe<Scalars['Time']>;
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  appointmentsMy?: Maybe<Array<Maybe<Appointment>>>;
  authorById?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  availablePaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  avatarDelete?: Maybe<MeResponse>;
  banners?: Maybe<Array<Maybe<Banner>>>;
  cardsMy?: Maybe<Array<Maybe<PaymentSystem>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  cities?: Maybe<CitiesResponse>;
  cityById?: Maybe<City>;
  consultation?: Maybe<Consultation>;
  consultations?: Maybe<ConsultationResponse>;
  consultationsMy?: Maybe<Array<Maybe<Consultation>>>;
  countries?: Maybe<CountriesResponse>;
  countryById?: Maybe<Country>;
  course?: Maybe<Course>;
  coursePreview?: Maybe<Course>;
  courses?: Maybe<CoursesResponse>;
  directories?: Maybe<DirectoriesResponse>;
  documentById?: Maybe<Document>;
  documents?: Maybe<DocumentResponse>;
  entityGetParent?: Maybe<Parent>;
  faq?: Maybe<Faq>;
  favoriteConsultations?: Maybe<Array<Maybe<Consultation>>>;
  favoriteCourses?: Maybe<Array<Maybe<Course>>>;
  favoriteDocuments?: Maybe<Array<Maybe<Document>>>;
  files?: Maybe<Array<Maybe<File>>>;
  gift?: Maybe<Gift>;
  homeworkById?: Maybe<Homework>;
  homeworkResult?: Maybe<HomeworkResult>;
  homeworkResults?: Maybe<HomeworkResultsResponse>;
  homeworkTasks?: Maybe<Array<Maybe<HomeworkTask>>>;
  homeworkTestQuestionOptions?: Maybe<Array<Maybe<HomeworkTestQuestionOption>>>;
  lesson?: Maybe<Lesson>;
  liveWebinars?: Maybe<WebinarsResponse>;
  me?: Maybe<MeResponse>;
  messages?: Maybe<MessagesResponse>;
  module?: Maybe<Module>;
  modules?: Maybe<Array<Maybe<Module>>>;
  myFavorites?: Maybe<FavoritesResponse>;
  nextLearningStep?: Maybe<NextLearningStep>;
  nextLesson?: Maybe<Lesson>;
  nextLessons?: Maybe<Array<Maybe<Lesson>>>;
  orderAvailableCards?: Maybe<Array<Maybe<Card>>>;
  orderCheck?: Maybe<OrderPrice>;
  planById?: Maybe<Plan>;
  plans?: Maybe<Array<Maybe<Plan>>>;
  priceListOptions?: Maybe<Array<Maybe<PriceListOption>>>;
  priceLists?: Maybe<Array<Maybe<PriceList>>>;
  priceListsTest?: Maybe<PriceListTestResponse>;
  productActivateBySubscription?: Maybe<Scalars['Boolean']>;
  productById?: Maybe<Product>;
  productUpgrade?: Maybe<OrderCreateResponse>;
  purchases?: Maybe<PurchasesResponse>;
  pushNotifications?: Maybe<MessagesResponse>;
  quizById?: Maybe<Quiz>;
  quizQuestionOptionGroups?: Maybe<QuizQuestionOptionGroupsResponse>;
  quizResult?: Maybe<QuizResult>;
  quizzes?: Maybe<QuizzesResponse>;
  recommendedCourses?: Maybe<CoursesResponse>;
  regionById?: Maybe<Region>;
  regions?: Maybe<RegionsResponse>;
  request?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  rooms?: Maybe<RoomsResponse>;
  statisticsMy?: Maybe<User>;
  subscriptions?: Maybe<Array<Maybe<UserSubscription>>>;
  survey?: Maybe<Survey>;
  surveyQuestionResults?: Maybe<Array<Maybe<SurveyQuestionResult>>>;
  surveyStatistics?: Maybe<Survey>;
  threadById?: Maybe<Thread>;
  ticketById?: Maybe<Ticket>;
  ticketsMy?: Maybe<MyTicketsResponse>;
  tildaPage?: Maybe<TildaPage>;
  transactions?: Maybe<TransactionResponse>;
  userCheck?: Maybe<Array<Maybe<Scalars['String']>>>;
  userVideoMarks?: Maybe<UserVideoMarksResponse>;
  videoById?: Maybe<FaVideo>;
  webinars?: Maybe<WebinarsResponse>;
};


export type QueryFcHomeworkResultByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFcLessonsArgs = {
  filter?: InputMaybe<FcLessonsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FcLessonsSortInput>;
};


export type QueryFcModulesArgs = {
  filter?: InputMaybe<FcModulesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FcModulesSortInput>;
};


export type QueryFcThreadByIdArgs = {
  id: Scalars['String'];
};


export type QueryFcThreadsArgs = {
  filter?: InputMaybe<FcThreadsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FcThreadsSortInput>;
};


export type QueryAppointmentsArgs = {
  filter?: InputMaybe<AppointmentsFilterInput>;
  sort?: InputMaybe<AppointmentsSortInput>;
};


export type QueryAppointmentsMyArgs = {
  filter?: InputMaybe<AppointmentsMyFilterInput>;
  sort?: InputMaybe<AppointmentsSortInput>;
};


export type QueryAuthorByIdArgs = {
  id: Scalars['String'];
};


export type QueryAuthorsArgs = {
  filter?: InputMaybe<AuthorsFilterInput>;
  sort?: InputMaybe<AuthorsSortInput>;
};


export type QueryAvailablePaymentMethodsArgs = {
  productId: Scalars['String'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoriesFilterInput>;
  sort?: InputMaybe<CategoriesSortInput>;
};


export type QueryCitiesArgs = {
  filter?: InputMaybe<CitiesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCityByIdArgs = {
  id: Scalars['Int'];
};


export type QueryConsultationArgs = {
  record: StringIdOrSlug;
};


export type QueryConsultationsArgs = {
  filter?: InputMaybe<ConsultationsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountiesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCourseArgs = {
  record: StringIdOrSlug;
};


export type QueryCoursePreviewArgs = {
  id: Scalars['String'];
  preview: CoursePreview;
};


export type QueryCoursesArgs = {
  filter?: InputMaybe<CoursesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryDocumentByIdArgs = {
  id: Scalars['String'];
};


export type QueryDocumentsArgs = {
  filter?: InputMaybe<DocumentsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DocumentsSortInput>;
};


export type QueryEntityGetParentArgs = {
  entityName: EntityName;
  id: Scalars['String'];
};


export type QueryFaqArgs = {
  id: Scalars['Int'];
};


export type QueryFilesArgs = {
  filter: FilesFilterInput;
};


export type QueryGiftArgs = {
  id: Scalars['String'];
};


export type QueryHomeworkByIdArgs = {
  id: Scalars['String'];
};


export type QueryHomeworkResultArgs = {
  homeworkId: Scalars['String'];
};


export type QueryHomeworkResultsArgs = {
  filter?: InputMaybe<HomeworkResultsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHomeworkTasksArgs = {
  homeworkId: Scalars['String'];
};


export type QueryHomeworkTestQuestionOptionsArgs = {
  questionIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryLessonArgs = {
  record: StringIdOrSlug;
};


export type QueryLiveWebinarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMessagesArgs = {
  filter: MessagesFilterInput;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryModuleArgs = {
  record: StringIdOrSlug;
};


export type QueryModulesArgs = {
  courseId?: InputMaybe<Scalars['String']>;
  threadId?: InputMaybe<Scalars['String']>;
};


export type QueryNextLearningStepArgs = {
  courseId: Scalars['String'];
};


export type QueryNextLessonArgs = {
  record: StringIdOrSlug;
};


export type QueryOrderAvailableCardsArgs = {
  record: OrderAvailableCardsInput;
};


export type QueryOrderCheckArgs = {
  record: OrderCheckInput;
};


export type QueryPlanByIdArgs = {
  id: Scalars['String'];
};


export type QueryPriceListOptionsArgs = {
  productId: Scalars['String'];
};


export type QueryPriceListsArgs = {
  productId: Scalars['String'];
};


export type QueryPriceListsTestArgs = {
  productId: Scalars['String'];
};


export type QueryProductActivateBySubscriptionArgs = {
  id: Scalars['String'];
};


export type QueryProductByIdArgs = {
  id: Scalars['String'];
};


export type QueryProductUpgradeArgs = {
  record: ProductUpgradeInput;
};


export type QueryPurchasesArgs = {
  filter?: InputMaybe<PurchasesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PurchasesSortInput>;
};


export type QueryPushNotificationsArgs = {
  filter?: InputMaybe<PushNotificationsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQuizByIdArgs = {
  id: Scalars['String'];
};


export type QueryQuizQuestionOptionGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQuizResultArgs = {
  quizId: Scalars['String'];
};


export type QueryQuizzesArgs = {
  filter?: InputMaybe<QuizzesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRecommendedCoursesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRegionByIdArgs = {
  id: Scalars['Int'];
};


export type QueryRegionsArgs = {
  filter?: InputMaybe<RegionsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRoomArgs = {
  record: RoomFindInput;
};


export type QueryRoomsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerySurveyArgs = {
  threadId: Scalars['String'];
};


export type QuerySurveyQuestionResultsArgs = {
  surveyId: Scalars['String'];
};


export type QuerySurveyStatisticsArgs = {
  id: Scalars['String'];
};


export type QueryThreadByIdArgs = {
  id: Scalars['String'];
};


export type QueryTicketByIdArgs = {
  id: Scalars['Int'];
};


export type QueryTicketsMyArgs = {
  filter?: InputMaybe<MyTicketsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryTildaPageArgs = {
  alias: Scalars['String'];
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<TransactionsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryUserVideoMarksArgs = {
  filter?: InputMaybe<UserVideoMarksFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryVideoByIdArgs = {
  id: Scalars['String'];
};


export type QueryWebinarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export enum QueueName {
  QueueNameConsultationBefore_30Min = 'QUEUE_NAME_CONSULTATION_BEFORE_30_MIN',
  QueueNameConsultationBeforeDay = 'QUEUE_NAME_CONSULTATION_BEFORE_DAY',
  QueueNameNewThreadInCourse = 'QUEUE_NAME_NEW_THREAD_IN_COURSE',
  QueueNameRecurrent = 'QUEUE_NAME_RECURRENT',
  QueueNameTilda = 'QUEUE_NAME_TILDA',
  QueueNameUnpaidOrder = 'QUEUE_NAME_UNPAID_ORDER'
}

export type Quiz = {
  __typename?: 'Quiz';
  QuizContent?: Maybe<Content>;
  QuizQuestion?: Maybe<Array<Maybe<QuizQuestion>>>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Interval']>;
  id?: Maybe<Scalars['String']>;
  imageList?: Maybe<Array<Maybe<Media>>>;
  imageMob?: Maybe<Array<Maybe<Media>>>;
  imageWeb?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  questionCount?: Maybe<Scalars['Int']>;
  status?: Maybe<QuizUserStatus>;
  studentsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuizType>;
  usersImages?: Maybe<Array<Maybe<Array<Maybe<Media>>>>>;
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  Quiz?: Maybe<Quiz>;
  QuizQuestionContent?: Maybe<Content>;
  QuizQuestionOptions?: Maybe<Array<Maybe<QuizQuestionOption>>>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuizQuestionType>;
};

export type QuizQuestionAnswerCreateInput = {
  optionIds: Array<InputMaybe<Scalars['String']>>;
  questionId: Scalars['String'];
};

export type QuizQuestionOption = {
  __typename?: 'QuizQuestionOption';
  QuizQuestion?: Maybe<QuizQuestion>;
  QuizQuestionOptionGroup?: Maybe<QuizQuestionOptionGroup>;
  RateDuration?: Maybe<QuizQuestionOptionRateDuration>;
  RecommendedConsultation?: Maybe<Consultation>;
  RecommendedCourse?: Maybe<Course>;
  RecommendedDocument?: Maybe<Document>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  recommendation?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['Int']>;
};

export type QuizQuestionOptionGroup = {
  __typename?: 'QuizQuestionOptionGroup';
  description?: Maybe<Scalars['String']>;
  iconDisabled?: Maybe<Array<Maybe<Media>>>;
  iconEnabled?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type QuizQuestionOptionGroupWithResults = {
  __typename?: 'QuizQuestionOptionGroupWithResults';
  Recommendations?: Maybe<Array<Maybe<QuizRecommendationResult>>>;
  description?: Maybe<Scalars['String']>;
  iconDisabled?: Maybe<Array<Maybe<Media>>>;
  iconEnabled?: Maybe<Array<Maybe<Media>>>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type QuizQuestionOptionGroupsResponse = {
  __typename?: 'QuizQuestionOptionGroupsResponse';
  Pagination?: Maybe<Pagination>;
  QuizQuestionOptionGroups?: Maybe<Array<Maybe<QuizQuestionOptionGroup>>>;
};

export type QuizQuestionOptionRateDuration = {
  __typename?: 'QuizQuestionOptionRateDuration';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export enum QuizQuestionType {
  QuizQuestionTypeBool = 'QUIZ_QUESTION_TYPE_BOOL',
  QuizQuestionTypeRate = 'QUIZ_QUESTION_TYPE_RATE',
  QuizQuestionTypeSelectMulti = 'QUIZ_QUESTION_TYPE_SELECT_MULTI',
  QuizQuestionTypeSelectOne = 'QUIZ_QUESTION_TYPE_SELECT_ONE'
}

export type QuizRecommendationResult = {
  __typename?: 'QuizRecommendationResult';
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type QuizRecommendedConsultationResult = {
  __typename?: 'QuizRecommendedConsultationResult';
  Consultation?: Maybe<Consultation>;
  weight?: Maybe<Scalars['Int']>;
};

export type QuizRecommendedCourseResult = {
  __typename?: 'QuizRecommendedCourseResult';
  Course?: Maybe<Course>;
  weight?: Maybe<Scalars['Int']>;
};

export type QuizRecommendedDocumentResult = {
  __typename?: 'QuizRecommendedDocumentResult';
  Document?: Maybe<Document>;
  weight?: Maybe<Scalars['Int']>;
};

export type QuizResult = {
  __typename?: 'QuizResult';
  Quiz?: Maybe<Quiz>;
  QuizRecommendationResults?: Maybe<Array<Maybe<QuizQuestionOptionGroupWithResults>>>;
  QuizRecommendedConsultationResults?: Maybe<Array<Maybe<QuizRecommendedConsultationResult>>>;
  QuizRecommendedCourseResults?: Maybe<Array<Maybe<QuizRecommendedCourseResult>>>;
  QuizRecommendedDocumentResults?: Maybe<Array<Maybe<QuizRecommendedDocumentResult>>>;
  User?: Maybe<User>;
};

export enum QuizType {
  QuizTypeCatalog = 'QUIZ_TYPE_CATALOG',
  QuizTypeDiagnostics = 'QUIZ_TYPE_DIAGNOSTICS'
}

export enum QuizUserStatus {
  QuizUserStatusDone = 'QUIZ_USER_STATUS_DONE',
  QuizUserStatusNotStarted = 'QUIZ_USER_STATUS_NOT_STARTED',
  QuizUserStatusStarted = 'QUIZ_USER_STATUS_STARTED'
}

export type QuizzesFilterInput = {
  type?: InputMaybe<QuizType>;
};

export type QuizzesResponse = {
  __typename?: 'QuizzesResponse';
  Pagination?: Maybe<Pagination>;
  Quizzes?: Maybe<Array<Maybe<Quiz>>>;
};

export type Region = {
  __typename?: 'Region';
  Cities?: Maybe<Array<Maybe<City>>>;
  Country?: Maybe<Country>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RegionsFilterInput = {
  countryId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RegionsResponse = {
  __typename?: 'RegionsResponse';
  Pagination?: Maybe<Pagination>;
  Regions?: Maybe<Array<Maybe<Region>>>;
};

export enum ResolverType {
  ResolverTypeMutation = 'RESOLVER_TYPE_MUTATION',
  ResolverTypeQuery = 'RESOLVER_TYPE_QUERY',
  ResolverTypeScalar = 'RESOLVER_TYPE_SCALAR',
  ResolverTypeSubscription = 'RESOLVER_TYPE_SUBSCRIPTION'
}

export type Role = {
  __typename?: 'Role';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<RoleName>;
};

export enum RoleName {
  RoleNameCurator = 'ROLE_NAME_CURATOR',
  RoleNameReviewer = 'ROLE_NAME_REVIEWER',
  RoleNameStudent = 'ROLE_NAME_STUDENT'
}

export type Room = {
  __typename?: 'Room';
  hasUnreadMessage?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lastMessage?: Maybe<Message>;
  meta?: Maybe<RoomMeta>;
  pinnedMessage?: Maybe<Message>;
};

export type RoomBanUserInput = {
  roomId: Scalars['String'];
  userIds: Array<InputMaybe<Scalars['String']>>;
};

export type RoomCreateAnyFieldsInput = {
  userId?: InputMaybe<Scalars['String']>;
};

export type RoomCreateInput = {
  anyFields?: InputMaybe<RoomCreateAnyFieldsInput>;
  entityName: EntityName;
  id: Scalars['String'];
};

export type RoomFindInput = {
  entityId: Scalars['String'];
  entityName: EntityName;
};

export type RoomMeta = {
  __typename?: 'RoomMeta';
  Parent?: Maybe<Parent>;
};

export enum RoomType {
  RoomTypeOrdinary = 'ROOM_TYPE_ORDINARY',
  RoomTypeSupport = 'ROOM_TYPE_SUPPORT'
}

export type RoomsResponse = {
  __typename?: 'RoomsResponse';
  Pagination?: Maybe<Pagination>;
  Rooms?: Maybe<Array<Maybe<Room>>>;
};

export type Sale = {
  __typename?: 'Sale';
  SaleContents?: Maybe<Array<Maybe<Content>>>;
  active?: Maybe<Scalars['Boolean']>;
  activeFrom?: Maybe<Scalars['Date']>;
  activeTo?: Maybe<Scalars['Date']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<SaleType>;
};

export enum SaleField {
  SaleFieldActive = 'SALE_FIELD_ACTIVE',
  SaleFieldActiveFrom = 'SALE_FIELD_ACTIVE_FROM',
  SaleFieldActiveTo = 'SALE_FIELD_ACTIVE_TO',
  SaleFieldCreatedAt = 'SALE_FIELD_CREATED_AT',
  SaleFieldDiscount = 'SALE_FIELD_DISCOUNT',
  SaleFieldMultiUse = 'SALE_FIELD_MULTI_USE',
  SaleFieldType = 'SALE_FIELD_TYPE',
  SaleFieldUseCountPerUser = 'SALE_FIELD_USE_COUNT_PER_USER',
  SaleFieldUseCountTotal = 'SALE_FIELD_USE_COUNT_TOTAL'
}

export enum SaleType {
  SaleTypeFee = 'SALE_TYPE_FEE',
  SaleTypePercents = 'SALE_TYPE_PERCENTS'
}

export type Setting = {
  __typename?: 'Setting';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Settings = {
  __typename?: 'Settings';
  becomeAPartner?: Maybe<Scalars['String']>;
  becomeAnAuthor?: Maybe<Scalars['String']>;
  book?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  connect?: Maybe<Scalars['String']>;
  contacts?: Maybe<Scalars['String']>;
  experts?: Maybe<Scalars['String']>;
  founder?: Maybe<Scalars['String']>;
  helpCenter?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  jobs?: Maybe<Scalars['String']>;
  ourBrands?: Maybe<Scalars['String']>;
  pressReleases?: Maybe<Scalars['String']>;
  privacyPolicy?: Maybe<Scalars['String']>;
  publicOffer?: Maybe<Scalars['String']>;
  referralProgram?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['String']>;
  support?: Maybe<Scalars['String']>;
  termsOfUse?: Maybe<Scalars['String']>;
  wiCommunity?: Maybe<Scalars['String']>;
};

export enum SocialName {
  SocialNameFacebook = 'SOCIAL_NAME_FACEBOOK',
  SocialNameGoogle = 'SOCIAL_NAME_GOOGLE'
}

export enum SortType {
  SortTypeAsc = 'SORT_TYPE_ASC',
  SortTypeDesc = 'SORT_TYPE_DESC'
}

export type StringIdOrSlug = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSubscription?: Maybe<MessageWithAction>;
  pushNotificationSubscription?: Maybe<NotificationWithType>;
  request?: Maybe<Scalars['String']>;
};


export type SubscriptionMessageSubscriptionArgs = {
  roomId: Scalars['String'];
};

export enum SubscriptionStatus {
  SubscriptionStatusActive = 'SUBSCRIPTION_STATUS_ACTIVE',
  SubscriptionStatusStopped = 'SUBSCRIPTION_STATUS_STOPPED'
}

export enum SubscriptionStopReason {
  SubscriptionStopReasonCanceled = 'SUBSCRIPTION_STOP_REASON_CANCELED',
  SubscriptionStopReasonExpired = 'SUBSCRIPTION_STOP_REASON_EXPIRED'
}

export type SubscriptionUpdateInput = {
  renew?: InputMaybe<Scalars['Boolean']>;
};

export type Subtitle = {
  __typename?: 'Subtitle';
  Language?: Maybe<Language>;
  file?: Maybe<Scalars['String']>;
};

export type Survey = {
  __typename?: 'Survey';
  SurveyQuestions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  Users?: Maybe<Array<Maybe<User>>>
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SurveyOption = {
  __typename?: 'SurveyOption';
  answersCount?: Maybe<Scalars['Int']>;
  freeAnswers?: Maybe<Array<Maybe<SurveyQuestionResult>>>;
  hasFluentAnswer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SurveyQuestion = {
  __typename?: 'SurveyQuestion';
  SurveyOptions?: Maybe<Array<Maybe<SurveyOption>>>;
  SurveyQuestionResults?: Maybe<Array<Maybe<SurveyQuestionResult>>>;
  answersCount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  numbersStatistics?: Maybe<Scalars['GraphQLJSON']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<SurveyQuestionType>;
};

export type SurveyQuestionResult = {
  __typename?: 'SurveyQuestionResult';
  SurveyOption?: Maybe<SurveyOption>;
  SurveyQuestion?: Maybe<SurveyQuestion>;
  User?: Maybe<User>;
  freeAnswer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  numberAnswer?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type SurveyQuestionResultCreateInput = {
  freeAnswer?: InputMaybe<Scalars['String']>;
  numberAnswer?: InputMaybe<Scalars['Int']>;
  optionId?: InputMaybe<Scalars['Int']>;
  questionId: Scalars['Int'];
};

export enum SurveyQuestionType {
  SurveyQuestionTypeBool = 'SURVEY_QUESTION_TYPE_BOOL',
  SurveyQuestionTypeCheckbox = 'SURVEY_QUESTION_TYPE_CHECKBOX',
  SurveyQuestionTypeRadio = 'SURVEY_QUESTION_TYPE_RADIO',
  SurveyQuestionTypeRate = 'SURVEY_QUESTION_TYPE_RATE',
  SurveyQuestionTypeSlider = 'SURVEY_QUESTION_TYPE_SLIDER',
  SurveyQuestionTypeString = 'SURVEY_QUESTION_TYPE_STRING',
  SurveyQuestionTypeText = 'SURVEY_QUESTION_TYPE_TEXT'
}

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type Tariff = {
  __typename?: 'Tariff';
  Gifts?: Maybe<Array<Maybe<Gift>>>;
  Prices?: Maybe<Array<Maybe<Price>>>;
  Product?: Maybe<Product>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  priceDifference?: Maybe<Scalars['Int']>;
};

export enum TariffInternalName {
  TariffInternalNameBase = 'TARIFF_INTERNAL_NAME_BASE',
  TariffInternalNameStandard = 'TARIFF_INTERNAL_NAME_STANDARD',
  TariffInternalNameVip = 'TARIFF_INTERNAL_NAME_VIP'
}

export enum TaskName {
  TaskNameCheckSubscription = 'TASK_NAME_CHECK_SUBSCRIPTION'
}

export enum TemplateDestination {
  TemplateDestinationEmail = 'TEMPLATE_DESTINATION_EMAIL',
  TemplateDestinationPopup = 'TEMPLATE_DESTINATION_POPUP',
  TemplateDestinationPush = 'TEMPLATE_DESTINATION_PUSH'
}

export enum TermType {
  TermTypeCommunityRules = 'TERM_TYPE_COMMUNITY_RULES',
  TermTypePrivacyPolicy = 'TERM_TYPE_PRIVACY_POLICY',
  TermTypePublicOffer = 'TERM_TYPE_PUBLIC_OFFER'
}

export type Thread = {
  __typename?: 'Thread';
  Authors?: Maybe<Array<Maybe<Author>>>;
  Course?: Maybe<FaCourse>;
  Modules?: Maybe<Array<Maybe<Module>>>;
  MyTariff?: Maybe<Tariff>;
  Product?: Maybe<Product>;
  Survey?: Maybe<Survey>;
  ThreadContent?: Maybe<Content>;
  UserThreadProgress?: Maybe<Progress>;
  audioDuration?: Maybe<Scalars['Interval']>;
  availableActions?: Maybe<Array<Maybe<ThreadAvailableAction>>>;
  availableHomeworkCount?: Maybe<Scalars['Int']>;
  completedHomeworkCount?: Maybe<Scalars['Int']>;
  completionRate?: Maybe<Scalars['Float']>;
  courseId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endSubmissionDate?: Maybe<Scalars['Date']>;
  freeDescription?: Maybe<Scalars['String']>;
  freeImage?: Maybe<Array<Maybe<Media>>>;
  freeShow?: Maybe<Scalars['Boolean']>;
  freeTitle?: Maybe<Scalars['String']>;
  homeworksCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Media>>>;
  index?: Maybe<Scalars['Int']>;
  learnDuration?: Maybe<LearnDuration>;
  lessonsCount?: Maybe<Scalars['Int']>;
  modulesCount?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Float']>;
  startSubmissionDate?: Maybe<Scalars['Date']>;
  studentsCompletedCount?: Maybe<Scalars['Int']>;
  studentsCount?: Maybe<Scalars['Int']>;
  submittedHomeworkCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalAudios?: Maybe<Scalars['Int']>;
  totalTests?: Maybe<Scalars['Int']>;
  totalVideos?: Maybe<Scalars['Int']>;
  uncompletedHomeworkResultCount?: Maybe<Scalars['Int']>;
  userAccessDuration?: Maybe<Scalars['Duration']>;
  videoDuration?: Maybe<Scalars['Interval']>;
  viewStudents?: Maybe<Scalars['Boolean']>;
};

export enum ThreadAvailableAction {
  ThreadAvailableActionActivateByFree = 'THREAD_AVAILABLE_ACTION_ACTIVATE_BY_FREE',
  ThreadAvailableActionActivateBySubscription = 'THREAD_AVAILABLE_ACTION_ACTIVATE_BY_SUBSCRIPTION',
  ThreadAvailableActionBuy = 'THREAD_AVAILABLE_ACTION_BUY'
}

export enum ThreadField {
  ThreadFieldCreatedAt = 'THREAD_FIELD_CREATED_AT',
  ThreadFieldEndSubmissionDate = 'THREAD_FIELD_END_SUBMISSION_DATE',
  ThreadFieldIndex = 'THREAD_FIELD_INDEX',
  ThreadFieldStartRate = 'THREAD_FIELD_START_RATE',
  ThreadFieldStartSubmissionDate = 'THREAD_FIELD_START_SUBMISSION_DATE',
  ThreadFieldStudentsCount = 'THREAD_FIELD_STUDENTS_COUNT',
  ThreadFieldUncompletedHomeworkResultCount = 'THREAD_FIELD_UNCOMPLETED_HOMEWORK_RESULT_COUNT'
}

export type Ticket = {
  __typename?: 'Ticket';
  Room?: Maybe<Room>;
  body?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TicketCommentCreateInput = {
  body: Scalars['String'];
  file?: InputMaybe<Scalars['Upload']>;
  ticketId: Scalars['Int'];
};

export type TicketCreateInput = {
  attachment?: InputMaybe<Scalars['Upload']>;
  body: Scalars['String'];
  title: Scalars['String'];
};

export type TicketUpdateInput = {
  closed: Scalars['Boolean'];
  id: Scalars['Int'];
};

export type TildaPage = {
  __typename?: 'TildaPage';
  TildaProject?: Maybe<TildaProject>;
  active?: Maybe<Scalars['Boolean']>;
  alias?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  date?: Maybe<Scalars['Date']>;
  descr?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  featureimg?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['GraphQLJSON']>;
  id?: Maybe<Scalars['Int']>;
  img?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type TildaProject = {
  __typename?: 'TildaProject';
  createdAt?: Maybe<Scalars['Date']>;
  css?: Maybe<Array<Maybe<Scalars['String']>>>;
  descr?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  js?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum TildaType {
  TildaJobTypeUpsertPage = 'TILDA_JOB_TYPE_UPSERT_PAGE',
  TildaJobTypeUpsertPages = 'TILDA_JOB_TYPE_UPSERT_PAGES',
  TildaJobTypeUpsertProject = 'TILDA_JOB_TYPE_UPSERT_PROJECT',
  TildaJobTypeUpsertProjects = 'TILDA_JOB_TYPE_UPSERT_PROJECTS'
}

export type Timezone = {
  __typename?: 'Timezone';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tzCode?: Maybe<Scalars['String']>;
  utc?: Maybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export enum TokenType {
  TokenTypeAccess = 'TOKEN_TYPE_ACCESS',
  TokenTypeAutoGeneratedAccess = 'TOKEN_TYPE_AUTO_GENERATED_ACCESS',
  TokenTypeForgot = 'TOKEN_TYPE_FORGOT',
  TokenTypeRememberMe = 'TOKEN_TYPE_REMEMBER_ME',
  TokenTypeVerifyEmail = 'TOKEN_TYPE_VERIFY_EMAIL'
}

export type Transaction = {
  __typename?: 'Transaction';
  Order?: Maybe<Order>;
  actualAmount?: Maybe<Scalars['Int']>;
  actualCurrency?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  dateOfStatusChange?: Maybe<Scalars['Date']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<TransactionStatus>;
};

export type TransactionResponse = {
  __typename?: 'TransactionResponse';
  Pagination?: Maybe<Pagination>;
  Transactions?: Maybe<Array<Maybe<Transaction>>>;
};

export enum TransactionStatus {
  TransactionStatusApproved = 'TRANSACTION_STATUS_APPROVED',
  TransactionStatusCreated = 'TRANSACTION_STATUS_CREATED',
  TransactionStatusDeclined = 'TRANSACTION_STATUS_DECLINED',
  TransactionStatusDuplicate = 'TRANSACTION_STATUS_DUPLICATE',
  TransactionStatusExpired = 'TRANSACTION_STATUS_EXPIRED',
  TransactionStatusGift = 'TRANSACTION_STATUS_GIFT',
  TransactionStatusInReverseProcess = 'TRANSACTION_STATUS_IN_REVERSE_PROCESS',
  TransactionStatusPending = 'TRANSACTION_STATUS_PENDING',
  TransactionStatusProcess = 'TRANSACTION_STATUS_PROCESS',
  TransactionStatusPurchase = 'TRANSACTION_STATUS_PURCHASE',
  TransactionStatusReverse = 'TRANSACTION_STATUS_REVERSE',
  TransactionStatusReversed = 'TRANSACTION_STATUS_REVERSED'
}

export type TransactionsFilterInput = {
  createdAt?: InputMaybe<DateRange>;
};

export enum Transport {
  TransportEmail = 'TRANSPORT_EMAIL'
}

export type User = {
  __typename?: 'User';
  City?: Maybe<City>;
  Country?: Maybe<Country>;
  Currency?: Maybe<Currency>;
  Gender?: Maybe<UserGender>;
  Language?: Maybe<Language>;
  Region?: Maybe<Region>;
  Role?: Maybe<Role>;
  avatar?: Maybe<Array<Maybe<Media>>>;
  birthDate?: Maybe<Scalars['Date']>;
  completedLessons?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  giftsReceived?: Maybe<Scalars['Int']>;
  hadSubscriptionBefore?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isResident?: Maybe<Scalars['Boolean']>;
  lastActiveDate?: Maybe<Scalars['Date']>;
  monthsFromRegistration?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export enum UserField {
  UserFieldBirthdate = 'USER_FIELD_BIRTHDATE',
  UserFieldEmail = 'USER_FIELD_EMAIL',
  UserFieldFullName = 'USER_FIELD_FULL_NAME',
  UserFieldGender = 'USER_FIELD_GENDER',
  UserFieldIsResident = 'USER_FIELD_IS_RESIDENT',
  UserFieldPhone = 'USER_FIELD_PHONE',
  UserFieldTimezone = 'USER_FIELD_TIMEZONE'
}

export enum UserGender {
  UserGenderFemale = 'USER_GENDER_FEMALE',
  UserGenderMale = 'USER_GENDER_MALE',
  UserGenderNotSelect = 'USER_GENDER_NOT_SELECT'
}

export enum UserHomeworkStatus {
  UserHomeworkStatusDone = 'USER_HOMEWORK_STATUS_DONE',
  UserHomeworkStatusNotStarted = 'USER_HOMEWORK_STATUS_NOT_STARTED',
  UserHomeworkStatusReview = 'USER_HOMEWORK_STATUS_REVIEW',
  UserHomeworkStatusStarted = 'USER_HOMEWORK_STATUS_STARTED'
}

export type UserRegistrationData = {
  avatar?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Date']>;
  currencyId?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  isResident?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  primaryLanguageId?: InputMaybe<Scalars['Int']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  Merchant?: Maybe<Merchant>;
  Plan?: Maybe<Plan>;
  Tariff?: Maybe<Tariff>;
  activationsLeft?: Maybe<Scalars['Int']>;
  activationsUsed?: Maybe<Scalars['Int']>;
  activeEndDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  isTrial?: Maybe<Scalars['Boolean']>;
  lastPaymentDate?: Maybe<Scalars['Date']>;
  maxActivated?: Maybe<Scalars['Int']>;
  pastDueEndDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Int']>;
  renew?: Maybe<Scalars['Boolean']>;
  startFromTrial?: Maybe<Scalars['Boolean']>;
  status?: Maybe<SubscriptionStatus>;
  stopReason?: Maybe<SubscriptionStopReason>;
};

export type UserVideoMark = {
  __typename?: 'UserVideoMark';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timing?: Maybe<Scalars['Time']>;
  userId?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
};

export type UserVideoMarkCreateInput = {
  text: Scalars['String'];
  timing: Scalars['Time'];
  videoId: Scalars['String'];
};

export type UserVideoMarkUpdateInput = {
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type UserVideoMarksFilterInput = {
  videoId?: InputMaybe<Scalars['String']>;
};

export type UserVideoMarksResponse = {
  __typename?: 'UserVideoMarksResponse';
  Pagination?: Maybe<Pagination>;
  UserVideoMarks?: Maybe<Array<Maybe<UserVideoMark>>>;
};

export type VideoFile = {
  __typename?: 'VideoFile';
  path?: Maybe<Scalars['String']>;
  resolution?: Maybe<VideoResolution>;
};

export enum VideoResolution {
  VideoResolution_360 = 'VIDEO_RESOLUTION_360',
  VideoResolution_720 = 'VIDEO_RESOLUTION_720',
  VideoResolution_1080 = 'VIDEO_RESOLUTION_1080'
}

export type WebinarsResponse = {
  __typename?: 'WebinarsResponse';
  Documents?: Maybe<Array<Maybe<Document>>>;
  Pagination?: Maybe<Pagination>;
};

export type DirectoriesResponse = {
  __typename?: 'directoriesResponse';
  Currencies?: Maybe<Array<Maybe<Currency>>>;
  Enums?: Maybe<Enums>;
  Languages?: Maybe<Array<Maybe<Language>>>;
  Settings?: Maybe<Settings>;
  Timezones?: Maybe<Array<Maybe<Timezone>>>;
};

export type EnumPoint = {
  __typename?: 'enumPoint';
  value?: Maybe<Scalars['String']>;
};

export type OrderPaySavedCardInput = {
  cardId: Scalars['String'];
  orderId: Scalars['String'];
};
