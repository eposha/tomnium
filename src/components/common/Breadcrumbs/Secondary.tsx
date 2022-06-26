import Link from 'next/link';
import * as UI from 'styles/breadcrumbs';

type DataList = {
  name: string;
  link: string;
};

interface IBreadCrumbs {
  dataList: DataList[];
  title: string;
}

export const SecondaryBreadCrumbs = ({dataList, title}: IBreadCrumbs) => {
  return (
    <>
      <UI.CrumbsNavigation>
        <UI.CrumbsList>
          {dataList.map((data) => (
            <UI.CrumbsItem key={data.name}>
              <Link href={data.link} passHref>
                <UI.CrumbsLink>
                  <UI.CrumbsText>{`${data.name}  /  `}</UI.CrumbsText>
                </UI.CrumbsLink>
              </Link>
            </UI.CrumbsItem>
          ))}
          <UI.CrumbsItem>
            <UI.CrumbsText color={'blueberry'}>{title}</UI.CrumbsText>
          </UI.CrumbsItem>
        </UI.CrumbsList>
      </UI.CrumbsNavigation>
    </>
  );
};
