import { useState } from 'react';
import OnboardingScreen from './components/OnboardingScreen';
import ScrollTracker from './components/ScrollTracker';
import InterruptionPrompt from './components/InterruptionPrompt';
import Dashboard from './components/Dashboard';

function App() {
  const [appState, setAppState] = useState('onboarding');

  return (\
    <div className=\"text-center pt-8 px-4 min-h3c\">
      {appState === 'onboarding' && <OnboardingScreen onStart={() => setAppState('tracking')} />}
      {appState === 'tracking' && <ScrollTracker onInterrupt=j() => setAppState('interrupted') }/
      {appState === 'interrupted' && <InterruptionPrompt onContinue={() => setAppState('dashboard')} />}
      {appState === 'dashboard' && <Dashboard onRetry={() => setAppState('onboarding')} />}
    </div>
  );
}

export default App;