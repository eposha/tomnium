import Link from 'next/link';
import {Media} from 'src/media-styles';
import {
  ColumnFlex,
  Container,
  ContentWrapper,
  Flex,
  FlexVertCenter,
} from 'styles/courses/my-courses/common';
import * as UI from 'styles/courses/my-courses/completed-course-card';
import {
  AuthorPhoto,
  AuthorText,
  AuthorTitle,
  AuthorWrapper,
  CheckedSVG,
  ClockSVG,
  FooterContainer,
  FooterLink,
  FooterText,
  InfoText,
  MyCourseImage,
  MyCourseLabel,
  MyCourseTag,
} from 'styles/courses/my-courses/my-course-card';

const CompletedCourseCard = () => {
  return (
    <>
      <Media lessThan='lg'>
        <UI.CompletedCourseWrapper>
          <Container mb={15}>
            <MyCourseImage src={'/images/courses/test2.jpg'} />
            <MyCourseLabel>Окончено: 21.06.21</MyCourseLabel>
            <MyCourseTag>Курс</MyCourseTag>
          </Container>
          <FooterContainer mb={20}>
            <FooterContainer>
              <UI.ClockSVG />
              <UI.Span>Завершен</UI.Span>
            </FooterContainer>
            <UI.Status>VIP +</UI.Status>
          </FooterContainer>
          <FooterContainer mb={20}>
            <AuthorPhoto src={'/images/test.jpg'} />
            <ContentWrapper>
              <AuthorTitle>Светлана Керимова</AuthorTitle>
              <AuthorText>Основательница Woman Insight</AuthorText>
            </ContentWrapper>
          </FooterContainer>
          <UI.Title>“Притяжение ON” Ты магнит для мужчин</UI.Title>
          <UI.MenuWrapper>
            <FooterContainer>
              <FooterContainer>
                <UI.DocumentIconSVG />
                <UI.MenuText>Скачать сертификат</UI.MenuText>
              </FooterContainer>
              <UI.MenuList>
                <UI.MenuItem>
                  <UI.MenuLink>
                    <UI.FacebookIconSVG />
                  </UI.MenuLink>
                </UI.MenuItem>
                <UI.MenuItem>
                  <UI.MenuLink>
                    <UI.InstagramIconSVG />
                  </UI.MenuLink>
                </UI.MenuItem>
                <UI.MenuItem>
                  <UI.MenuLink>
                    <UI.ChainIconVG />
                  </UI.MenuLink>
                </UI.MenuItem>
              </UI.MenuList>
            </FooterContainer>
          </UI.MenuWrapper>
          <FooterContainer>
            <FooterContainer>
              <CheckedSVG />
              <FooterText>Прогресс: 70%</FooterText>
            </FooterContainer>
            <Link href='#' passHref>
              <FooterLink>Смотреть</FooterLink>
            </Link>
          </FooterContainer>
        </UI.CompletedCourseWrapper>
      </Media>
      <Media greaterThan='md'>
        <UI.CompletedCourseWrapper>
          <Flex>
            <Container>
              <MyCourseImage src={'/images/courses/test2.jpg'} />
              <MyCourseTag>Курс</MyCourseTag>
            </Container>
            <ColumnFlex jc='center' mr={40}>
              <UI.Title>“Притяжение ON” Ты магнит для мужчин</UI.Title>
              <UI.MenuWrapper>
                <FooterContainer>
                  <FooterContainer>
                    <UI.DocumentIconSVG />
                    <UI.MenuText>Скачать сертификат</UI.MenuText>
                  </FooterContainer>
                  <UI.MenuList>
                    <UI.MenuItem>
                      <UI.MenuLink>
                        <UI.FacebookIconSVG />
                      </UI.MenuLink>
                    </UI.MenuItem>
                    <UI.MenuItem>
                      <UI.MenuLink>
                        <UI.InstagramIconSVG />
                      </UI.MenuLink>
                    </UI.MenuItem>
                    <UI.MenuItem>
                      <UI.MenuLink>
                        <UI.ChainIconVG />
                      </UI.MenuLink>
                    </UI.MenuItem>
                  </UI.MenuList>
                </FooterContainer>
              </UI.MenuWrapper>
            </ColumnFlex>
            <ColumnFlex jc='space-around' mr={60}>
              <UI.Status>VIP +</UI.Status>
              <FooterContainer>
                <CheckedSVG />
                <UI.Span>Завершен</UI.Span>
              </FooterContainer>
            </ColumnFlex>
            <ColumnFlex jc='space-between'>
              <AuthorWrapper>
                <AuthorPhoto src={'/images/test.jpg'} />
                <ContentWrapper>
                  <AuthorTitle>Светлана Керимова</AuthorTitle>
                </ContentWrapper>
              </AuthorWrapper>
              <FlexVertCenter>
                <ClockSVG color='red' />
                <InfoText>Уже недоступно</InfoText>
              </FlexVertCenter>
              <Link href='#' passHref>
                <FooterLink>Cмотреть</FooterLink>
              </Link>
            </ColumnFlex>
          </Flex>
        </UI.CompletedCourseWrapper>
      </Media>
    </>
  );
};

export default CompletedCourseCard;
