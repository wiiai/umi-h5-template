import React from 'react';
import { Header } from './components/header';
import { RootStoreProvider } from './model';
import { AuthProvider } from './wrappers/auth.provider';

export function rootContainer(container: React.ReactChild) {
  return (
    <RootStoreProvider>
      <AuthProvider>
        <Header />
        <div className="g-main">{container}</div>
      </AuthProvider>
    </RootStoreProvider>
  );
}
