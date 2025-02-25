import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeClient from './theme-client';
 
 export default function RootLayout(props) {
   const { children } = props;

   return (
     <html lang="en">
      <body  >
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeClient>
          {children}
           </ThemeClient>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }