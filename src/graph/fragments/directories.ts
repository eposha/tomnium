import {gql} from '@apollo/client';

export const DirectoriesFragment = gql`
  fragment DirectoriesFragment on directoriesResponse {
    Enums {
      # GiftEntityType {
      #   value
      # }
      # GiftAccessType {
      #   value
      # }
      AuthorEntityType {
        value
      }
      CategoryEntityType {
        value
      }
      DocumentType {
        value
      }
      HomeworkType {
        value
      }
      SaleType {
        value
      }
      PurchaseStatus {
        value
      }
      ConsultationDuration {
        value
      }
      EntityName {
        value
      }
      FavoriteTarget {
        value
      }
      PgJobState {
        value
      }
      SurveyQuestionType {
        value
      }
      SortType {
        value
      }
      CmsUserField {
        value
      }
      CouponField {
        value
      }
      DocumentField {
        value
      }
    }
    Timezones {
      label
      tzCode
      name
      utc
    }
    Languages {
      id
      name
      nativeName
      code
      index
    }
    Currencies {
      id
      name
      code
    }
  }
`;
