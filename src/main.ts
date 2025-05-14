import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Importa os scripts do Preline UI
import 'preline/preline';

// Inicializa os scripts do Preline após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Proteção para evitar erro caso HSStaticMethods não esteja disponível
  (window as any).HSStaticMethods?.autoInit?.();
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
