import { MultiversalAppBootstrapPageProps } from '../nextjs/MultiversalAppBootstrapPageProps';
import { MultiversalPageProps } from './MultiversalPageProps';
import { OnlyServerPageProps } from './OnlyServerPageProps';

/**
 * Dynamic (server) properties returned by getInitialProps or getServerProps for server-side rendered pages (using SSR)
 * Mind that those properties are generated by the server, for each request
 *
 * Multiversal page props are listed in MultiversalPageProps
 * Server-side page props are listed in SSRPageProps
 * Client-side page props are listed in SSGPageProps
 */
export type SSRPageProps<E extends OnlyServerPageProps = OnlyServerPageProps> = {
  // Props that are specific to SSR
  isServerRendering: boolean;
} & MultiversalPageProps // Generic props that are provided immediately, no matter what
  & Partial<MultiversalAppBootstrapPageProps> // Pages served by SSR eventually benefit from props injected by the MultiversalAppBootstrap component
  & E;
