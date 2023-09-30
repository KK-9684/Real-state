import React, { type ReactNode } from 'react'
import Header from './header'

type LayoutProps = {
  children: ReactNode
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}