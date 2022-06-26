import NextLink from 'next/link';
import {Button} from 'styles/common';
import {IPropsButton} from 'styles/common/Button';

export const NavLink: React.FC<IPropsButton & {path: string}> = ({
  children,
  path,
  ...props
}) => {
  return (
    <NextLink href={path}>
      <a>
        <Button {...props}>{children}</Button>
      </a>
    </NextLink>
  );
};
