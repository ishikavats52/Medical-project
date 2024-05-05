import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remove duplicate imports and unnecessary Tailwind references
export default defineConfig({
  plugins: [react()],
});
