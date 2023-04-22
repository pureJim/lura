import { CracoConfig } from '@craco/types';
import path from 'path';

const config: CracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  typescript: {
    enableTypeChecking: true,
  },
};

export default config;
