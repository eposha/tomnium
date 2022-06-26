import {gql} from '@apollo/client';
// import {DirectoriesFragment} from '@/fragments/directories';

export const DIRECTORIES = gql`
  query directories {
    directories {
      Enums {
        GiftEntityType {
          value
        }
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
      Settings {
        company
        founder
        jobs
        experts
        pressReleases
        connect
        support
        contacts
        invite
        referralProgram
        helpCenter
        ourBrands
        wiCommunity
        book
        shop
        publicOffer
        termsOfUse
        privacyPolicy
        becomeAnAuthor
        becomeAPartner
      }
    }
  }
`;

export const DIRECTORIES_TILDA = gql`
  query directories {
    directories {
      Settings {
        connect
      }
    }
  }
`;

export const DIRECTORIES_SWR = `
query directories {
  directories {
    Enums {
      GiftEntityType {
        value
      }

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
    Settings {
      company
      founder
      jobs
      experts
      pressReleases
      connect
      support
      contacts
      invite
      referralProgram
      helpCenter
      ourBrands
      wiCommunity
      book
      shop
      publicOffer
      termsOfUse
      privacyPolicy
      becomeAnAuthor
      becomeAPartner
      faqIdCard
      faqIdConsultations
      faqIdCourses
      faqIdPriceList
      faqIdTicket
      faqIdDocuments
      faqIdCash
    }
  }
}
`;

export const DIRECTORIES_FAQS = gql`
  query directories {
    directories {
      Settings {
        faqIdCard
        faqIdConsultations
        faqIdPriceList
        faqIdTicket
        faqIdDocuments
        faqIdCard
        faqIdCash
        faqIdCourses
      }
    }
  }
`;
