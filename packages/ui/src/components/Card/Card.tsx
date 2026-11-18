import {
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cx } from '@/utils/cx';

import styles from './Card.module.css';

export interface CardHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export const CardHeader = forwardRef<
  HTMLDivElement,
  CardHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(styles.header, className)}
      {...props}
    />
  );
});

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends ComponentPropsWithoutRef<'h2'> {}

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  CardTitleProps
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cx(styles.title, className)}
      {...props}
    />
  );
});

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends ComponentPropsWithoutRef<'p'> {}

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cx(styles.description, className)}
      {...props}
    />
  );
});

CardDescription.displayName = 'CardDescription';

export interface CardActionsProps extends ComponentPropsWithoutRef<'div'> {}

export const CardActions = forwardRef<
  HTMLDivElement,
  CardActionsProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(styles.actions, className)}
      {...props}
    />
  );
});

CardActions.displayName = 'CardActions';

export interface CardContentProps extends ComponentPropsWithoutRef<'div'> {}

export const CardContent = forwardRef<
  HTMLDivElement,
  CardContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(styles.content, className)}
      {...props}
    />
  );
});

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends ComponentPropsWithoutRef<'div'> {}

export const CardFooter = forwardRef<
  HTMLDivElement,
  CardFooterProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(styles.footer, className)}
      {...props}
    />
  );
});

CardFooter.displayName = 'CardFooter';

export interface CardDividerProps extends ComponentPropsWithoutRef<'div'> {}

export const CardDivider = forwardRef<
  HTMLDivElement,
  CardDividerProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      className={cx(styles.divider, className)}
      {...props}
    />
  );
});

CardDivider.displayName = 'CardDivider';

export interface CardProps extends ComponentPropsWithoutRef<'section'> {
  variant?: 'default' | 'outlined' | 'elevated' | 'flat';
}

export const CardRoot = forwardRef<HTMLElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx(styles.card, className)}
        data-variant={variant}
        {...props}
      />
    );
  },
);

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Actions: CardActions,
  Content: CardContent,
  Footer: CardFooter,
  Divider: CardDivider,
});

Card.displayName = 'Card';

export namespace Card {
  export type Props = CardProps;
  export type HeaderProps = CardHeaderProps;
  export type TitleProps = CardTitleProps;
  export type DescriptionProps = CardDescriptionProps;
  export type ActionsProps = CardActionsProps;
  export type ContentProps = CardContentProps;
  export type FooterProps = CardFooterProps;
  export type DividerProps = CardDividerProps;
}
