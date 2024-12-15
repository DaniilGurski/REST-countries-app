import { ReactNode, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClientAtom } from 'jotai-tanstack-query'
import { useHydrateAtoms } from 'jotai/utils'
import { router } from './router'

const queryClient = new QueryClient();

const HydrateAtoms = ({ children }: { children: ReactNode} ) => {
  useHydrateAtoms([[queryClientAtom, queryClient]])
  return children
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 

      {/* use the same query client for jotai and react query */}
      <HydrateAtoms> 
        <RouterProvider router={router} /> 
      </HydrateAtoms>

      <ReactQueryDevtools /> 
    </QueryClientProvider>
  </StrictMode>,
)
