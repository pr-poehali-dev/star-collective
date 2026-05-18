
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Catherine from "./pages/monuments/Catherine";
import Alley from "./pages/monuments/Alley";
import Madonna from "./pages/monuments/Madonna";
import Norwegian from "./pages/monuments/Norwegian";
import Tank from "./pages/monuments/Tank";
import Flame from "./pages/monuments/Flame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/monuments/catherine" element={<Catherine />} />
          <Route path="/monuments/alley" element={<Alley />} />
          <Route path="/monuments/madonna" element={<Madonna />} />
          <Route path="/monuments/norwegian" element={<Norwegian />} />
          <Route path="/monuments/tank" element={<Tank />} />
          <Route path="/monuments/flame" element={<Flame />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;