import { useEffect, useState } from 'react';
import {
  getAnimeList,
  getAnimeListThen,
  getPinballData,
  getPinballDataThen,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    getAnimeList();
    getAnimeListThen();
    getPinballData();
    getPinballDataThen();
    ('');
  }, []);

  return <h1>Hello World</h1>;
}
