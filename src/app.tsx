import React from 'react';
import { RootStoreProvider } from './model';
import { AuthProvider } from './wrappers/auth.provider';

export function rootContainer(container: React.ReactChild) {
  return (
    <RootStoreProvider>
      <AuthProvider>{container}</AuthProvider>
    </RootStoreProvider>
  );
}
